import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headerbar',
  templateUrl: './headerbar.component.html',
  styleUrls: ['./headerbar.component.scss']
})
export class HeaderbarComponent implements OnInit {

  /// Varibale decalarions 
  themeText = 'dark theme';
  themeText1= 'ok';

  constructor() { }

  ngOnInit(): void {
  }

  toggleTheme() {
    this.themeText = this.themeText==='dark theme'? 'light theme':'dark theme';
  }

  toggleProfile() {

  }
}
