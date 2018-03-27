import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule, FormGroup, FormArrayName, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Form properties.
  login:FormGroup;
  userEmail:FormControl;
  userPassword:FormControl;

  constructor(
    private router:Router,
    private route:ActivatedRoute
  ) { }
  createFormControls(){

      this.userEmail=new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(50),
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
        ]
      );
      this.userPassword=new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(15)
        ]
  );
  }

  createForm(){
    this.login=new FormGroup({
      userEmail:this.userEmail,
      userPassword:this.userPassword
    });
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  loginSubmit (){
    if(this.login.value.userEmail=="mnalgire@gmail.com" && this.login.value.userPassword=="test@12345"){
        this.router.navigateByUrl("/dashboard");
    }else{
      this.router.navigateByUrl("/login");
    }
    console.log("Login form data",this.login.value.userEmail);
  }



}
