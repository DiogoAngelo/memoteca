import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/clientService';
import { Thoughts } from 'src/app/shared/thoughts.model';

@Component({
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.scss'],
})
export class EditThoughtComponent implements OnInit {
  public thought: Thoughts = {
    content: '',
    author: '',
    template: '',
  };

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public id = this.route.snapshot.params['id'];

  public ngOnInit(): void {
    this.clientService.getDataById(this.id).subscribe((data) => {
      this.thought = data;
    });
  }

  public edit() {
    this.clientService.edit(this.thought).subscribe(
      () => {
        this.router.navigate(['/home']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public cancel() {
    this.router.navigate(['/home/list-thoughts']);
  }
}
