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

}
