import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AllPatientsService } from 'src/app/service/all-patients.service';

@Component({
  selector: 'app-shared-component',
  templateUrl: './shared-component.component.html',
  styleUrls: ['./shared-component.component.scss']
})
export class SharedComponentComponent implements OnInit {
  
  //@Output() imageClicked: EventEmitter<void> = new EventEmitter<void>();

  showModal = false;
  imageUrl = 'https://img.freepik.com/free-vector/realistic-receipt-template_23-2147938550.jpg?w=2000';

  constructor(private allPatientsSer:AllPatientsService) { }

  ngOnInit(): void {
    console.log('showmodal'+this.showModal);
    this.allPatientsSer.imageClickSubject.subscribe(didClicked => {
      this.showModal = didClicked;
    })
    console.log('showmodal'+this.showModal);
  }


   ///model image popup
   toggleModal() {
    this.showModal = !this.showModal;
    this.allPatientsSer.imageClickSubject.next(this.showModal);
  }
  
}
