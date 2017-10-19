import { Component, OnInit } from '@angular/core';
import { MatFormFieldControl } from '@angular/material';
import {FlexLayoutModule, FlexAlignDirective, FlexDirective } from '@angular/flex-layout';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

export interface State {
  code: string;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  states: State[] = [
    {code: 'NY'},
    {code: 'NJ'},
    {code: 'AL'},
    {code: 'WA'},
  ];

  options: string[] = [
    'One', 'Two', 'Three', 'Four', 'Five', 'Six'
  ];
  todoFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.todoFormGroup = fb.group({
      todoItem: new FormControl('', Validators.required),
      todoDescription: new FormControl('')
    });
  }

  ngOnInit() {
  }

}
