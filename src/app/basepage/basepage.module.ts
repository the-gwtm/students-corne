import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasepagePageRoutingModule } from './basepage-routing.module';

import { BasepagePage } from './basepage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasepagePageRoutingModule
  ],
  declarations: [BasepagePage]
})
export class BasepagePageModule {}
