import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from '@app/component/login/login.component';
import { Layouts } from '@app/app.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { layout: Layouts.centeredContent },
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
