import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderbarComponent } from './headerbar/headerbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BlogSummaryComponent } from './home/blog-summary/blog-summary.component';
import { BlogDetailsComponent } from './home/blog-details/blog-details.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './home/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    HeaderbarComponent,
    BlogSummaryComponent,
    BlogDetailsComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
