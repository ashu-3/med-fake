import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PatientDetailsService } from 'src/app/service/patient-details.service';
import { FilterTableTimeslotPipe } from 'src/app/pipes/filter-table-timeslot.pipe';
import { DatePipe } from '@angular/common';
import { PatientHistoryService } from 'src/app/service/patient-history.service';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss'],
  providers:[DatePipe,FilterTableTimeslotPipe]
})
export class ConsultationComponent implements OnInit {

  @ViewChild('fileInput') fileInput!: ElementRef;

  activeTab: string = 'all';

  hideSuccessMsg = true;
  showAddModal = false;
  showAddNotesModal = false;
  showModal = false;
  imageUrl = 'https://img.freepik.com/free-vector/realistic-receipt-template_23-2147938550.jpg?w=2000';

  consulationTableHeader = ['#','name','time slot','age','contact no','last visited','city'];
  currentDate = new Date(); // Current date
  currentTimeSlot = '11:30'; // Current time slot
  historyTableHeader = ['name','visited date', 'recipt', 'notes']

  attachedFiles: File[] = [];

  //table pagination
  currentPage = 1;
  itemsPerPage = 3;
  historyLength = 1;
  notesContent:string='';
  patientIndex: number=0;

  patientDetails: {
    patientId:number;
    patientName: string;
    patientAge?: number;
    patientMobile?: number;
    lastVisited?: Date;
    timeSlot:string;
  } | null = null;

  allPatientDetails: {
    patientId:number;
    city:string;
    dateSlot:Date;
    patientName: string;
    patientAge?: number;
    patientMobile?: number;
    lastVisited?: Date | null;
    timeSlot:string;
  } [] = [];

  filteredData: any[] = []; // Initialize as an empty array
  patientHistory:any[] = [];

  constructor(private consultationSer:PatientDetailsService,private filterPipe:FilterTableTimeslotPipe, private datePipe: DatePipe,private patientHistoryService:PatientHistoryService ) {
   }

  ngOnInit(): void {
    this.allPatientDetails = this.consultationSer.patientDetails;
    this.filteredData = this.filterPipe.transform(
      this.allPatientDetails,
      this.currentDate,
      this.currentTimeSlot
    );

    this.filteredData = this.filteredData.filter((patient) => {
      const patientDate = new Date(patient.dateSlot);
      return (
        patientDate.getDate() === this.currentDate.getDate() &&
        patientDate.getMonth() === this.currentDate.getMonth() &&
        patientDate.getFullYear() === this.currentDate.getFullYear()
      );
    });
    
    this.filteredData.sort((a, b) => {
      const timeA = a.timeSlot;
      const timeB = b.timeSlot;
      return timeA.localeCompare(timeB);
    });

    console.log("Filtered Data:", this.filteredData);

    // Set initial patient details
    if (this.filteredData.length > 0) {
      this.patientDetails = this.filteredData[0];
    }
  }

  onNextClick() {
    if (this.patientIndex < this.filteredData.length - 1) {
      this.patientIndex++;
      this.patientDetails = this.filteredData[this.patientIndex];
    }
  }

  onPreviousClick() {
    if (this.patientIndex > 0) {
      this.patientIndex--;
      this.patientDetails = this.filteredData[this.patientIndex];
    }
  }

  hasMorePatients(): boolean {
    return this.patientIndex < this.filteredData.length - 1;
  }

  ///model image popup
  toggleModal() {
    this.showModal = !this.showModal;
  }

  ///add details popuop
  toggleAddDetails(event:Event) {
    event.preventDefault();
    this.showAddModal = !this.showAddModal;
    this.hideSuccessMsg = true;

  }

  ///add Notes popuop
  toggleAddNotesDetails(event:Event) {
    event.preventDefault();
    this.showAddNotesModal = !this.showAddNotesModal;
    this.hideSuccessMsg = true;

  }

  /// pagination

  nextPageHistory() {
    if (this.currentPage < this.totalHistory()) {
      this.currentPage++;
    }
  }

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

  totalHistory(): number {
    console.log('159'+this.patientHistory.length);
    console.log(this.patientHistory);
    return Math.ceil(this.historyLength / this.itemsPerPage);
  }

  getVisibleItems(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredData.slice(startIndex, endIndex);
  }

  getPatientHistory(patientId:number):any {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.historyLength = this.patientHistoryService.findPatientById(patientId).visitedDetails.length;
    return this.patientHistory = this.patientHistoryService.findPatientById(patientId).visitedDetails.slice(startIndex,endIndex);
  }

  onFileChange(event: any) {
    const files: FileList | null = event.target.files;
    if (files) {
        for (let i = 0; i < files.length; i++) {
            this.attachedFiles.push(files.item(i) as File);
        }
    }
}

  attachFilesToPatient() {
    const patientId = this.patientDetails?.patientId;
    if (patientId && this.attachedFiles.length > 0) {
      this.hideSuccessMsg = false;
      if(this.attachedFiles.length == 0) {
        this.hideSuccessMsg = false;
      }
      this.patientHistoryService.addFileToVisitedDetails(
        patientId,
        new Date(),
        this.attachedFiles.map(file => file.name)
      );
      console.log("patient id"+patientId);
      console.log("file name"+this.attachedFiles);
      // Clear the input field after attaching files
      this.fileInput.nativeElement.value = '';
    }
  }

  attachNotesToPatient(notes:string) {
    const patientId = this.patientDetails?.patientId;
    if (patientId) {
      this.patientHistoryService.addNotesToVisitedDetails(
        patientId,
        new Date(),
        this.notesContent = notes
      );
      if(this.notesContent!=''){
        this.hideSuccessMsg = false;
      }
      console.log("patient id"+patientId);
      console.log("notesContent"+this.notesContent);
      // Clear the input field after attaching files
    }
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

}
