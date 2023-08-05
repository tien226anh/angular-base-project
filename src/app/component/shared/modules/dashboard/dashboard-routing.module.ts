import { NgModule } from '@angular/core';
import { DashboardComponent } from '@app/component/dashboard/dashboard.component';
import { Layouts } from '@app/app.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { layout: Layouts.Main },
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
