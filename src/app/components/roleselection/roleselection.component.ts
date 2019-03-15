import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-roleselection',
  templateUrl: './roleselection.component.html',
  styleUrls: ['./roleselection.component.css']
})
export class RoleselectionComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigate() {
    this.router.navigate(['maps'], {skipLocationChange: true});
}

}
