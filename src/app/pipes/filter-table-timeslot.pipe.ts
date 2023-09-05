import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'filterTableTimeslot'
})
export class FilterTableTimeslotPipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}

  transform(data: any[], currentDate: Date, currentTimeSlot: string): any[] {
    if (!data) return [];
    
    const filteredData = data.filter(item => {
      const itemDate = new Date(item.lastVisited);

      // Check if itemDate is a valid date
      if (!isNaN(itemDate.getTime())) {
        const formattedDate = this.datePipe.transform(itemDate, 'yyyy-MM-dd');

        return formattedDate === this.datePipe.transform(currentDate, 'yyyy-MM-dd');
      }
      
      return false; // Invalid date, exclude from the filter
    });

    // Sort the filtered data by timeSlot as time values in ascending order
    return filteredData.sort((a, b) => {
      const timeA = a.timeSlot.split(':').map(Number);
      const timeB = b.timeSlot.split(':').map(Number);

      if (timeA[0] !== timeB[0]) {
        return timeA[0] - timeB[0]; // Compare hours
      } else {
        return timeA[1] - timeB[1]; // Compare minutes if hours are equal
      }
    });
  }
}
