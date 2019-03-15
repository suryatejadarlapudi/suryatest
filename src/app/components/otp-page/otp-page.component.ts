import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-otp-page',
  templateUrl: './otp-page.component.html',
  styleUrls: ['./otp-page.component.css']
})
export class OtpPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigate() {
    this.router.navigate(['verify otp'], {skipLocationChange: true});
}
}
