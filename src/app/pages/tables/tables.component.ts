import { Component, OnInit } from '@angular/core';

export interface Attandance{
  YearWeek : number,
  Total : number,
  FirstTimers : number,
  Channel : string
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  myCollection : Attandance[] = [
    {YearWeek:1,Total:58, FirstTimers:5,Channel:'Facebook'},
    {YearWeek:2,Total:62, FirstTimers:7,Channel:'Online'},
    {YearWeek:3,Total:70, FirstTimers:8,Channel:'Inservice'},
    {YearWeek:4,Total:73, FirstTimers:6,Channel:'Inservice'},
    {YearWeek:5,Total:60, FirstTimers:8,Channel:'Inservice'}

  ]

  

  constructor() { }

  ngOnInit() {
  }

}
