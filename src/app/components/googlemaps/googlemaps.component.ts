import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-googlemaps',
  templateUrl: './googlemaps.component.html',
  styleUrls: ['./googlemaps.component.css']
})
export class GooglemapsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigate() {
    this.router.navigate(['page1'], {skipLocationChange: true});
}
}
