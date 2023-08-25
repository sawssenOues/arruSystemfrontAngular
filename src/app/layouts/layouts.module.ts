import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './user/user-layout/user-layout.component';
import { RouterModule } from '@angular/router';
import { AuthAdminLayoutComponent } from './admin/auth-admin-layout/auth-admin-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    UserLayoutComponent,
    AuthAdminLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LayoutsModule { }
