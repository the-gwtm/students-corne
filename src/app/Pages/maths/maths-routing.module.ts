import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MathsPage } from './maths.page';

const routes: Routes = [
  {
    path: '',
    component: MathsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MathsPageRoutingModule {}
