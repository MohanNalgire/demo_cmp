import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient,HttpClientModule  } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserdataService } from '../services/userdata.service';

import 'rxjs/add/operator/map';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  url = 'http://localhost:3000/users';

  constructor(private usersdata:UserdataService) { 
    
  }

  

  ngOnInit() {
    console.log('userData',this.usersdata.users);
  }

}
