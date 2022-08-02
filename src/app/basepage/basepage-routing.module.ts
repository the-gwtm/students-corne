import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasepagePage } from './basepage.page';

const routes: Routes = [
  {
    path: '',
    component: BasepagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasepagePageRoutingModule {}
