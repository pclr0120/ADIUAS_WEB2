import { Component, OnInit } from '@angular/core';
import { ProgramaEducativoService } from 'src/Servicios/ProgramaEducativo/programa-educativo.service';
import { AlertController, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.page.html',
  styleUrls: ['./tabla.page.scss'],
})
export class TablaPage implements OnInit {

  constructor(private servicio:ProgramaEducativoService,
    public alertController: AlertController,
    public modalController: ModalController,
    ) {

     }

  ngOnInit() {
    this.servicio.consultar();


  }





}
