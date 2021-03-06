import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces: false 
})
export class AppComponent  implements OnInit{
  title = 'Registration';
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['home'], {skipLocationChange: true});
  }
}
