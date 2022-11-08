import { Component, Input } from '@angular/core';

@Component({
  selector: 'base-load-page-button',
  templateUrl: './load-page.component.html',
  styleUrls: ['./load-page.component.scss'],
})
export class LoadPageComponent {
  @Input() public hasMoreItems: boolean = false;
}
