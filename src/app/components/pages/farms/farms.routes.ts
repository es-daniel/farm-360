import { Routes } from '@angular/router';
import { FarmsComponent } from './farms.component';

export const FarmsRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FarmsComponent,
  },
  {
    path: 'create',
    loadComponent: () => import('@components/pages/farms/create-farm/create-farm.component').then(m => m.CreateFarmComponent),
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('@components/pages/farms/edit-farm/edit-farm.component').then(m => m.EditFarmComponent),
  },
];
