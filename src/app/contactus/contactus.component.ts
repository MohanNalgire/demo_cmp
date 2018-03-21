import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  title: string = 'My first AGM project';
  latitude: number = 51.678418;
  longitude: number = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}
