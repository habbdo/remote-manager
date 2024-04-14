import { Component } from '@angular/core';

import { DataTableComponent } from '@app/ui';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [DataTableComponent],
  template: `
    <ui-data-table />
  `,
  styles: ``
})
export class CustomersPage {

}
