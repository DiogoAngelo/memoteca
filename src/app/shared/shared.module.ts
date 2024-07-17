import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormValidatorComponent } from './validators/form-validator.component';

@NgModule({
  declarations: [FormValidatorComponent],
  imports: [CommonModule],
  exports: [FormValidatorComponent],
})
export class SharedModule {}
