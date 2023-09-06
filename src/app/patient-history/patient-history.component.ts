import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllPatientsService } from '../service/all-patients.service';
import { PatientHistoryService } from '../service/patient-history.service';

@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.scss']
})
export class PatientHistoryComponent implements OnInit {

  imageUrl = '';
  showModal = false;

  patientDetails:any;
  patientHistory:any;
  selectedVisitedDate?: Date;
  selectedImageURL?:string;
  constructor(private route: ActivatedRoute,private allPatientsService:AllPatientsService,private historySer:PatientHistoryService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params?.get('id');
      if (id !== null) {
        const patientId = +id;
        if (!isNaN(patientId)) {
          this.patientDetails = this.allPatientsService.findPatientById(patientId);
          //history
          this.patientHistory = this.historySer.findPatientById(patientId);
          console.log(this.patientDetails);
        } else {
          console.log("id null in pataient-details component")
        }
      } else {
        console.log("id or params or null in pataient-details component");
      }
    });

    
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  openModal() {
    // Add logic here to open the modal with the selected image URL
    if (this.selectedVisitedDate) {
      const selectedVisit = this.patientHistory.visitedDetails.find(
        (visit:any) => visit.visitedDate === this.selectedVisitedDate
      );
      if (selectedVisit) {
        this.selectedImageURL = selectedVisit.imageURL;
        this.showModal = true;
        console.log('Open modal with image URL:', selectedVisit.imageURL);
      }
    }
  }
}
