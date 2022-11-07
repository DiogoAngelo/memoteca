import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/clientService';
import { Thoughts } from 'src/app/shared/thoughts.model';

@Component({
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.scss'],
})
export class ListThoughtsComponent implements OnInit {
  public thoughtsList: Thoughts[] = [];

  constructor(private clientService: ClientService) {}

  public ngOnInit(): void {
    this.clientService.list().subscribe((data) => {
      this.thoughtsList = data;
    });
  }
}
