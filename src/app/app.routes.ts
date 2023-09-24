import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('@components/pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
  },
  {
    path: 'farms',
    loadChildren: () => import('@components/pages/farms/farms.routes').then(m => m.FarmsRoutes),
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    loadComponent: () => import('@components/pages/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent),
  },
];
