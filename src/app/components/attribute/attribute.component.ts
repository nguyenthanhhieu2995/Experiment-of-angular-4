import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {
  isClass = false;
  isStyle = false;
  constructor() { }

  ngOnInit() {
  }

  setClass() {
    return {
      'color-red' : this.isClass,
      'font-style' : this.isClass,
      'isBorder' : this.isClass
    }
  }

  setStyle() {
    return {
      'border' : this.isStyle ? 'solid 2px blue' : '',
      'padding.px' : this.isStyle ? '10' : '',
      'color' : this.isStyle ? 'red' : ''
    }
  }

  toggleClass() {
    this.isClass = !this.isClass;
  }

  toggleStyle() {
    this.isStyle = !this.isStyle;
  }
}
