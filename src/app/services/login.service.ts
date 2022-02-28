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
  constructor(private httpClient:HttpClient) { }
  authenticat(loginValue){
    return this.httpClient.post(constant.hostURL+constant.authenticat,loginValue);
  }
  getUnapprovedUsers(){
    this.httpHeader=new HttpHeaders();
     
        this.httpHeader.set('Authorization','Bearer '+localStorage.getItem('jwt'));

    return this.httpClient.post(constant.hostURL+constant.getUnapprovedUsers,{headers:this.httpHeader});
  }

  signup()
  {
    console.log(localStorage.getItem('jwt'));
    // this.jwt=localStorage.getItem('jwt');
    // this.httpHeader=new HttpHeaders(
    //   {
    //     'name':'saurabh',
    //     'Authorization':'Bearer '+this.jwt
    //   }
    // );
    var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "http://localhost:8075/getUser");
xhr.setRequestHeader("name", "saurabh");
xhr.setRequestHeader("authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYXVyYWJoIiwiYWRkcmVzcyI6InZhc3RyYWwiLCJtb2JpbGUiOiI4NzMzODY4NjU1IiwiaWQiOjE2LCJleHAiOjE2NDYwNjIyMzQsImlhdCI6MTY0NjA1ODYzNH0.FzYdFVmZAnkntEM0Q5swvE-LEW3SKjW9uL96p6CvoDk");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
 xhr.send(data);
  }
}
