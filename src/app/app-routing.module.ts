import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'ag-sub-Menu', loadChildren: './Ag/ag-sub-menu/ag-sub-menu.module#AgSubMenuPageModule' },
  { path: 'Registrar', loadChildren: './Ag/CicloEscolar/registrar/registrar.module#RegistrarPageModule' },
  { path: 'CicloEscolar/Tabla', loadChildren: './Ag/CicloEscolar/tabla/tabla.module#TablaPageModule' },
  { path: 'ProgramaEduactivo/Tabla', loadChildren: './Ag/ProgramaEducativo/tabla/tabla.module#TablaPageModule' },
  { path: 'ProgramaEduactivo/Registro', loadChildren: './Ag/ProgramaEducativo/registro/registro.module#RegistroPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
