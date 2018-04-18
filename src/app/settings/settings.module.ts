import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { MdIconModule, MdCardModule, MdInputModule, MdCheckboxModule, MdButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FlexLayoutModule } from '@angular/flex-layout';

import { SettingsRoutes } from './settings.routing';

import { AboutComponent } from './about/about.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CheckboxesComponent } from './checkboxes/checkboxes.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SettingsRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AboutComponent,
    ScheduleComponent,
    CheckboxesComponent
  ]
})

export class SettingsModule {}
