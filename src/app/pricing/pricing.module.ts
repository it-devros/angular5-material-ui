import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { MdIconModule, MdCardModule, MdInputModule, MdCheckboxModule, MdButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FlexLayoutModule } from '@angular/flex-layout';

import { PricingRoutes } from './pricing.routing';

import { PricingAddComponent } from './add/add.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PricingRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PricingAddComponent,
  ]
})

export class PricingModule {}
