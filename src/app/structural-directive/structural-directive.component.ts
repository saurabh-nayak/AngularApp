import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: 'structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent implements OnInit {

  render=false;
  name="Saurabh";
  color='red';
  colors=['red','blue','violet','orange'];
  constructor() { }

  ngOnInit(): void {
  }
}
