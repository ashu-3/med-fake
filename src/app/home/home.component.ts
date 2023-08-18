import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //variable declaration

  constructor(private blogService:BlogsService) { }

  ngOnInit(): void {
  }

}
