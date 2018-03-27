import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:FormGroup;

  constructor() { }

  ngOnInit() {
    this.login=new FormGroup({
      email:new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(50),
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
        ]
      ),
      password:new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(15)
        ]
  )
    });
  }

}
