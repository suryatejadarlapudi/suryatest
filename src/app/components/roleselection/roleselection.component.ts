import { Component, OnInit, ViewChild, ElementRef, Renderer2  } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roleselection',
  templateUrl: './roleselection.component.html',
  styleUrls: ['./roleselection.component.css']
})
export class RoleselectionComponent  {

  safeSrc: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer,private router:Router) { 
   // this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://createaclickablemap.com/map.php?&id=79789&maplocation=false&online=true");
  
   //this.safeSrc =  this.sanitizer.bypassSecurityTrustHtml("../../");
  }

  ngOnInit() {
    this.router.navigate(['roleSelection'], {skipLocationChange: true});
  }


  name = 'Angular';
  pointSize = 7;
  element: Element;
  root: Element;
  ctx;
  isMiddleDivVisible: boolean = true;
  canvas;
  isHidden: boolean = false;
  getPosition(event) {
    this.isHidden = !this.isHidden;
    this.isMiddleDivVisible=!this.isMiddleDivVisible;
    this.element = <Element>this.root;
    this.canvas = <HTMLCanvasElement>document.getElementById("canvas");
  
    this.ctx = this.canvas.getContext("2d");
    let curleft = 0,
      curtop = 0;

    curleft += event.offsetX;
    curtop += event.offsetY;
    alert(curleft);
    this.drawCoordinates(curleft, curtop);
  }


  drawCoordinates(x, y) {

    const grd = this.ctx.createLinearGradient(0, 0, 170, 0);
    grd.addColorStop(0, "black");
    grd.addColorStop(1, "red");
    this.ctx.fillStyle = grd; // Red color

    this.ctx.beginPath();
    this.ctx.arc(Number(x), Number(y), this.pointSize, 0, Math.PI * 2, true);
    this.ctx.fill();

    const coord = "x=" + x + ", y=" + y;
    alert(coord)
    const p = this.ctx.getImageData(x, y, 1, 1).data;
    const hex = "#" + ("000000" + this.rgbToHex(p[0], p[1], p[2])).slice(-6);
    console.log(hex);
  }

  rgbToHex(r, g, b) {
  if (r > 255 || g > 255 || b > 255)
      throw "Invalid color component";
  return ((r << 16) | (g << 8) | b).toString(16);
}





  navigate() {
    this.router.navigate(['maps'], {skipLocationChange: true});
}

}
