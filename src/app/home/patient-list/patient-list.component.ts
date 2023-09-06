import { Component, OnInit } from '@angular/core';
import { AllPatientsService } from 'src/app/service/all-patients.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  allPatientsTableHeader = ['#','patientName','patientId','patientAge','patientMobile','lastVisited','city'];
  allPatientDetails: {
    patientId:number;
    city:string;
    patientName: string;
    patientAge?: number;
    patientMobile?: number;
    lastVisited?: Date | null;
  } [] = [];

  //table pagination
  currentPage = 1;
  itemsPerPage = 12;

  searchTerm: string = '';

  constructor(private allPtainetSer:AllPatientsService) { }

  ngOnInit(): void {
    this.getAllPatientDetails();
    this.sortPatientDetails();
  }

  getAllPatientDetails():void {
   this.allPatientDetails= this.allPtainetSer.allPatientDetails;
  }

  private sortPatientDetails(): void {
    this.allPatientDetails = this.allPatientDetails.sort((a, b) => {
      const nameA = a.patientName.toUpperCase();
      const nameB = b.patientName.toUpperCase();
  
      // Sort alphabetically in ascending order by default
      return nameA.localeCompare(nameB);
    });
  }


  ///search 
  performSearch(): void {
    const searchTerm = this.searchTerm.toLowerCase().trim();

    // Perform the search based on patientName or patientId
    this.allPatientDetails = this.allPtainetSer.allPatientDetails.filter(
      (patient) =>
        patient.patientName.toLowerCase().includes(searchTerm) ||
        patient.patientId.toString().includes(searchTerm)
    );
  }

  clearSearchResults(): void {
    if (this.searchTerm === '') {
      // Reset the search results to the original data
      this.getAllPatientDetails();
    }
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
    return Math.ceil(this.allPatientDetails.length / this.itemsPerPage);
  }

  getVisibleItems(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.allPatientDetails.slice(startIndex, endIndex);
  }

}
