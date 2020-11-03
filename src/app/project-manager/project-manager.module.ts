import {ProjectManagerComponent} from './project-manager.component';
import {ProjectManagerRoutingModule} from './project-manger.routing.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ProjectManagerRoutingModule
  ],
  declarations: [
    ProjectManagerComponent
  ]
})
export class ProjectManagerModule {
}
