import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public isEmailVisible = true;
  public emailAddress = '';
  public isEmailChanged = false;

  private originalEmailAddress = '';

  constructor() { }

  ngOnInit() {
  }

  public toggleChanged(): void {
    this.isEmailVisible = !this.isEmailVisible;
  }

  public verifyEmail(): void {
    console.log(this.emailAddress);
    this.originalEmailAddress = this.emailAddress;
    this.isEmailChanged = false;
  }

  public emailChanged() : void {
    this.isEmailChanged = this.originalEmailAddress !== this.emailAddress;
  }
}
