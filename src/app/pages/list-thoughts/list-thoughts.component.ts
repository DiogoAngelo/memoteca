import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/clientService';
import { Thoughts } from 'src/app/shared/models/thoughts.model';

@Component({
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.scss'],
})
export class ListThoughtsComponent implements OnInit {
  public thoughtsList: Thoughts[] = [];
  public currentPage: number = 1;
  public hasMoreItems: boolean = true;
  public filter: string = '';

  constructor(private clientService: ClientService) {}

  public ngOnInit(): void {
    this.clientService.list(this.currentPage, this.filter).subscribe((data) => {
      this.thoughtsList = data;
    });
  }

  public loadMoreItems() {
    this.clientService
      .list(++this.currentPage, this.filter)
      .subscribe((data) => {
        this.thoughtsList.push(...data);
        if (!data.length) {
          this.hasMoreItems = false;
        }
      });
  }

  public search() {
    this.currentPage = 1;
    this.hasMoreItems = true;
    this.clientService.list(this.currentPage, this.filter).subscribe((data) => {
      this.thoughtsList = data;
    });
  }
}
