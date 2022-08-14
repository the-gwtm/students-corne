import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocialsciencePageRoutingModule } from './socialscience-routing.module';

import { SocialsciencePage } from './socialscience.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocialsciencePageRoutingModule
  ],
  declarations: [SocialsciencePage]
})
export class SocialsciencePageModule {}
