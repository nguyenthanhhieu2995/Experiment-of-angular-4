import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  // Cách 1:[key]="value";
  // Cách 2: key = "{{value}}";
  // @Input() titleHeroes: string;
  // tslint:disable-next-line:variable-name
  private _titleHeroes: string;
  textInput: string;
  numberInput: number;
  selectRadio: string;
  isChecked: boolean;
  @Input() dataHeroes: any[];
  @Output() dataChild = new EventEmitter<object>();
  constructor() { }

  ngOnInit() {
  }
  @Input()
  set titleHeroes(titleHeroes: string) {
    this._titleHeroes = titleHeroes;
  }
  // Hàm get dùng để hiển thị.
  get titleHeroes() {
    return this._titleHeroes;
  }
  onSubmitForm() {
    this.dataChild.emit({ textInput: this.textInput,
                          numberInput: this.numberInput,
                          selectRadio: this.selectRadio,
                          selectCheckBox: this.isChecked });
  }
}
