import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-otp-page2',
  templateUrl: './otp-page2.component.html',
  styleUrls: ['./otp-page2.component.css']
})
export class OtpPage2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigate() {
    this.router.navigate(['roleSelection'], {skipLocationChange: true});
}
}
