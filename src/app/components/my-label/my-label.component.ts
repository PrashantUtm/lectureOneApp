import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-label',
  templateUrl: './my-label.component.html',
  styleUrls: ['./my-label.component.scss'],
})
export class MyLabelComponent  implements OnInit, OnDestroy {

  constructor() { 
    console.log('created');
  }

  ngOnDestroy(): void {
    console.log('destroyed');
  }

  ngOnInit() {
    console.log('init');
  }
}
