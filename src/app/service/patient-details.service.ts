import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientDetailsService {

  constructor() {
    // Initialize the array of patient details in the constructor
    this.initializePatientDetails();
  }

  // Define a method to initialize the array of patient details
  public initializePatientDetails():any  {
    this.patientDetails = [
      {
        city:"sagara",
        dateSlot: new Date('2023-09-06'),
        patientName: "Rajdha",
        patientAge: 35,
        patientMobile: 87678909876,
        lastVisited: new Date("2022-08-31"),
        timeSlot: '10:30'
      },
      {
        city:"hosasagara",
        dateSlot: new Date('2023-09-05'),
        patientName: "Rajdha",
        patientAge: 53,
        patientMobile: 87678909876,
        lastVisited: new Date("2022-07-21"),
        timeSlot: '11:30'
      },
      {
        city:"namma sagara",
        dateSlot: new Date('2023-09-06'),
        patientName: "abc Raju okRaj",
        patientAge: 45,
        patientMobile: 87678909876,
        lastVisited: new Date("2023-09-21"),
        timeSlot: '11:30'
      },
      {
        city:"sshimoga",
        dateSlot: new Date('2023-09-06'),
        patientName: "Raju okRaj",
        patientAge: 4,
        patientMobile: 87678909876,
        lastVisited: new Date("2023-08-05"),
        timeSlot: '11:30'
      },
      {
        city:"beluru",
        dateSlot: new Date('2023-09-06'),
        patientName: "xyz okRaj",
        patientAge: 32,
        patientMobile: 87678909876,
        lastVisited: new Date("2023-08-05"),
        timeSlot: '10:30'
      },
      {
        city:"makki gadde",
        dateSlot: new Date('2023-09-05'),
        patientName: "xyz abc",
        patientAge: 33,
        patientMobile: 67678909879,
        lastVisited: new Date("2023-07-05"),
        timeSlot: '12:30'
      },
      {
        city:"sagara",
        dateSlot: new Date('2023-09-05'),
        patientName: "ipson",
        patientAge: 33,
        patientMobile: 87678987906,
        lastVisited: new Date("2023-09-05"),
        timeSlot: '16:30'
      },
      {
        city:"hombale",
        dateSlot: new Date('2023-09-05'),
        patientName: "lorum",
        patientAge: 23,
        patientMobile: 87678987906,
        lastVisited: new Date("2022-09-11"),
        timeSlot: '15:30'
      },

      {
        city:"shimoga",
        dateSlot: new Date('2023-09-05'),
        patientName: "lorum",
        patientAge: 25,
        patientMobile: 87678987906,
        lastVisited: new Date("2023-09-05"),
        timeSlot: '12:30'
      },
    ];
  }

  // Define a property to hold the array of patient details
  public patientDetails: Array<{
    city:string;
    dateSlot:Date;
    patientName: string;
    patientAge?: number;
    patientMobile?: number;
    lastVisited?: Date;
    timeSlot:string;
  }> = [];

  // You can add methods to manipulate the patientDetails array if needed
  public addPatientDetail(patientDetail: {
    city:string;
    dateSlot:Date;
    patientName: string;
    patientAge?: number;
    patientMobile?: number;
    lastVisited?: Date;
    timeSlot:string;
  }): void {
    this.patientDetails.push(patientDetail);
  }

  getPatientByIndex(index: number): {
    patientName: string;
    patientAge?: number;
    patientMobile?: number;
    lastVisited?: Date;
  } | undefined {
    if (index >= 0 && index < this.patientDetails.length) {
      return this.patientDetails[index];
    }
    return undefined; // Return undefined if the index is out of range
  }

  // Other methods and properties can be added as per your requirements
}
