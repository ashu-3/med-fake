import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultationComponent } from './home/consultation/consultation.component';
import { PatientListComponent } from './home/patient-list/patient-list.component';
import { PatientHistoryComponent } from './patient-history/patient-history.component';


const routes: Routes = [
  { path: '', redirectTo: 'consultation', pathMatch: 'full' }, // Default route
  { path: 'consultation',component:ConsultationComponent},
  {path: 'patient', component:PatientListComponent},
  {path: 'history/:id', component:PatientHistoryComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
