import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-code',
  templateUrl: './generate-code.component.html',
  styleUrls: ['./generate-code.component.scss'],
})
export class GenerateCodeComponent  implements OnInit {

  public code = '000000';
  public isButtonEnabled = true;
  public buttonLabel = 'Generate';

  constructor() { }

  ngOnInit() {}

  public generateCode() : void {
    this.isButtonEnabled = false;
    this.code = this.getRandomSixDigitNumber();
    let countdown = 5;
    this.buttonLabel = `${countdown}`;

    const intervalId = setInterval(() => {
      countdown--;
      this.buttonLabel = `${countdown}`;
      if (countdown === 0) {
        this.buttonLabel = 'Generate';
        this.isButtonEnabled = true;
        clearInterval(intervalId);
      }
    }, 1000);
  }

  private getRandomSixDigitNumber() : string {
    const numbersArray: number[] = [];

    while (numbersArray.length < 6) {
      const randomNumber = Math.floor(Math.random() * 10);
      if (!numbersArray.includes(randomNumber)) {
        numbersArray.push(randomNumber);
      }
    }

    return numbersArray.join('');
  }
}
