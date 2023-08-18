import { Component, OnDestroy, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/blogs.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit,OnDestroy {

   //variable declaration
   data:any= [];
   errorMessage:string='';
   id:string='';

   private blogSubscription: Subscription = new Subscription;
 
   constructor(private blogService:BlogsService,private route:ActivatedRoute) { }
 
   ngOnInit(): void {
   
    this.route.params.subscribe(params => {
      this.id = params['id'];
     console.log(this.id);
    });
    this.showBlogs();
   }

   ngOnDestroy(): void {
     this.blogSubscription.unsubscribe();
   }
   
   showBlogs()  {
    this.errorMessage = '';
    this.blogSubscription=this.blogService.getBlogs().subscribe({
      next: blogs => {
        const blogToShow = blogs.find(blog => blog.id === this.id);
        if (blogToShow) {
          this.data = [blogToShow]; 
          console.log(this.data);
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
