import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BlogsService } from 'src/app/blogs.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit,OnDestroy {

  //Variable declaration
  data:any=[];
  errorMessage:string='';
  searchKey:string = '';
  private blogSubscription: Subscription = new Subscription;
  private searchSubscription: Subscription = new Subscription;
  
  constructor(private route:ActivatedRoute,private blogService:BlogsService, private sharedSer:SharedService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.searchKey = params['searchKey'];
     console.log(this.searchKey);
    });

    this.showBlogs();
  }
  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
    this.blogSubscription.unsubscribe();
  }

  showBlogs()  {
    this.errorMessage = '';
    this.blogSubscription = this.blogService.getBlogs().subscribe({
      next: blogs => {
        const matchingBlogs = blogs.filter(blog => 
          blog.author.toLowerCase().includes(this.searchKey.toLowerCase()) || blog.name.toLowerCase().includes(this.searchKey.toLowerCase())
        );
    
        console.log(matchingBlogs);
        if (matchingBlogs) {
          this.data = matchingBlogs; 
        } else {
          this.errorMessage = 'Blog not found.';
        }
      },
      error: err => {
        this.errorMessage = 'An error occurred while fetching blogs.';
        console.error('Error fetching blogs in component:', err);
      }
    });
  }

}
