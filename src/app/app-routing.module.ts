import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailsComponent } from './home/blog-details/blog-details.component';
import { BlogSummaryComponent } from './home/blog-summary/blog-summary.component';
import { SearchComponent } from './home/search/search.component';

const routes: Routes = [
  { path: '', redirectTo: 'blog-home', pathMatch: 'full' }, // Default route
  { path: 'blog-home', component: BlogSummaryComponent },
  { path:"blog-description/:id",component:BlogDetailsComponent},
  { path:"search-blog/:searchKey",component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
