import { Component, OnInit, ViewChild } from '@angular/core';
import { PatientDetailsService } from 'src/app/service/patient-details.service';
import { FilterTableTimeslotPipe } from 'src/app/pipes/filter-table-timeslot.pipe';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss'],
  providers:[DatePipe,FilterTableTimeslotPipe]
})
export class ConsultationComponent implements OnInit {

  showModal = false;
  imageUrl = 'https://img.freepik.com/free-vector/realistic-receipt-template_23-2147938550.jpg?w=2000';

  consulationTableHeader = ['#','name','time slot','age','contact no','last visited','city'];
  currentDate = new Date(); // Current date
  currentTimeSlot = '11:30'; // Current time slot

  //table pagination
  currentPage = 1;
  itemsPerPage = 3;

  patientIndex: number=0;
  patientDetails: {
    patientName: string;
    patientAge?: number;
    patientMobile?: number;
    lastVisited?: Date;
  } | null = null;

  allPatientDetails: {
    city:string;
    patientName: string;
    patientAge?: number;
    patientMobile?: number;
    lastVisited?: Date;
    timeSlot:string;
  } [] = [];

  filteredData: any[] = []; // Initialize as an empty array

  constructor(private consultationSer:PatientDetailsService,private filterPipe:FilterTableTimeslotPipe, private datePipe: DatePipe ) {
   }

  ngOnInit(): void {
    this.allPatientDetails = this.consultationSer.patientDetails;
    this.loadPatientDetails();
    this.filteredData = this.filterPipe.transform(
      this.allPatientDetails,
      this.currentDate,
      this.currentTimeSlot
    );

    console.log(this.filteredData);
    // Sort filteredData by timeSlot in ascending order
    this.filteredData.sort((a, b) => {
      const timeA = a.timeSlot;
      const timeB = b.timeSlot;
      return timeA.localeCompare(timeB);
    });

    console.log("Filtered Data:", this.filteredData);
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

/// pagination
previousPage() {
  if (this.currentPage > 1) {
    this.currentPage--;
  }
}

nextPage() {
  if (this.currentPage < this.totalPages()) {
    this.currentPage++;
  }
}

totalPages(): number {
  return Math.ceil(this.filteredData.length / this.itemsPerPage);
}

getVisibleItems(): any[] {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  return this.filteredData.slice(startIndex, endIndex);
}

}