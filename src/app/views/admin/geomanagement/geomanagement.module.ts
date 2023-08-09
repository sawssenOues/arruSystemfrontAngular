import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeomanagementRoutingModule } from './geomanagement-routing.module';
import { GeomanagementComponent } from './geomanagement/geomanagement.component';


@NgModule({
  declarations: [
    GeomanagementComponent
  ],
  imports: [
    CommonModule,
    GeomanagementRoutingModule
  ]
})
export class GeomanagementModule { }
