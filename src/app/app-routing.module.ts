import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultationComponent } from './home/consultation/consultation.component';
import { PatientListComponent } from './home/patient-list/patient-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'consultation', pathMatch: 'full' }, // Default route
  { path: 'consultation',component:ConsultationComponent},
  {path: 'patient', component:PatientListComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
