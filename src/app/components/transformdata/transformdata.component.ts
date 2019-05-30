import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transformdata',
  templateUrl: './transformdata.component.html',
  styleUrls: ['./transformdata.component.css']
})
export class TransformdataComponent implements OnInit {
  text = 'Ipsum esse est amet.';
  num = 0.18376558;
  date = new Date();
  users = [
    {
      id: 3,
      first_name: 'Tabbatha',
      last_name: 'Jarville',
      email: 'tjarville0@hugedomains.com',
      gender: 'Female'
    }, {
      id: 1,
      first_name: 'Jeanne',
      last_name: 'Connick',
      email: 'jconnick1@123-reg.co.uk',
      gender: 'Female'
    }, {
      id: 2,
      first_name: 'Peter',
      last_name: 'Parker',
      email: 'peterParker@123-reg.co.uk',
      gender: 'Male'
    }, {
      id: 4,
      first_name: 'Alan',
      last_name: 'Shearer',
      email: 'AlanShearer@123-reg.co.uk',
      gender: 'Male'
    }
  ];
  filterField: string;
  sortBy = 'id';
  sortValue = 1;
  constructor() { }

  ngOnInit() {
  }
  selectFilterField(e: any) {
    this.filterField = e.target.value;
    console.log(this.filterField);
  }
  onHandleSortBy(value: string) {
    this.sortBy = value;
    this.sortValue = -this.sortValue;
  }
}
