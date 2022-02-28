import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { response } from '../plainObjects/response';
import { JwtService } from '../services/jwt.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  errorMessage:string;
  constructor(private formBuilder:FormBuilder,
     private loginService:LoginService,
     private httpClient:HttpClient,
     private router: Router,
     private jwtService:JwtService) {}
  ngOnInit()
  {
    this.initializeLoginForm();
  }

  initializeLoginForm()
  {
    this.loginForm=this.formBuilder.group({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }
  handleLogin()
  {
    this.loginService.authenticat(this.loginForm.value).subscribe(
      (res:response)=>
      {
        this.router.navigateByUrl('/dashboard');
        this.jwtService.addJWTToLocalStorage(res.jwt);
    },(err:HttpErrorResponse)=>{
      this.errorMessage=err.error.responseMessage;
      this.router.navigateByUrl('/login')
      }
    )
  }
}
