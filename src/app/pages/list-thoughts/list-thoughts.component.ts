import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ClientService } from 'src/app/services/clientService';
import { Thought } from 'src/app/shared/models/thought.model';

@Component({
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.scss'],
})
export class ListThoughtsComponent implements OnInit {
  public thoughtsList: Thought[] = [];
  public currentPage: number = 1;
  public filter: string = '';
  public canShowFavoriteList: boolean = false;
  public form!: FormGroup;

  constructor(
    private clientService: ClientService,
    private formBuilder: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.loadItems();
    this.initForm();
    this.listenToSearch();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      filter: [],
    });
  }

  private listenToSearch(): void {
    this.form
      .get('filter')
      ?.valueChanges.pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((value) => this.clientService.list(this.currentPage, value))
      )
      .subscribe((data) => (this.thoughtsList = data));
  }

  public loadItems(): void {
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
      });
  }

  public listFavorite() {
    this.canShowFavoriteList = !this.canShowFavoriteList;
    this.loadItems();
  }
}
