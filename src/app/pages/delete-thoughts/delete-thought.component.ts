import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/clientService';

@Component({
  selector: 'app-delete-thought',
  templateUrl: './delete-thought.component.html',
  styleUrls: ['./delete-thought.component.scss'],
})
export class DeleteThoughtComponent {
  private id = this.route.snapshot.params['id'];

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public delete() {
    this.clientService.delete(this.id).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }

  public cancel() {
    this.router.navigate(['/']);
  }
}
