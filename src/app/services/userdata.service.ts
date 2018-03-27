import { Injectable } from '@angular/core';

@Injectable()
export class UserdataService {

  private isUserLogedIn;
  private username;

  constructor() { }

  setUserLoggedIn(){
    return this.isUserLogedIn=false;
  }
  getUserLoggedIn(){
    return this.isUserLogedIn=true;
  }
  getAllUsers(){
    return this.users;
  }



  
  users:[{
    "userid": 1,
    "name":"Mohan",
    "email":"mnalgire@gmail.com",
    "mobile":"9405358276",
    "country":"Inida",
    "state":"Maharashtra",
    "city":"Pune",
    "password":"test@12345",
    "confirmpassword":"test@12345"
  },
  {
    "userid": 2,
    "name":"Mohan",
    "email":"mnalgire@gmail.com",
    "mobile":"9405358276",
    "country":"Inida",
    "state":"Maharashtra",
    "city":"Pune",
    "password":"test@12345",
    "confirmpassword":"test@12345"
  },
  {
    "userid": 3,
    "name":"Mohan",
    "email":"mnalgire@gmail.com",
    "mobile":"9405358276",
    "country":"Inida",
    "state":"Maharashtra",
    "city":"Pune",
    "password":"test@12345",
    "confirmpassword":"test@12345"
  },
  {
    "userid": 4,
    "name":"Mohan",
    "email":"mnalgire@gmail.com",
    "mobile":"9405358276",
    "country":"Inida",
    "state":"Maharashtra",
    "city":"Pune",
    "password":"test@12345",
    "confirmpassword":"test@12345"
  },
  {
    "userid":5,
    "name":"Mohan",
    "email":"mnalgire@gmail.com",
    "mobile":"9405358276",
    "country":"Inida",
    "state":"Maharashtra",
    "city":"Pune",
    "password":"test@12345",
    "confirmpassword":"test@12345"
  },
  {
    "userid": 6,
    "name":"Mohan",
    "email":"mnalgire@gmail.com",
    "mobile":"9405358276",
    "country":"Inida",
    "state":"Maharashtra",
    "city":"Pune",
    "password":"test@12345",
    "confirmpassword":"test@12345"
  },
  {
    "userid": 7,
    "name":"Mohan",
    "email":"mnalgire@gmail.com",
    "mobile":"9405358276",
    "country":"Inida",
    "state":"Maharashtra",
    "city":"Pune",
    "password":"test@12345",
    "confirmpassword":"test@12345"
  }
];
}
