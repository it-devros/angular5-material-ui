import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CheckboxesComponent } from './checkboxes/checkboxes.component';

export const SettingsRoutes: Routes = [
  {
    path: '',
    children: [ {
        path: 'about',
        component: AboutComponent
    }, {
        path: 'beach_schedule',
        component: ScheduleComponent
    }, {
        path: 'checkboxes',
        component: CheckboxesComponent
    }]
  }
];
