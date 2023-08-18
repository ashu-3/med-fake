import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscribable, Subscription } from 'rxjs';
import { BlogsService } from 'src/app/blogs.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-blog-summary',
  templateUrl: './blog-summary.component.html',
  styleUrls: ['./blog-summary.component.scss']
})
export class BlogSummaryComponent implements OnInit {

  //variable declaration
  data:any= [];
  errorMessage:string='';

  constructor(private blogService:BlogsService,private sharedSer:SharedService) { }

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs() {
    this.errorMessage = '';
    this.blogService.getBlogs().subscribe({
      next: profiles => {
        this.data = profiles;
      },
      error:Error => {
        this.errorMessage = 'An error occurred while fetching profiles.';
        console.error('Error fetching profiles in component:',Error );
      }
    });
  }
}
