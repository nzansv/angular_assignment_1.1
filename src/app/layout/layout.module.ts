import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ResultsComponent} from './results/results.component';
import {AddRecordComponent} from './add-record/add-record.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LayoutComponent} from './layout.component';


@NgModule({
  declarations: [
    ResultsComponent,
    AddRecordComponent,
    LayoutComponent],
  exports: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LayoutModule {
}
