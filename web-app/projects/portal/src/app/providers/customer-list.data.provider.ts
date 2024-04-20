import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { ListDataProvider } from "./list.data-provider";

@Injectable()
export class CustomerListDataProvider extends ListDataProvider {
  http = inject(HttpClient);

  override columns = [
    { field: 'id', label: '#' },
    { field: 'firstname', label: 'Nom' },
    { field: 'lastname', label: 'Prénom' }
  ];

  override load(spec: { pageIndex: number, pageSize: number, search?: string }): void {
    this.http.get('http://localhost:8000/customers').subscribe((list: any) => {
      this.list.set({
        data: list.data,
        length: list.length
      });
    });
  }
}
