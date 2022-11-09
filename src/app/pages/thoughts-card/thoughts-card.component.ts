import { Component, Input } from '@angular/core';
import { Thoughts } from 'src/app/shared/models/thoughts.model';

@Component({
  selector: 'app-thoughts-card',
  templateUrl: './thoughts-card.component.html',
  styleUrls: ['./thoughts-card.component.scss'],
})
export class ThoughtsCardComponent {
  constructor() {}

  @Input() public thoughts!: Thoughts;

  public get cardsWidth(): string {
    if (this.thoughts.content?.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }
}
