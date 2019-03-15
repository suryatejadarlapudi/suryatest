import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-comp',
  template: `


  <div id="container">
    <div id="contentInside" *ngFor="let container of containers"></div>
    <button (click)="add()">Add</button>
    </div>
    
  `,
  styles: [`

  #container {
    background-color:#CCC;
    min-width:50%;
    max-width:300%;
    
      white-space:nowrap;
      display: block;
  }
  
  #container div {
    border: 1px solid #006;
      white-space:nowrap;
      display: inline-block;
    width:100%;
  }
  
  #content{
      

      border:1px solid black;

      width:100%;
    overflow:auto;
    display:inline-block;
    white-space:normal;


    white-space:nowrap;
    }
    #contentInside{
      
      width:100px;
      height:70px;
      margin:7px;
      border:1px solid black;
      display:inline-block;
      white-space:nowrap;


      
    }
  `]
})

export class HelloComponent {

  containers = [];

  constructor() { }

  add() {
    this.containers.push(this.containers.length);
  }
}