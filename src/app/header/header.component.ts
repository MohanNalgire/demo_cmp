import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';



declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private usersdata:UserdataService) {}

  ngOnInit() {

    console.log(this.usersdata.getAllUsers());
  }

}
