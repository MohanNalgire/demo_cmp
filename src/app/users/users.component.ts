import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
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
  private users;
  url = 'http://localhost:3000/users';

  constructor(private http:HttpClient) { 

    
  }

  

  ngOnInit() {
    this.http.get('http://localhost:3000/users').subscribe(data => {
      console.log(data);
      this.users=data;
    });
  }
    

}
