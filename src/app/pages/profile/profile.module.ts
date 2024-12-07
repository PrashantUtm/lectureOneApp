import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { MyLabelComponent } from 'src/app/components/my-label/my-label.component';
import { GenerateCodeComponent } from 'src/app/components/generate-code/generate-code.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule
  ],
  declarations: [ProfilePage, MyLabelComponent, GenerateCodeComponent]
})
export class ProfilePageModule {}
