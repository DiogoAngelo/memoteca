import { Component, Input } from '@angular/core';
import { ClientService } from 'src/app/services/clientService';
import { Thoughts } from 'src/app/shared/models/thoughts.model';

@Component({
  selector: 'app-thoughts-card',
  templateUrl: './thoughts-card.component.html',
  styleUrls: ['./thoughts-card.component.scss'],
})
export class ThoughtsCardComponent {
  constructor(private clientService: ClientService) {}

  @Input() public thoughts!: Thoughts;

  public get cardsWidth(): string {
    if (this.thoughts.content?.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  public get favoriteIcon() {
    if (this.thoughts.favorite === false) {
      return 'inativo';
    }
    return 'ativo';
  }

  public toggleIcon() {
    this.thoughts.favorite = !this.thoughts.favorite;
    this.clientService.edit(this.thoughts).subscribe((data) => {});
  }
}
