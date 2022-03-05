import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constant } from '../constants/constant';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  httpHeader:HttpHeaders;
  httpBody:any;
  jwt:string;
  authStatus:boolean=false;

  constructor(private httpClient:HttpClient) { }
 
  authenticat(loginValue){
    return this.httpClient.post(constant.hostURL+constant.authenticat,loginValue);
  }

  updateAuthstatus()
  {
    this.authStatus=true;
  }

  getUnapprovedUsers(){
    let header = new HttpHeaders()
    .set('Authorization','Bearer '+localStorage.getItem('jwt'))
    .set("cache-control", "no-cache")
    .set("Access-Control-Allow-Origin", "*");
    return this.httpClient.get(constant.hostURL+constant.getUnapprovedUsers,{headers:header});
  }

  getUser()
  {
    let header = new HttpHeaders()
    .set('Authorization','Bearer '+localStorage.getItem('jwt'))
    .set('name','saurabh')
    return this.httpClient.get(constant.hostURL+constant.getUser,{headers:header});
  }
}
