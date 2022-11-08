import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadPageComponent } from './components/load-page-button/load-page.component';
import { FormValidatorComponent } from './validators/form-validator.component';

@NgModule({
  declarations: [FormValidatorComponent, LoadPageComponent],
  imports: [CommonModule],
  exports: [FormValidatorComponent, LoadPageComponent],
})
export class SharedModule {}
