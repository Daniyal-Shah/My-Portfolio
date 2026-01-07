import { Routes } from '@angular/router';

export const routes: Routes = [
  // PUBLIC PORTFOLIO AREA
  {
    path: '',
    loadChildren: () =>
      import('./portfolio-routing/portfolio-module').then(
        (m) => m.PortfolioModule
      ),
  },
  // ADMIN ROUTES
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin-routing/admin-module').then((m) => m.AdminModule),
  },
  { path: '**', redirectTo: '' },
];
