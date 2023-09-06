import { Component, EventEmitter, OnInit, Output,ChangeDetectorRef } from '@angular/core';
import { navbarData } from './nav-options';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  /// Varibale declarations
  selectedItem: any = null; // Initialize selectedItem to null
  isSmallMobileDevice: MediaQueryList = window.matchMedia("(max-width: 920px)");
  navOptions = navbarData;
  status:boolean = true;

  constructor(private cdRef:ChangeDetectorRef) { }

  ngOnInit(): void {
  
    if(this.isSmallMobileDevice.matches) {
      this.status = false;
    }

    // Select the first item by default
    if (this.navOptions.length > 0) {
      this.selectedItem = this.navOptions[0];
    }
  }

  toggleShow() {
    this.status = !this.status;
  }

  selectItem(item: any): void {
    this.selectedItem = item; // Set the selected item when an item is clicked
    console.log("Item selected:", this.selectedItem); 
  }
}
