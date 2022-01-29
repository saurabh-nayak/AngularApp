import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  /* @Input used to accept data from parent component to here */
  @Input('name')public name:string="";
  /* @Output used to send data from child component to parent component */
  @Output('event')eventEmitter=new EventEmitter();
  condition=true;
  constructor() { }

  ngOnInit(): void {
  }
  /* This method called when we click on the button */
  clicked(){
    if(this.condition){
     this.condition= !this.condition;
      this.eventEmitter.emit('Hello Saurabh from child component');
    }
      
    else {
      this.condition= !this.condition;
      this.eventEmitter.emit('');
    }
     
  }

}
