import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(users: any[], sortBy: string, sortValue: number): any[] {
    users = orderBy(users, [sortBy], [sortValue === 1 ? 'asc' : 'desc']);
    return users;
  }
}
