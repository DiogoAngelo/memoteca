import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { EditThoughtComponent } from './edit-thought/edit-thought.component';
import { ThoughtsCardComponent } from './thoughts-card/thoughts-card.component';
import { ListThoughtsComponent } from './list-thoughts/list-thoughts.component';

@NgModule({
  declarations: [
    EditThoughtComponent,
    ThoughtsCardComponent,
    ListThoughtsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [EditThoughtComponent, ThoughtsCardComponent, ListThoughtsComponent],
})
export class PagesModule {}
