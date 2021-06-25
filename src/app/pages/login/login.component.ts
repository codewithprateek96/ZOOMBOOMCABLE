import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _snackBar: MatSnackBar,
    private route: Router
    
    ) { }

  ngOnInit(): void {}

  public user = {
    userName: '',
    password: ''
  }
  //access: boolean = true;

  formSubmit()
  {
    if(this.user.userName == "admin" && this.user.password == "admin")
      {
        this._snackBar.open("Login Successfull");
        this.route.navigate(['/home']);
        // this.route.snapshot.customer;
        return;
      }
      else
      {
        this._snackBar.open("Incorrect Credentials!")
      }   
  }
}