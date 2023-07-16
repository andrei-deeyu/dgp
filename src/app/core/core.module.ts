import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkListComponent } from './components/work-list/work-list.component';
import { WorkFormComponent } from './components/work-form/work-form.component';
import { WorkListService } from './services/work-list.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  providers: [
    WorkListService
  ],
  declarations: [
    WorkListComponent,
    WorkFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    WorkListComponent
  ]
})
export class CoreModule { }
