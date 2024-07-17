import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteThoughtComponent } from './delete-thoughts/delete-thought.component';
import { EditThoughtComponent } from './edit-thought/edit-thought.component';
import { ListThoughtsComponent } from './list-thoughts/list-thoughts.component';

const routes: Routes = [
  {
    path: '',
    component: ListThoughtsComponent,
  },
  {
    path: 'create-thought',
    component: EditThoughtComponent,
  },

  {
    path: 'delete-thought/:id',
    component: DeleteThoughtComponent,
  },
  {
    path: 'edit-thought/:id',
    component: EditThoughtComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
