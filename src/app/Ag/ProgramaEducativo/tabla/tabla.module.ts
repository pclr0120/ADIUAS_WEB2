import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TablaPage } from './tabla.page';
import{ProgramaEducativoService}from'../../../../Servicios/ProgramaEducativo/programa-educativo.service';

const routes: Routes = [
  {
    path: '',
    component: TablaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],

  providers:[ProgramaEducativoService],
  declarations: [TablaPage]
})
export class TablaPageModule {}
