import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MathsPageRoutingModule } from './maths-routing.module';

import { MathsPage } from './maths.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MathsPageRoutingModule
  ],
  declarations: [MathsPage]
})
export class MathsPageModule {}
