import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ToolbarComponent } from '@app/ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent],
  template: `
    <ui-toolbar color="primary">
      <h1>Portal</h1>
    </ui-toolbar>
    <router-outlet />
  `,
})
export class AppComponent {
  
}
