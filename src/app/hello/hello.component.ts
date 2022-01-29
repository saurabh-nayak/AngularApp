import { Component, OnInit } from '@angular/core';

/* @Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
}) */
// Can use back ticks inside json of @component decorator to write multiline code
//change templateUrl to template for inline html
//change styleUrls to styles for inline css in decorator

//{{}} called interpolation used to bind variables to html
//interpolation has some limitations like with boolean values it causing issue

//can use [] for property binding to bind property with variables of ts file

//can use class binding using [ngClass] and give json to apply class property
//can use style binding using [ngStyle] and give json to apply style

//property binding also called data binding defined using []
//event binding used with ()

//can use banana in the box syntax [()] for two way data binding
//can use ngModel directive of angular with name of the variable which will be binded two way.

//we can pass template as a reference called Template reference variable 
@Component({
  selector: 'app-hello',
  template: `<h1>Hello {{world}}</h1>
  <h2>Hello World from h2 tag</h2>
  
  <div>
     <input disabled={{false}} type="text" value="Saurabh"/>
     <input [disabled]="propDisabled" type="text" value="Saurabh"/>
  </div>

  <h3 [class.text-danger]="textDanger">From class binding</h3>
  <p [ngClass]="classbindingProp">Hello Bharat</p>
  <p [ngStyle]="styleBinding">Hello Style binding</p>

  <button (click)="clicked($event)">Click</button>
  <input [(ngModel)]="twoWayBinding" type="text">{{twoWayBinding}}
  <br/>
  <input type="text" #name>
  <button (click)="clickedButton(name)">TemplateReferenceVariable</button>
  `,
  styles: [`h2{
    color:red;
  }
  h1{
    font-family: "Times New Roman", Times, serif;
    color:green;
  }
  s1{
    color:red;
  }
  s2{
    font-weight:bold
  }
  s3{
    font-size:large;
  }
  `]
}) 
export class HelloComponent implements OnInit {

  constructor() { }
  textDanger=true;
  world='Saurabh';
  propDisabled=false;
  twoWayBinding="";
  applyClass=true;
  ngOnInit(): void {}
  classbindingProp={
    "text-danger":true,
  }
  styleBinding={
    color:"purple",
    fontWeight:"bold"
  }
  clicked(event:Event){
    console.log(event.type)
    console.log("Button clicked");
  }
  clickedButton(name:any){
    console.log(name.value);
  }
}
