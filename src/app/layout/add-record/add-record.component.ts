import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {
  constructor() { }

    recordForm = new FormGroup({
    date: new FormControl(''),
    distance: new FormControl(''),
    time: new FormControl('')
  });

  ngOnInit(): void {
  }

  ShareValue(){
    console.log(this.recordForm.value);
  }

}
