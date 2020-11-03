import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProjectManagerComponent} from './project-manager.component';

const ProjectMangerRoutes = [
  {path: '', redirectTo: 'home'},
  {path: 'home', component: ProjectManagerComponent}
];


@NgModule({
  imports: [
    RouterModule.forChild(ProjectMangerRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})

export class ProjectManagerRoutingModule {
}
