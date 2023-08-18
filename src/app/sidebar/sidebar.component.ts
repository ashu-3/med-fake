import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-options';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  /// Varibale declarations
  status:boolean = true;
  inputValue:string = ''
  isSmallMobileDevice: MediaQueryList = window.matchMedia("(max-width: 920px)");
  navOptions = navbarData;

  constructor(private sharedSer:SharedService) { }

  ngOnInit(): void {
    if(this.isSmallMobileDevice.matches) {
      this.status = false;
    }
  }

  toggleShow() {
    this.status = !this.status
  }

  // searchBlog(key:string) {
  //   this.inputValue=key;
  //   this.sharedSer.searchKey.next(this.inputValue);
  //   console.log('sidebar'+this.inputValue);
  // }
}
