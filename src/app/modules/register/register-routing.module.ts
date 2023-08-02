import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from '@app/component/register/register.component';
import { Layouts } from '@app/app.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
    data: { layout: Layouts.centeredContent },
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}
