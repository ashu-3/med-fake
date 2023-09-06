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
import { FormsModule } from '@angular/forms';
import { ConsultationComponent } from './home/consultation/consultation.component';
import { PatientListComponent } from './home/patient-list/patient-list.component';
import { ImageModalComponent } from './image-modal/image-modal.component';
import { FilterTableTimeslotPipe } from './pipes/filter-table-timeslot.pipe';
import { DatePipe } from '@angular/common';
import { PatientHistoryComponent } from './patient-history/patient-history.component';
import { SharedComponentComponent } from './shared/shared-component/shared-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    HeaderbarComponent,
    ConsultationComponent,
    PatientListComponent,
    ImageModalComponent,
    FilterTableTimeslotPipe,
    PatientHistoryComponent,
    SharedComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
