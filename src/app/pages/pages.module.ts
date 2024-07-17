import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { EditThoughtComponent } from './edit-thought/edit-thought.component';

@NgModule({
  declarations: [EditThoughtComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [EditThoughtComponent],
})
export class PagesModule {}
