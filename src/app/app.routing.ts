import { Routes } from '@angular/router';

import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [{
      path: 'auth',
      loadChildren: './auth/auth.module#AuthModule'
    }]
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: 'pricing',
      loadChildren: './pricing/pricing.module#PricingModule'
    }]
  }
];
