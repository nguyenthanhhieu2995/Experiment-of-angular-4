import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatData'
})
export class FormatDataPipe implements PipeTransform {
  transform(value: string, end: number = 10): string {
    return value.length > end ? value.slice(0, end).concat('...') : value;
  }
}

