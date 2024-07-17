import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/clientService';
import { Thought } from 'src/app/shared/models/thought.model';

@Component({
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.scss'],
})
export class EditThoughtComponent implements OnInit {
  public form!: FormGroup;
  public id = this.route.snapshot.params['id'] ?? undefined;
  public thought!: Thought;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.initForm();
    if (this.id) {
      this.initFormEdit();
    }
  }

  public save() {
    if (this.thought?.id) {
      this.clientService.edit(this.form.value).subscribe(
        () => {
          this.router.navigate(['/home']);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      if (this.form.valid) {
        this.clientService.create(this.form.value).subscribe(() => {
          this.router.navigate(['/home']);
        });
      }
    }
  }

  public cancel() {
    this.router.navigate(['/home']);
  }

  private initForm(): void {
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
      template: ['template2', Validators.required],
      id: [],
      favorite: [false],
    });
  }

  private initFormEdit(): void {
    this.clientService.getDataById(this.id).subscribe((data) => {
      this.thought = data;

      this.form?.patchValue({
        content: this.thought.content,
        author: this.thought.author,
        template: this.thought.template,
        id: this.thought.id,
        favorite: this.thought.favorite,
      });
    });
  }
}
