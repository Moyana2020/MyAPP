import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  people : any;
  displayedColumns: string[] = [ 'firstname', 'lastname', 'telephone'];
  constructor(private peopleService : PeopleService) { }

  ngOnInit(): void {
this.people = this.peopleService.getPeople().subscribe(data => {this.people = data},(err)=> console.log("Unable to get data" + err) );
  }

 
}
