import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from './rest.service';
@Component({
  selector: 'ngbd-tabset-basic',
  templateUrl: './tabset-basic.html',
  styles: [
    `
    :host { color: gray; }

    :host ::ng-deep .tabset1 a.nav-link {
      color: green;
    }
    
    :host ::ng-deep .tabset1 a.nav-link.active {
      color: blue;
      font-weight: bold;
    }
`
  ]
})
export class NgbdTabsetBasic { products:any = [];
  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

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

  add() {
    this.router.navigate(['/product-add']);
  }
  addclick(product){
    setTimeout(() => {
     
    }, 3000)
    
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
