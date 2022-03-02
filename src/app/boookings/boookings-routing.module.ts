import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoookingsPage } from './boookings.page';

const routes: Routes = [
  {
    path: '',
    component: BoookingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoookingsPageRoutingModule {}
