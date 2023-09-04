import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent implements OnInit {

  @Input() imageUrl: string = '';
  @Input() showModal: boolean = true;
  @Output() closeModal = new EventEmitter<void>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
