import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientDetailsService {
  // patientName: string = "";
  // patientAge?: number;
  // patientMobile?: number;
  // lastVisited?: Date;

  constructor() {
    // Initialize the array of patient details in the constructor
    this.initializePatientDetails();
  }

  // Define a method to initialize the array of patient details
  public initializePatientDetails():any  {
    this.patientDetails = [
      {
        patientName: "Rajdha",
        patientAge: 35,
        patientMobile: 87678909876,
        lastVisited: new Date("2022-08-31"),
      },
      {
        patientName: "Rajdha",
        patientAge: 53,
        patientMobile: 87678909876,
        lastVisited: new Date("2023-07-21"),
      },
      {
        patientName: "abc Raju okRaj",
        patientAge: 45,
        patientMobile: 87678909876,
      },
    ];
  }

  // Define a property to hold the array of patient details
  public patientDetails: Array<{
    patientName: string;
    patientAge?: number;
    patientMobile?: number;
    lastVisited?: Date;
  }> = [];

  // You can add methods to manipulate the patientDetails array if needed
  public addPatientDetail(patientDetail: {
    patientName: string;
    patientAge?: number;
    patientMobile?: number;
    lastVisited?: Date;
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
