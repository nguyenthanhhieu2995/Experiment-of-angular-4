import {
  Component,
  OnInit
  } from '@angular/core';
import { Router } from '@angular/router';
@Component({ // decorator
  selector: 'app-root', // mỗi component có 1 selector để angular tham chiếu đến component đó.
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // propertyBinding. ( from Component to Template)
  imgSrc = 'http://lorempixel.com/400/200';
  textColorh1 = 'tomato';
  backgroundColor = 'yellow';
  isSmall = true;
  styleObj = {
    'font-size.px' : this.isSmall ? 20 : 50,
    background : this.backgroundColor,
  };
  withBorder = true;
  username = '';
  isChecked = true;
  // varible for example component interaction @input.
  titleHeroes = 'Heroes\'s MCU';
  dataHeroes = [
    {
      id : 1,
      name : 'Spider-man',
      ability : 'Spider sence'
    },
    {
      id : 2,
      name : 'Captain-america',
      ability : 'Vibranium-shield'
    },
    {
      id : 3,
      name : 'Winter-Soldier',
      ability : 'Vibranium-arm'
    }
  ];
  // variable for learn lifecyclehook
  isShowing = true;
  number1: number;
  number2: number;
  total = 0;
  // varible for example component interaction @output.
  textInput: string;
  numberInput: number;
  selectRadio: string;
  selectCheckBox: boolean;

  constructor( public routerService: Router ) {}




  // eventBinding. (from Template to Component)
  onButtonClick(event) {
      this.withBorder = !this.withBorder;
      console.log(event);
  }
  onMouseOver() {
    this.textColorh1 = 'green';
  }
  onMouseOut() {
    this.textColorh1 = 'tomato';
  }
  onKeyUp(event) {
    this.username = event.target.value;
  }
  // Receive data from Child-component
  onGetFullName(event) {
    console.log(event);
    this.textInput = event.textInput;
    this.selectRadio = event.selectRadio;
    this.selectCheckBox = event.selectCheckBox;
    this.numberInput = event.numberInput;
  }
  // Learn lifecycle-Hook.
  onToggle() {
    this.isShowing = !this.isShowing;
  }
  amount() {
    this.total = this.number1 + this.number2;
  }
  // Learn router.
  navigate(url) {
    console.log(url);
    this.routerService.navigateByUrl(url);
  }
}

