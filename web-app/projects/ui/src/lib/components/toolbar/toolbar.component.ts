import { Component, Input } from '@angular/core';

import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'ui-toolbar',
  standalone: true,
  imports: [MatToolbar],
  template: `
    <mat-toolbar [color]="color">
      <ng-content></ng-content>
    </mat-toolbar>
  `
})
export class ToolbarComponent {
  @Input() color!: string;
}
