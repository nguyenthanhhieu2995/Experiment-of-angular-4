import { Pipe, PipeTransform } from '@angular/core';
import { filter, includes, toString } from 'lodash';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(users: any[], filterField: string, filterValue: string): any[] {
    if (filterField && filterValue) {
      users = filter(users, (user) => includes(toString(user[filterField]), filterValue));
    }
    return users;
  }
}
