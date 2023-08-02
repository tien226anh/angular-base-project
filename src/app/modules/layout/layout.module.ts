import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.modules';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CenteredContentLayoutComponent } from '@app/layout/centered-content-layout/centered-content-layout.component';
import { MainLayoutComponent } from '@app/layout/main-layout/main-layout.component';
import { LoginModule } from '../login/login.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { RegisterModule } from '../register/register.module';

@NgModule({
  declarations: [MainLayoutComponent, CenteredContentLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    MaterialModule,
    FlexLayoutModule,
    LoginModule,
    RegisterModule,
    DashboardModule,
  ],
  exports: [MainLayoutComponent, CenteredContentLayoutComponent],
})
export class LayoutModule {}
