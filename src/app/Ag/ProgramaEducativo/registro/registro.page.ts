import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProgramaEducativoService } from 'src/Servicios/ProgramaEducativo/programa-educativo.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  private Programa: FormGroup;

  constructor(
    private formBuilder: FormBuilder, private servicio: ProgramaEducativoService


  ) {

    this.Programa = this.formBuilder.group({
      NomPE: ['', Validators.compose([Validators.maxLength(150), Validators.minLength(10)])],
      UnidReg: ['', Validators.compose([Validators.maxLength(150), Validators.minLength(5)])],
      UnidAcad: ['', Validators.compose([Validators.maxLength(150), Validators.minLength(5)])],
      NivelEdu: ['', Validators.compose([Validators.maxLength(150), Validators.minLength(5)])]

    });


  }

 ngOnInit() {
    this.servicio.consultar();
  

  }

}
