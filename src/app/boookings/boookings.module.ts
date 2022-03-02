import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoookingsPageRoutingModule } from './boookings-routing.module';

import { BoookingsPage } from './boookings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoookingsPageRoutingModule
  ],
  declarations: [BoookingsPage]
})
export class BoookingsPageModule {}
