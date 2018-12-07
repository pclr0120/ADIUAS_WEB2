import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ag-sub-menu',
  templateUrl: './ag-sub-menu.page.html',
  styleUrls: ['./ag-sub-menu.page.scss'],
})
export class AgSubMenuPage implements OnInit {
  pages: Array<{title: string, component: any}>;
  public appPages = [
    {
      title: 'Ciclo Escolar',
      url: '/CicloEscolar/Tabla',
      icon: 'home'
    },
    {
      title: 'Programa Educativo',
      url: '/ProgramaEduactivo/Tabla',
      icon: 'list'
    }
  ];
  constructor() {

    this.pages = [
      { title: 'Ciclo Escolar', component:  AgSubMenuPage },
      { title: 'Unidad Académicas', component:  AgSubMenuPage },
      { title: 'Programas Educativos', component:  AgSubMenuPage },
      { title: 'Usuarios del Sistema', component: AgSubMenuPage },
      { title: 'Discapacidad o Condición NEE', component: AgSubMenuPage },
      { title: 'Estilos de aprendizaje', component: AgSubMenuPage },
      { title: 'Estudiantes con NEE', component: AgSubMenuPage }
    
    ];
   }

  ngOnInit() {
  }

}
