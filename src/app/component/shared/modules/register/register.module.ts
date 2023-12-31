import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.modules';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { RegisterComponent } from '@app/component/register/register.component';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
})
export class RegisterModule {}
