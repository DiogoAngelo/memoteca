import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/clientService';
import { Thoughts } from 'src/app/shared/models/thoughts.model';

@Component({
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.scss'],
})
export class EditThoughtComponent implements OnInit {
  public editForm!: FormGroup;

  public thought!: Thoughts;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  public id = this.route.snapshot.params['id'];

  public ngOnInit(): void {
    this.clientService.getDataById(this.id).subscribe((data) => {
      this.thought = data;

      this.editForm = this.formBuilder.group({
        content: [this.thought.content, [Validators.required]],
        author: [
          this.thought.author,
          [Validators.required, Validators.minLength(3)],
        ],
        template: [this.thought.template, [Validators.required]],
        id: [this.thought.id],
      });
    });
  }

  public edit() {
    this.clientService.edit(this.editForm.value).subscribe(
      () => {
        this.router.navigate(['/home']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public cancel() {
    this.router.navigate(['/home']);
  }
}
