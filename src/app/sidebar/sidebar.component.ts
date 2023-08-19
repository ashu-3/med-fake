import { Component, EventEmitter, OnInit, Output,ChangeDetectorRef } from '@angular/core';
import { navbarData } from './nav-options';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  /// Varibale declarations
  blogCount:number =0;
  poemCount:number = 0;
  inputValue:string = ''
  isSmallMobileDevice: MediaQueryList = window.matchMedia("(max-width: 920px)");
  navOptions = navbarData;
  status:boolean = true;

  constructor(private sharedSer:SharedService,private cdRef:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.cdRef.detectChanges();

    if(this.isSmallMobileDevice.matches) {
      this.status = false;
    }
    
    setTimeout(()=>{
      this.blogCount = this.sharedSer.data;  
    },10)
   

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
