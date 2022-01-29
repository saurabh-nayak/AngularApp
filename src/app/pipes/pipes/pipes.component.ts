import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }
  name="saurabh";
  date = new Date();
  student={
    id:101,
    name:'saurabh',
    marks:100
  }
  ngOnInit(): void {
  }

}
