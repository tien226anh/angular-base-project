import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { Layouts } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  {
    path: 'dashboard', // http://localhost:4200/dashboard
    component: DashboardComponent,
    data: { layout: Layouts.Main },
  },
  {
    path: '', // http://localhost:4200/dashboard
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'login', // http://localhost:4200/login
    component: LoginComponent,
    data: { layout: Layouts.centeredContent },
  },
  {
    path: 'register', // http://localhost:4200/register
    component: RegisterComponent,
    data: { layout: Layouts.centeredContent },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
