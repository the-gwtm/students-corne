import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform } from '@ionic/angular';
import { MenuController } from '@ionic/angular'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('popover') popover;

  isOpen = false;
  

  constructor(private menu : MenuController) { }


  ngOnInit(): void {
    

  }

  openMenu()
  {
    this.menu.open('menu-content');
  }

  presentPopover(e : Event)
  {
    this.popover.event = e;
    this.isOpen = true;
  }


}
