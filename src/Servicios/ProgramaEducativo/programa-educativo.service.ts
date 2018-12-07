import { Injectable } from '@angular/core';

import { ProgramaEducativo } from 'src/Modelos/ProgramaEducativo';
import { HttpClient } from '@angular/common/http';
import { Conexion } from 'src/APiBackEnd/conexion';
import { IProgramaEducativo } from 'src/Interfaz/IProgramaEducativo';
import { paginacion } from 'src/Modelos/Paginacion';
import { async } from '@angular/core/testing';
import { AlertController, LoadingController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class ProgramaEducativoService {
  public Tabla: ProgramaEducativo[] = [];
  public TablaAuxiliar: ProgramaEducativo[] = []; //para el filtrado
  public TotalPaginas: number[] = [];
  public paginaActual: number = 10;
  public mensaje:string="No hay registros";  //para mostrar mensaje de error o busqueda
  public Registro: ProgramaEducativo = new ProgramaEducativo();

  private conexion: Conexion = new Conexion;
  constructor(private httpClient: HttpClient,
    private alertCtrl: AlertController,
    public loadingController: LoadingController

  ) {
    this.Registro=new ProgramaEducativo();

  }
//#region  pagina
  public inicializar() {

    this.getDatos();
  }
  public getDatos() {
    this.TablaAuxiliar = this.Tabla;
  }
  public Buscar(ev: any) {
    this.getDatos();
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.TablaAuxiliar = this.Tabla.filter((item) => {
        return (item.NomPE.toString().toLowerCase().indexOf(val.toLowerCase()) > -1);
      })

      if (this.TablaAuxiliar.length < 1) {
        this.TablaAuxiliar = this.Tabla.filter((item) => {
          return (item.Nombre_UA.toString().toLowerCase().indexOf(val.toLowerCase()) > -1);
        })

      }
    }

    if(this.TablaAuxiliar.length<0)
      this.mensaje="Ningun registro conicide con la busqueda.."
  }
  public paginacion() {
    let numero = 0;
    let decimal = 0;
    let decimal2 = 0.1;
    if (this.Tabla.length >= 10) {
      numero = Math.trunc(this.Tabla.length / 10);
      let decimal2 = this.Tabla.length / 10;
    }
    else {
      numero = Math.trunc(10 / this.Tabla.length);
      decimal2 = 10 / this.Tabla.length;
    }
    let v = decimal2.toString().split('.');
    let rango = 0;
    for (let i = 0; i < numero; i++) {
      let data: number;
      rango += 10;

      data = rango;
      this.TotalPaginas.push(data);
    }
    if (decimal2 > 0) {

      let data: number;

      data = this.Tabla.length;
      this.TotalPaginas.push(data);
    }



  }
//#endregion


//#region  backend
  public Registrar() {
    try {
      this.httpClient.post(this.conexion.Api + this.conexion.AgProgramaEducativoRegistrar, this.Registro).subscribe(res => {

      }, (err) => {


      });
    } catch (error) {

    }

  }
 
  public consultar() {
    this.mensaje="No hay registros..."
    this.cargando().then(res => {

      this.httpClient.get<IProgramaEducativo>(this.conexion.Api + this.conexion.AgProgramaEducativoConsultar).subscribe(res => {
        this.Tabla = [];

        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            const element = res[key];
            this.Tabla.push(element);
          }
        }
      
        this.TablaAuxiliar = this.Tabla;
    
        this.paginacion();
 
      }, (err) => {
 
        this.mensaje="Error1: Al cargar los datos intente de nuevo. Si el error perciste  reporte el problema."
      
      });

    }, (err) => {
     
      this.mensaje="Error2: Al cargar los datos, intente de nuevo. Si el error perciste  reporte el problema."
 

    });



  }

  public Actualizar() {


  }

  public Eliminar() {



  }

  //#endregion

  //#region  tools

  async cargando() {
    const loading = await this.loadingController.create({
      message: 'Actualizando datos...',
      duration: 2000
    });
    return await loading.present();
    
  }


  //#endregion




}
