import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { DataTableComponent } from '@app/ui';
import { ListDataProvider } from '@app/providers/list.data-provider';
import { FakeCustomerListDataProvider } from '@app/providers/fake-customer-list.data.provider';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [AsyncPipe, DataTableComponent],
  providers: [
    { provide: ListDataProvider, useClass: FakeCustomerListDataProvider}
  ],
  template: `
    <ui-data-table
      [columns]="listDataProvider.columns"
      [list]="listDataProvider.list()"
      (load)="listDataProvider.load($event)"
    />
  `
})
export class CustomersPage {
  listDataProvider = inject(ListDataProvider);
}
