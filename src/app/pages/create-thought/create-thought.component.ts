import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/clientService';
import { Thoughts } from 'src/app/shared/models/thoughts.model';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.scss'],
})
export class CreateThoughtComponent implements OnInit {
  public form!: FormGroup;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      content: [
        '',
        [Validators.required, Validators.pattern(/(.|\s)*\S(.|\s)*/)],
      ],
      author: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ],
      ],
      template: ['', Validators.required],
    });
  }

  public createThought() {
    if (this.form.valid) {
      this.clientService.create(this.form.value).subscribe(() => {
        this.router.navigate(['/home']);
      });
    }
  }

  public cancel() {
    this.router.navigate(['/home']);
  }
}
