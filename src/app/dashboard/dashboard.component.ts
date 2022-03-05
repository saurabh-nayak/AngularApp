import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userdetail } from '../plainObjects/userdetail';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private loginService:LoginService, private router: Router, private userdetail:userdetail ) { }

  ngOnInit(): void {
  }

  getUnapprovedUsers(){
    this.loginService.getUnapprovedUsers().subscribe(
      (res)=>console.log(res),(err)=>console.log(err)
    )
  }
  getUser()
  {
    this.loginService.getUser().subscribe(
      (res:userdetail)=>
      {
        this.userdetail.name=res.name;
        this.userdetail.id=res.id;
        this.userdetail.mobile=res.mobile;
        this.userdetail.address=res.address;
        this.router.navigateByUrl('/userdetail');
      },(err)=>console.log(err)
    )
  }
}
