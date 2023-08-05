import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../../component/shared/modules/material.modules';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CenteredContentLayoutComponent } from '@app/layout/centered-content-layout/centered-content-layout.component';
import { MainLayoutComponent } from '@app/layout/main-layout/main-layout.component';
import { LoginModule } from '../../../../component/shared/modules/login/login.module';
import { DashboardModule } from '../../../../component/shared/modules/dashboard/dashboard.module';
import { RegisterModule } from '../../../../component/shared/modules/register/register.module';
import { BooksModule } from '@app/component/shared/modules/books/books.module';

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
    BooksModule,
  ],
  exports: [MainLayoutComponent, CenteredContentLayoutComponent],
})
export class LayoutModule {}
