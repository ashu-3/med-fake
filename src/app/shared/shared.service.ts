import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BlogsService } from '../blogs.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  data:number = 0;
  searchKey = new Subject<string>();
  
  constructor(private blogSer:BlogsService) {
    this.getBlogs();
   }

  getBlogs() {
    this.blogSer.getBlogs().subscribe({
      next: profiles => {
        this.data = profiles.length;
      },
      error:Error => {
        console.error('Error fetching profiles in component:',Error );
      }
    });
  }
}
