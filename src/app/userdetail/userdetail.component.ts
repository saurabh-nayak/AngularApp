import { Component, OnInit } from '@angular/core';
import { userdetail } from '../plainObjects/userdetail';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  name:string;mobile:string;address:string;id:number;
  constructor(private userdetail:userdetail) {
    this.name=userdetail.name;
    this.mobile=userdetail.mobile;
    this.address=userdetail.address;
    this.id=userdetail.id;
   }

  ngOnInit(): void {
  }

}
