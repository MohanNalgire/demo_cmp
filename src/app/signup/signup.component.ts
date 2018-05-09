import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormArrayName, FormControl, Validators} from '@angular/forms';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  confirmationStrig:string="New user is added successfully.";
  isAdded:boolean=false;


  //Form  properties
  signupform:FormGroup;
  userName:FormControl;
  userEmail:FormControl;
  userMobile:FormControl;
  userCountry:FormControl;
  userState:FormControl;
  userCity:FormControl;
  userPassword:FormControl;
  userConfirmPassword:FormControl;

  countries:string[]=[
    'India',
    'Srilanka',
    'bhutan',
    'Nepal',
    'china'
  ];
  states:string[]=  [
    'Maharashtra',
    'Karnataka',
    'Andhra',
    'telangana'
  ];
  constructor(
    private httpClient:HttpClient
  ) { }
  createFormControls(){
    this.userName =new FormControl(
      '',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(10)
      ]
    );
    this.userEmail=new FormControl(
      '',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      ]
    );
    this.userMobile=new FormControl(
      '',[
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(12)
      ]
    );
    this.userCountry=new FormControl();
    this.userState=new FormControl();
    this.userCity=new FormControl(
      '',[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)
      ]
    );
    this.userPassword=new FormControl(
      '',[
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)
      ]
    );
    this.userConfirmPassword=new FormControl(
      '',[
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)
      ]
    );
  }
  
  createForm(){
    this.signupform=new FormGroup({
      userName:this.userName,
      userEmail:this.userEmail,
      userMobile:this.userMobile,
      userCountry:this.userCountry,
      userState:this.userState,
      userCity:this.userCity,
      userPassword:this.userPassword,
      userConfirmPassword:this.userConfirmPassword
    });
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }



  usersObj : Object={
    "userid": '',
    "name": "",
    "email": "",
    "mobile": "",
    "country": "",
    "state": "",
    "city": "",
    "password": "",
    "confirmpassword": ""
};

addUser = function (user){

   console.log(user);
  this.userObj = {
    "name"            :user.userName,
    "email"           :user.userEmail,
    "mobile"          :user.userMobile,
    "country"         :user.userCountry,
    "state"           :user.userState,
    "city"            :user.userCity,
    "password"        :user.userState,

};

this.httpClient.post("http://localhost:3000/users/",this.userObj).subscribe(
  (res:Response)=>{
    this.isAdded =true;
    console.log(res);
  }
);
}



}
