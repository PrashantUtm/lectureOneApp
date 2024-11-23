import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
    console.log(this.getNumber(true));
    console.log(this.getNumber(false));

    console.log(5/0);
    console.log(-5/0);
  }

  private getNumber(x : boolean) : number {
    if (x) {
      return Math.random() * 5;
    } else {
      return NaN;
    }
  }
}
