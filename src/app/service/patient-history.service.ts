import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientHistoryService {

  constructor() { 
    this.initializeAllPatientHistory();
  }

  public allPatientHistory: Array<{
    patientId:number;
    visitedDetails?:Array<
      {
        visitedDate:Date ,
        imageURL:string,
      }
    >
  }> = [];

  public initializeAllPatientHistory():any  {
    this.allPatientHistory = [
      {
        patientId:101,
        visitedDetails:[
          {
            visitedDate: new Date('2022-08-31'),
            imageURL:"https://images.template.net/8481/medical--receipt-template-f89ak.png"
          },
          {
            visitedDate:new Date('2022-05-12'),
            imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1SOHxLX2DN53rtWg0PEYUDB6tTKLC7jSjfrqrXFElwiLAAgCXEXwkp-GLf_KgamTGbxE&usqp=CAU"
          },
          {
            visitedDate:new Date('2022-04-2'),
            imageURL:"https://img.freepik.com/free-vector/flat-design-medical-invoice_23-2149188232.jpg?w=2000"
          },
          {
            visitedDate:new Date('2022-03-12'),
            imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1SOHxLX2DN53rtWg0PEYUDB6tTKLC7jSjfrqrXFElwiLAAgCXEXwkp-GLf_KgamTGbxE&usqp=CAU"
          }
        ]
      },

      {
        patientId:102,
        visitedDetails:[
          {
            visitedDate: new Date('2022-07-21'),
            imageURL:"https://i.pinimg.com/1200x/d3/b8/60/d3b860e01e58170744bab314d4838697.jpg"
          },
          {
            visitedDate:new Date('2022-05-12'),
            imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1SOHxLX2DN53rtWg0PEYUDB6tTKLC7jSjfrqrXFElwiLAAgCXEXwkp-GLf_KgamTGbxE&usqp=CAU"
          },
          {
            visitedDate:new Date('2022-06-12'),
            imageURL:"https://img.freepik.com/free-vector/flat-design-medical-invoice_23-2149188232.jpg?w=2000"
          }
        ]
      },

      {
        patientId:103,
        visitedDetails:[
          {
            visitedDate: new Date('2022-07-21'),
            imageURL:"https://img.freepik.com/free-vector/realistic-receipt-template_23-2147938550.jpg?w=2000"
          },
          {
            visitedDate:new Date('2022-06-12'),
            imageURL:"https://img.freepik.com/free-vector/flat-design-medical-invoice_23-2149188232.jpg?w=2000"
          },
          {
            visitedDate:new Date('2022-05-12'),
            imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1SOHxLX2DN53rtWg0PEYUDB6tTKLC7jSjfrqrXFElwiLAAgCXEXwkp-GLf_KgamTGbxE&usqp=CAU"
          },
        ]
      },
      {
        patientId:104,
        visitedDetails:[
          {
            visitedDate: new Date('2022-08-31'),
            imageURL:"https://images.template.net/8481/medical--receipt-template-f89ak.png"
          },
          {
            visitedDate:new Date('2022-06-12'),
            imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1SOHxLX2DN53rtWg0PEYUDB6tTKLC7jSjfrqrXFElwiLAAgCXEXwkp-GLf_KgamTGbxE&usqp=CAU"
          },
          {
            visitedDate:new Date('2022-04-22'),
            imageURL:"https://img.freepik.com/free-vector/flat-design-medical-invoice_23-2149188232.jpg?w=2000"
          },
          {
            visitedDate:new Date('2022-03-2'),
            imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1SOHxLX2DN53rtWg0PEYUDB6tTKLC7jSjfrqrXFElwiLAAgCXEXwkp-GLf_KgamTGbxE&usqp=CAU"
          }
        ]
      },

      {
        patientId:105,
        visitedDetails:[
          {
            visitedDate: new Date('2022-08-31'),
            imageURL:"https://images.template.net/8481/medical--receipt-template-f89ak.png"
          },
          {
            visitedDate:new Date('2022-06-12'),
            imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1SOHxLX2DN53rtWg0PEYUDB6tTKLC7jSjfrqrXFElwiLAAgCXEXwkp-GLf_KgamTGbxE&usqp=CAU"
          },
          {
            visitedDate:new Date('2022-04-12'),
            imageURL:"https://img.freepik.com/free-vector/flat-design-medical-invoice_23-2149188232.jpg?w=2000"
          },
          {
            visitedDate:new Date('2022-01-12'),
            imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1SOHxLX2DN53rtWg0PEYUDB6tTKLC7jSjfrqrXFElwiLAAgCXEXwkp-GLf_KgamTGbxE&usqp=CAU"
          }
        ]
      },
      {
        patientId:117,
        visitedDetails:[
          {
            visitedDate: new Date('2022-08-31'),
            imageURL:"https://images.template.net/8481/medical--receipt-template-f89ak.png"
          },
          {
            visitedDate:new Date('2022-06-12'),
            imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1SOHxLX2DN53rtWg0PEYUDB6tTKLC7jSjfrqrXFElwiLAAgCXEXwkp-GLf_KgamTGbxE&usqp=CAU"
          },
          {
            visitedDate:new Date('2022-04-12'),
            imageURL:"https://img.freepik.com/free-vector/flat-design-medical-invoice_23-2149188232.jpg?w=2000"
          },
          {
            visitedDate:new Date('2022-01-12'),
            imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1SOHxLX2DN53rtWg0PEYUDB6tTKLC7jSjfrqrXFElwiLAAgCXEXwkp-GLf_KgamTGbxE&usqp=CAU"
          }
        ]
      },
    ]
  }
  public findPatientById(patientId: number): any {
    return this.allPatientHistory.find(patient => patient.patientId === patientId);
  }
  
  // Function to add a file to a specific patient's visited details
  public addFileToVisitedDetails(patientId: number, visitedDate: Date, imageURL: string[]): void {
    const patient = this.findPatientById(patientId);
    if (patient) {
      if (!patient.visitedDetails) {
        patient.visitedDetails = [];
      }
      patient.visitedDetails.push({ visitedDate, imageURL });
    }
  }
}
