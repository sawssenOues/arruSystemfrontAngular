import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin/admin-layout/admin-layout.component';
import { AuthAdminLayoutComponent } from './layouts/admin/auth-admin-layout/auth-admin-layout.component';
import { LayoutsModule } from './layouts/layouts.module';
import { UserLayoutComponent } from './layouts/user/user-layout/user-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  //routing for user
  {path:'',component:UserLayoutComponent, children:[
    {path:'dashboard',loadChildren:()=>import('./views/user/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'login',loadChildren:()=>import('./views/user/login-user/login-user.module').then(m=>m.LoginUserModule)}
  ]},
  //routing for admin
  {path:'admin',component:AdminLayoutComponent,children:[
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'prevmeasures',loadChildren:()=>import('./views/admin/prevmeasures/prevmeasures.module').then(m=>m.PrevmeasuresModule)},
    {path:'geomanagement',loadChildren:()=>import('./views/admin/geomanagement/geomanagement.module').then(m=>m.GeomanagementModule) }
  ]}
  ,
  {path:'admin/login',component:AuthAdminLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    LayoutsModule
  ]
})
export class AppRoutingModule { }
