import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavigationComponent } from '@app/ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent],
  template: `
    <ui-navigation [nav]="nav">
      <router-outlet />
    </ui-navigation>
  `
})
export class AppComponent {
  nav = [
    { label: 'Accueil', path: 'dashbord' },
    { label: 'Clients', path: 'customers' },
    { label: 'Employés', path: 'employees' },
  ]
}
