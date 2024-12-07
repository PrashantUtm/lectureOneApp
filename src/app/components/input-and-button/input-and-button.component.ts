import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-and-button',
  templateUrl: './input-and-button.component.html',
  styleUrls: ['./input-and-button.component.scss'],
})
export class InputAndButtonComponent  implements OnInit {

  public header = 'Title';
  public buttonLabel = 'Click';
  public placeholder = 'Type something ...';
  public value = '';

  public hasValueChanged = false;

  private originalValue = '';

  constructor() { }

  ngOnInit() {
    this.originalValue = this.value;
  }

  public onButtonClicked() : void {
    console.log(this.value);
    this.originalValue = this.value;
  }

  public valueChanged() : void {
    this.hasValueChanged = this.originalValue !== this.value;
  }

}
