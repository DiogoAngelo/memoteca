import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/clientService';
import { Thoughts } from 'src/app/shared/thoughts.model';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.scss'],
})
export class CreateThoughtComponent implements OnInit {
  public thought: Thoughts = {
    content: '',
    author: '',
    template: '',
  };

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit(): void {}

  public createThought() {
    this.clientService.create(this.thought).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }

  public cancel() {
    this.router.navigate(['/home']);
  }
}
