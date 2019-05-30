import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
// service

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {
  userName = 'Nguyen Thanh Hieu';
  listItems = [];
  listItemsFromServer = [
    {
      id : 1,
      name: 'Iphone 7',
      price: '7000000'
    },
    {
      id : 2,
      name: 'Iphone 7 plus',
      price: '12000000'
    },
    {
      id : 3,
      name: 'Iphone 8',
      price: '13000000',
    },
    {
      id : 4,
      name: 'Iphone 8 plus',
      price: '16000000'
    }
  ];
  users = [
    {
      name : 'Steve Rodger',
      country : 'USA'
    },
    {
      name : 'Peter Parker',
      country : 'USA'
    },
    {
      name : 'Tony Stark',
      country : 'ENG'
    },
    {
      name : 'Stephan Strange',
      country : 'GER'
    },
    {
      name : 'Carol Danver',
      country : 'USA'
    }
  ];
  // Template reference variable at .ts
  @ViewChild('f') formData: ElementRef;
  constructor() {}

  ngOnInit() {}
  getdata() {
    this.listItems = this.listItemsFromServer;
  }
  myTrackByFunction(index, item) {
    console.log(index);
    console.log(item);
    return item.id;
  }
  onSubmit() {
    console.log(this.formData);
  }
}
