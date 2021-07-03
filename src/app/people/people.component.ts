import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  firstname : string = '';
  constructor() { }

  ngOnInit(): void {
  }

  addPerson(formValue:NgForm){
    console.log(formValue.value);
  }

}
