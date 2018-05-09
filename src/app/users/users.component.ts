import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserdataService } from '../services/userdata.service';

import 'rxjs/add/operator/map';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private action_name:string='';
  private headers = new HttpHeaders({
    'content-type':'application/json'
  });

  @Input() 
  modal_title:string=this.action_name;
  modal_data;


  private users;
  url = 'http://localhost:3000/users';
  closeResult: string;
  
  constructor(
    private http:HttpClient,
    private modalService : NgbModal
  ) {}



  ngOnInit() {
    this.http.get('http://localhost:3000/users').subscribe(data => {
      console.log(data);
      this.users=data;
    });
  }

  getAllUsers(){
    this.http.get('http://localhost:3000/users').subscribe(data=>{
      return data;
    });
  }

  getSingleRecord(recordId){  
    return this.http.get(
      'http://localhost:3000/users',
      {
        params:{
          userid:recordId
        }
      }
    ).toPromise()
    .then(response => {
      console.log(response);
    })
    .catch(console.log);
  
  }

  open(content,recordId) {    
    
    this.modalService.open(content).result.then((result) => {
      this.modal_data =this.modal_data;
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  usersView(){
    alert("component");
  }

  usersEdit(content,recordId){
        
    this.modalService.open(content).result.then(
      (result) => {
      this.modal_data =this.modal_data;
      this.closeResult = `Closed with: ${result}`;
    }, 
    (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    }
  );
  }

  usersDelete(content,recordId){
    
    const url=`${"http://localhost:3000/users"}/${recordId}`;
    return this.http.delete(
      url,
      {headers:this.headers}).toPromise().then(
        ()=>{
          this.modalService.open(content).result.then(
            (result)=>{
              //this.modal_data='User record deleted successfully.';
              this.closeResult=`Closed with:${result}`;
            },
            (reason)=>{
              this.closeResult=`Dismissed ${this.getDismissReason(reason)}`
            }

          );
          console.log('Record deleted successfully.');
          this.getAllUsers();
        }
      );

    
  }
    

}
