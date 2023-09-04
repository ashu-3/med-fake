import { Component, OnInit } from '@angular/core';
import { PatientDetailsService } from 'src/app/service/patient-details.service';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {

  showModal = false;
  imageUrl = 'https://img.freepik.com/free-vector/realistic-receipt-template_23-2147938550.jpg?w=2000';

  patientIndex: number=0;
  patientDetails: {
    patientName: string;
    patientAge?: number;
    patientMobile?: number;
    lastVisited?: Date;
  } | null = null;

  constructor(private consultationSer:PatientDetailsService) { }

  ngOnInit(): void {
    this.loadPatientDetails();
  }

  loadPatientDetails() {
    // Get patient details by index
    const patient = this.consultationSer.getPatientByIndex(this.patientIndex);
    if (patient) {
      this.patientDetails = patient;
    } else {
      // Handle the case when no more patients are available
      this.patientDetails = null;
    }
  }

  onNextClick() {
    // Increment the index to load the next patient
    this.patientIndex++;
    this.loadPatientDetails();
  }

  onPreviousClick() {
    if (this.patientIndex > 0) {
      this.patientIndex--;
      this.loadPatientDetails();
    }
  }

  hasMorePatients(): boolean {
    const nextPatientIndex = this.patientIndex + 1;
    return nextPatientIndex < this.consultationSer.patientDetails.length;
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

}
