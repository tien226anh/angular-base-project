import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent } from '@app/component/login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { MaterialModule } from '../material.modules';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
})
export class LoginModule {}
