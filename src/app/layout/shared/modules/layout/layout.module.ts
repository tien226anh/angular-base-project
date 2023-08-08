// Libs imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

// App modules imports
import { MaterialModule } from '@app/component/shared/modules/material.modules';
import { LoginModule } from '@app/component/shared/modules/login/login.module';
import { DashboardModule } from '@app/component/shared/modules/dashboard/dashboard.module';
import { RegisterModule } from '@app/component/shared/modules/register/register.module';
import { BooksModule } from '@app/component/shared/modules/books/books.module';

// App components imports
import { CenteredContentLayoutComponent } from '@app/layout/centered-content-layout/centered-content-layout.component';
import { MainLayoutComponent } from '@app/layout/main-layout/main-layout.component';

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
