import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClientService } from 'src/app/services/clientService';
import { Thought } from 'src/app/shared/models/thought.model';

@Component({
  selector: 'app-thoughts-card',
  templateUrl: './thoughts-card.component.html',
  styleUrls: ['./thoughts-card.component.scss'],
})
export class ThoughtsCardComponent {
  constructor(private clientService: ClientService) {}

  @Output() public favoriteClick = new EventEmitter();
  @Input() public thought!: Thought;
  @Input() public favoriteList: Thought[] = [];

  public get cardsWidth(): string {
    if (this.thought.content?.length >= 256) {
      return 'quote-g';
    }
    return 'quote-p';
  }

  public get favoriteIcon() {
    if (this.thought.favorite === false) {
      return 'inativo';
    }
    return 'ativo';
  }

  public updateFavorite() {
    this.thought.favorite = !this.thought.favorite;
    this.clientService.edit(this.thought).subscribe(() => {
      this.favoriteClick.emit();
    });
  }
}
