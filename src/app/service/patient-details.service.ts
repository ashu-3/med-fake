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
        patientId:101,
        city:"sagara",
        dateSlot:new Date("2023-09-08"),
        timeSlot:"10-30",
        patientName: "Rajdha",
        patientAge: 35,
        patientMobile: 87678909876,
        lastVisited: new Date("2022-08-31"),
      },
      {
        patientId:102,
        city:"hosasagara",
        dateSlot:new Date("2023-09-08"),
        timeSlot:"11-30",
        patientName: "Rajdha",
        patientAge: 53,
        patientMobile: 87678909876,
        lastVisited: new Date("2022-07-21"),
      },
      {
        patientId:103,
        city:"namma sagara",
        dateSlot:new Date("2023-09-06"),
        timeSlot:"15-30",
        patientName: "abc Raju okRaj",
        patientAge: 45,
        patientMobile: 87678909876,
        lastVisited: new Date("2023-09-21"),
      },
      {
        patientId:104,
        city:"sshimoga",
        dateSlot:new Date("2023-09-06"),
        timeSlot:"14-30",
        patientName: "Raju okRaj",
        patientAge: 4,
        patientMobile: 87678909876,
        lastVisited: new Date("2023-08-05"),

      },
      {
        patientId:105,
        city:"beluru",
        patientName: "xyz okRaj",
        dateSlot:new Date("2023-09-07"),
        timeSlot:"15-30",
        patientAge: 32,
        patientMobile: 87678909876,
        lastVisited: new Date("2023-08-05"),
      },
      {
        patientId:106,
        city:"makki gadde",
        dateSlot:new Date("2023-09-08"),
        timeSlot:"10-30",
        patientName: "xyz abc",
        patientAge: 33,
        patientMobile: 67678909879,
        lastVisited: new Date("2023-07-05"),
      },
      {
        patientId:107,
        city:"sagara",
        dateSlot:new Date("2023-09-07"),
        timeSlot:"11-30",
        patientName: "ipson123",
        patientAge: 35,
        patientMobile: 87678987906,
        lastVisited: new Date("2023-09-05"),
      },
      {
        patientId:108,
        city:"hombale",
        dateSlot:new Date("2023-09-10"),
        timeSlot:"12-30",
        patientName: "lorum",
        patientAge: 23,
        patientMobile: 87678987906,
        lastVisited: new Date("2022-09-11"),
      },

      {
        patientId:109,
        city:"shimoga",
        dateSlot:new Date("2023-09-08"),
        timeSlot:"14-30",
        patientName: "lorum123",
        patientAge: 25,
        patientMobile: 87678987906,
        lastVisited: new Date("2023-09-05"),
      },

      {
        patientId:110,
        city:"shimoga",
        dateSlot:new Date("2023-09-08"),
        timeSlot:"16-30",
        patientName: "lorum xyz",
        patientAge: 25,
        patientMobile: 87678987906,
        lastVisited: new Date("2023-09-05"),
      },

      {
        patientId:111,
        city:"shimoga",
        dateSlot:new Date("2023-10-06"),
        timeSlot:"13-30",
        patientName: "ipsum xyz",
        patientAge: 25,
        patientMobile: 87678987906,
        lastVisited: new Date("2023-09-05"),
      },

      {
        patientId:112,
        city:"shimoga",
        dateSlot:new Date("2023-09-07"),
        timeSlot:"12-30",
        patientName: "raju 123",
        patientAge: 25,
        patientMobile: 87678987906,
        lastVisited: new Date("2023-09-05"),
      },

      {
        patientId:113,
        city:"shimoga",
        dateSlot:new Date("2023-09-16"),
        timeSlot:"10-30",
        patientName: "xyz",
        patientAge: 25,
        patientMobile: 87678987906,
        lastVisited:null,
      },

      {
        patientId:114,
        city:"shimoga",
        dateSlot:new Date("2023-09-26"),
        timeSlot:"10-30",
        patientName: "moyi",
        patientAge: 43,
        patientMobile: 87678987906,
        lastVisited: new Date("2023-09-05"),
      },

      {
        patientId:115,
        city:"shimoga",
        dateSlot:new Date("2023-09-09"),
        timeSlot:"10-30",
        patientName: "ipsum raj",
        patientAge: 25,
        patientMobile: 87678987906,
        lastVisited: new Date("2023-09-05"),
      },

      {
        patientId:116,
        city:"shimoga",
        dateSlot:new Date("2023-09-09"),
        timeSlot:"1-30",
        patientName: "soya",
        patientAge: 15,
        patientMobile: 87678987906,
        lastVisited: new Date("2023-09-05"),
      },

      {
        patientId:117,
        city:"shimoga",
        dateSlot:new Date("2023-09-09"),
        timeSlot:"15-30",
        patientName: "chinga",
        patientAge: 25,
        patientMobile: 87678987906,
        lastVisited: new Date("2023-09-05"),
      },

      {
        patientId:118,
        city:"shimoga",
        dateSlot:new Date("2023-10-07"),
        timeSlot:"11-30",
        patientName: "lorum",
        patientAge: 17,
        patientMobile: 87678987906,
        lastVisited: new Date("2023-09-05"),
      },

      {
        patientId:119,
        city:"shimoga",
        dateSlot:new Date("2023-09-16"),
        timeSlot:"10-30",
        patientName: "lorum",
        patientAge: 24,
        patientMobile: 87678987906,
        lastVisited: new Date("2023-09-05"),
      },
      {
        patientId:120,
        city:"shimoga",
        dateSlot:new Date("2023-09-16"),
        timeSlot:"11-30",
        patientName: "lalu",
        patientAge: 25,
        patientMobile: 87678987906,
        lastVisited: new Date("2023-09-05"),
      },

      {
        patientId:121,
        city:"sagara",
        dateSlot:new Date("2023-09-16"),
        timeSlot:"10-30",
        patientName: "somaali",
        patientAge: 36,
        patientMobile: 87678987906,
        lastVisited: new Date("2023-09-05"),
      },
    ];
  }

  // Define a property to hold the array of patient details
  public patientDetails: Array<{
    city:string;
    dateSlot:Date;
    patientId:number;
    patientName: string;
    patientAge?: number;
    patientMobile?: number;
    lastVisited?: Date | null;
    timeSlot:string;
  }> = [];

  // You can add methods to manipulate the patientDetails array if needed
  public addPatientDetail(patientDetail: {
    city:string;
    dateSlot:Date;
    patientId:number;
    patientName: string;
    patientAge?: number;
    patientMobile?: number;
    lastVisited?: Date;
    timeSlot:string;
  }): void {
    this.patientDetails.push(patientDetail);
  }

  // getPatientByIndex(index: number): {
  //   patientName: string;
  //   patientAge?: number;
  //   patientMobile?: number;
  //   lastVisited?: Date;
  // } | undefined {
  //   if (index >= 0 && index < this.patientDetails.length) {
  //     return this.patientDetails[index];
  //   }
  //   return undefined; // Return undefined if the index is out of range
  // }

  // Other methods and properties can be added as per your requirements
}
