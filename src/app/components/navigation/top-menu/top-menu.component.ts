import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

closeMenu = false;
openMenu = true;



  constructor() { }

  ngOnInit(): void {
  }

  hamburgerMenu(){
    this.closeMenu =! this.closeMenu
    this.openMenu =! this.openMenu
  }

}
