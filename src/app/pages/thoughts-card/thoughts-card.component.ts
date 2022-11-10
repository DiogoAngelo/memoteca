import { Component, Input } from '@angular/core';
import { ClientService } from 'src/app/services/clientService';
import { Thought } from 'src/app/shared/models/thought.model';

@Component({
  selector: 'app-thoughts-card',
  templateUrl: './thoughts-card.component.html',
  styleUrls: ['./thoughts-card.component.scss'],
})
export class ThoughtsCardComponent {
  constructor(private clientService: ClientService) {}

  @Input() public thought!: Thought;
  @Input() public favoriteList: Thought[] = [];

  public get cardsWidth(): string {
    if (this.thought.content?.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
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
      this.favoriteList.splice(this.favoriteList.indexOf(this.thought), 1);
    });
  }
}
