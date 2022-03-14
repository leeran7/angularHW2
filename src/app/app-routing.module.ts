import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthPageModule),
  },
  {
    path: '',
    redirectTo: 'places',
    pathMatch: 'full',
  },
  {
    path: 'places',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./places/places.module').then((m) => m.PlacesPageModule),
  },
  {
    path: 'bookings',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./boookings/boookings.module').then((m) => m.BoookingsPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
