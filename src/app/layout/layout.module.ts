import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ResultsComponent} from './results/results.component';
import {AddRecordComponent} from './add-record/add-record.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ResultsComponent,
    AddRecordComponent],
  exports: [
    AddRecordComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LayoutModule {
}
