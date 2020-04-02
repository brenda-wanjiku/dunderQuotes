import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: any): number {
    let now:any = new Date();
      var diff = now.getTime() - value.getTime();
      diff/=1000;
      diff/=(60*60)
      diff/=24;
      return Math.ceil(diff) - 1;
  }
}