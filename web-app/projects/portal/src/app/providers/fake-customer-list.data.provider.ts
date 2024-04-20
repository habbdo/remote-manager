import { Injectable } from "@angular/core";
import { ListDataProvider } from "./list.data-provider";

const CUSTOMERS = [
  { id: 1, name: 'John Doe', email: '', phone: '' },
  { id: 2, name: 'Jane Doe', email: '', phone: '' },
  { id: 3, name: 'Joe Bloggs', email: '', phone: '' },
  { id: 4, name: 'Jane Bloggs', email: '', phone: '' },
  { id: 5, name: 'John Smith', email: '', phone: '' },
  { id: 6, name: 'Jane Smith', email: '', phone: '' },
  { id: 7, name: 'Joe Smith', email: '', phone: '' },
  { id: 8, name: 'John Doe', email: '', phone: '' },
  { id: 9, name: 'Jane Doe', email: '', phone: '' },
  { id: 10, name: 'Joe Bloggs', email: '', phone: '' },
  { id: 11, name: 'Jane Bloggs', email: '', phone: '' },
  { id: 12, name: 'John Smith', email: '', phone: '' },
  { id: 13, name: 'Jane Smith', email: '', phone: '' },
  { id: 14, name: 'Joe Smith', email: '', phone: '' },
  { id: 15, name: 'John Doe', email: '', phone: '' },
  { id: 16, name: 'Jane Doe', email: '', phone: '' },
  { id: 17, name: 'Joe Bloggs', email: '', phone: '' },
  { id: 18, name: 'Jane Bloggs', email: '', phone: '' },
  { id: 19, name: 'John Smith', email: '', phone: '' },
  { id: 20, name: 'Jane Smith', email: '', phone: '' },
  { id: 21, name: 'Joe Smith', email: '', phone: '' },
  { id: 22, name: 'John Doe', email: '', phone: '' },
  { id: 23, name: 'Jane Doe', email: '', phone: '' },
  { id: 24, name: 'Joe Bloggs', email: '', phone: '' },
  { id: 25, name: 'Jane Bloggs', email: '', phone: '' },
  { id: 26, name: 'John Smith', email: '', phone: '' },
  { id: 27, name: 'Jane Smith', email: '', phone: '' },
  { id: 28, name: 'Joe Smith', email: '', phone: '' },
  { id: 29, name: 'John Doe', email: '', phone: '' },
  { id: 30, name: 'Jane Doe', email: '', phone: '' },
  { id: 31, name: 'Joe Bloggs', email: '', phone: '' }
];

@Injectable()
export class FakeCustomerListDataProvider extends ListDataProvider {
  override columns = [
    { field: 'name', label: 'Name' },
    { field: 'email', label: 'Email' },
    { field: 'phone', label: 'Phone' }
  ];

  override load(spec: { pageIndex: number, pageSize: number, search?: string }): void {
    this.list.set({
      data: CUSTOMERS.slice(spec.pageIndex * spec.pageSize, (spec.pageIndex + 1) * spec.pageSize),
      length: CUSTOMERS.length
    });
  }
}
