import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CreateThoughtComponent } from './create-thought/create-thought.component';
import { EditThoughtComponent } from './edit-thought/edit-thought.component';
import { ListThoughtsComponent } from './list-thoughts/list-thoughts.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThoughtsCardComponent } from './thoughts-card/thoughts-card.component';

@NgModule({
  declarations: [
    CreateThoughtComponent,
    ListThoughtsComponent,
    ThoughtsCardComponent,
    EditThoughtComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
    CreateThoughtComponent,
    ListThoughtsComponent,
    ThoughtsCardComponent,
  ],
})
export class PagesModule {}
