import { Routes } from '@angular/router';

import { PricingAddComponent } from './add/add.component';

export const PricingRoutes: Routes = [
  {
    path: '',
    children: [ {
        path: 'add',
        component: PricingAddComponent
    }]
  }
];
