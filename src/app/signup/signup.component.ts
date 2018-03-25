import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormArrayName, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  //Form  properties
  signupform:FormGroup;
  userName:FormControl;
  userEmail:FormControl;
  userMobile:FormControl;
  userCountry:FormControl;
  userState:FormControl;
  userCity:FormControl;

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
  constructor() { }
  createFormControls(){
    this.userName =new FormControl(
      '',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(10)
      ]
    );
    this.userEmail=new FormControl(
      '',
      Validators.required
    );
    this.userMobile=new FormControl();
    this.userCountry=new FormControl();
    this.userState=new FormControl();
    this.userCity=new FormControl();
  }
  
  createForm(){
    this.signupform=new FormGroup({
      userName:this.userName,
      userEmail:this.userEmail,
      userMobile:this.userMobile,
      userCountry:this.userCountry,
      userState:this.userState,
      userCity:this.userCity
    });
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

}
