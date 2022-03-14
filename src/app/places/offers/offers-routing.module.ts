import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OffersPage } from './offers.page';

const routes: Routes = [
  {
    path: '',
    component: OffersPage,
  },
  // {
  //   path: 'new-offer',
  //   loadChildren: () =>
  //     import('./new-offer/new-offer.page').then((m) => m.NewOfferPage),
  // },
  // {
  //   path: 'edit-offer',
  //   loadChildren: () =>
  //     import('./edit-offer/edit-offer.page').then((m) => m.EditOfferPage),
  // },
  // {
  //   path: 'offer-bookings',
  //   loadChildren: () =>
  //     import('./offer-bookings/offer-bookings.page').then(
  //       (m) => m.OfferBookingsPage
  //     ),
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffersPageRoutingModule {}
