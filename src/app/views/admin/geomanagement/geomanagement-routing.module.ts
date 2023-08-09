import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeomanagementComponent } from './geomanagement/geomanagement.component';

const routes: Routes = [
  {path:'',component:GeomanagementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeomanagementRoutingModule { }
