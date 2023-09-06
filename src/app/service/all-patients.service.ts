import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllPatientsService {

  imageClickSubject  = new Subject<boolean>();

  constructor() {
    // Initialize the array of patient details in the constructor
    this.initializeAllPatientDetails();
  }

  // Define a method to initialize the array of patient details
  public initializeAllPatientDetails():any  {
    this.allPatientDetails = [
      {
        patientId:101,
        city:"sagara",
        patientName: "Rajdha",
        patientAge: 35,
        patientMobile: 87678909876,
        lastVisited: new Date("2022-08-31"),
      },
      {
        patientId:102,
        city:"hosasagara",
        patientName: "Rajdha",
        patientAge: 53,
        patientMobile: 87678909876,
        lastVisited: new Date("2022-07-21"),
      },
      {
        patientId:103,
        city:"namma sagara",
        patientName: "abc Raju okRaj",
        patientAge: 45,
        patientMobile: 87678909876,
        lastVisited: new Date("2023-09-21"),
      },
      {
        patientId:104,
        city:"sshimoga",
        patientName: "Raju okRaj",
        patientAge: 4,
        patientMobile: 87678909876,
        lastVisited: new Date("2023-08-05"),

      },
      {
        patientId:105,
        city:"beluru",
        patientName: "xyz okRaj",
        patientAge: 32,
        patientMobile: 87678909876,
        lastVisited: new Date("2023-08-05"),
      },
      {
        patientId:106,
        city:"makki gadde",
        patientName: "xyz abc",
        patientAge: 33,
        patientMobile: 67678909879,
        lastVisited: new Date("2023-07-05"),
      },
      {
        patientId:107,
        city:"sagara",
        patientName: "ipson123",
        patientAge: 35,
        patientMobile: 87678987906,
        lastVisited: new Date("2023-09-05"),
      },
      {
        patientId:108,
        city:"hombale",
        patientName: "lorum",
        patientAge: 23,
        patientMobile: 87678987906,
        lastVisited: new Date("2022-09-11"),
      },

      {
        patientId:109,
        city:"shimoga",
        patientName: "lorum123",
        patientAge: 25,
        patientMobile: 87678987906,
        lastVisited: new Date("2023-09-05"),
      },

      {
        patientId:110,
        city:"shimoga",
        patientName: "lorum xyz",
        patientAge: 25,
        patientMobile: 87678987906,
        lastVisited: new Date("2023-09-05"),
      },

      {
        patientId:111,
        city:"shimoga",
        patientName: "ipsum xyz",
        patientAge: 25,
        patientMobile: 87678987906,
        lastVisited: new Date("2023-09-05"),
      },

      {
        patientId:112,
        city:"shimoga",
        patientName: "raju 123",
        patientAge: 25,
        patientMobile: 87678987906,
        lastVisited: new Date("2023-09-05"),
      },

      {
        patientId:113,
        city:"shimoga",
        patientName: "xyz",
        patientAge: 25,
        patientMobile: 87678987906,
        lastVisited: null,
      },

      {
        patientId:114,
        city:"shimoga",
        patientName: "moyi",
        patientAge: 43,
        patientMobile: 87678987906,
        lastVisited: new Date("2023-09-05"),
      },

      {
        patientId:115,
        city:"shimoga",
        patientName: "ipsum raj",
        patientAge: 25,
        patientMobile: 87678987906,
        lastVisited: new Date("2023-09-05"),
      },

      {
        patientId:116,
        city:"shimoga",
        patientName: "soya",
        patientAge: 15,
        patientMobile: 87678987906,
        lastVisited: new Date("2023-09-05"),
      },

      {
        patientId:117,
        city:"shimoga",
        patientName: "chinga",
        patientAge: 25,
        patientMobile: 87678987906,
        lastVisited: new Date("2023-09-05"),
      },

      {
        patientId:118,
        city:"shimoga",
        patientName: "lorum",
        patientAge: 17,
        patientMobile: 87678987906,
        lastVisited: new Date("2023-09-05"),
      },

      {
        patientId:119,
        city:"shimoga",
        patientName: "lorum",
        patientAge: 24,
        patientMobile: 87678987906,
        lastVisited: new Date("2023-09-05"),
      },
      {
        patientId:120,
        city:"shimoga",
        patientName: "lalu",
        patientAge: 25,
        patientMobile: 87678987906,
        lastVisited: new Date("2023-09-05"),
      },

      {
        patientId:121,
        city:"sagara",
        patientName: "somaali",
        patientAge: 36,
        patientMobile: 87678987906,
        lastVisited: new Date("2023-09-05"),
      },
    ];
  }

  // Define a property to hold the array of patient details
  public allPatientDetails: Array<{
    patientId:number;
    city:string;
    patientName: string;
    patientAge?: number;
    patientMobile?: number;
    lastVisited?: Date | null;
  }> = [];

  // You can add methods to manipulate the patientDetails array if needed
  public addAllPatientDetail(allPatientDetails: {
    patientId:number;
    city:string;
    patientName: string;
    patientAge?: number;
    patientMobile?: number;
    lastVisited?: Date;
  }): void {
    this.allPatientDetails.push(allPatientDetails);
  }

  public findPatientById(patientId: number): any {
    return this.allPatientDetails.find(patient => patient.patientId === patientId);
  }
}
