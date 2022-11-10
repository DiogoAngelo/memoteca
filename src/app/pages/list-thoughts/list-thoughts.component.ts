import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/clientService';
import { Thought } from 'src/app/shared/models/thought.model';

@Component({
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.scss'],
})
export class ListThoughtsComponent implements OnInit {
  public thoughtsList: Thought[] = [];
  public currentPage: number = 1;
  public hasMoreItems: boolean = true;
  public filter: string = '';
  public canShowFavoriteList: boolean = false;

  constructor(private clientService: ClientService) {}

  public ngOnInit(): void {
    this.clientService
      .list(this.currentPage, this.filter, this.canShowFavoriteList)
      .subscribe((data) => {
        this.thoughtsList = data;
      });
  }

  public loadMoreItems() {
    this.clientService
      .list(++this.currentPage, this.filter, this.canShowFavoriteList)
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

  public listFavorite() {
    this.canShowFavoriteList = !this.canShowFavoriteList;
    this.clientService
      .list(this.currentPage, this.filter, this.canShowFavoriteList)
      .subscribe((data) => {
        this.thoughtsList = data;
      });
  }
}
