import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkListComponent } from './components/work-list/work-list.component';
import { WorkFormComponent } from './components/work-form/work-form.component';

@NgModule({
  declarations: [
    WorkListComponent,
    WorkFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WorkListComponent
  ]
})
export class CoreModule { }
