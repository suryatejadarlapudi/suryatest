import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
  styles: [`

  #container {
    white-space:normal;
  }
  
  
  #content{ 
    border:1px solid black;
    width:100%;  
    display:inline-block;
    white-space:normal;
    white-space:nowrap;
    }
    #contentInside{
      min-width:350px;
      height:auto;
      margin:7px;
      display:inline-block;
      white-space:nowrap;   
    }
  `]
})
export class Page1Component implements OnInit {
  products:any = [];
  containers = [];
  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { this.items = [
    { name: 'Jose' },
     
  
  ]
}
  items: Array<any> = []
  add() {
    this.containers.push(this.containers.length);
  }
  
  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.products = [];
    this.rest.getProducts().subscribe((data: {}) => {
      console.log(data);
      this.products = data;
    });
  }

 

  delete(id) {
    this.rest.deleteProduct(id)
      .subscribe(res => {
          this.getProducts();
        }, (err) => {
          console.log(err);
        }
      );
  }

}
