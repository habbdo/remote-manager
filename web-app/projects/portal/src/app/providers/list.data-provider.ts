import { signal } from '@angular/core';

export abstract class ListDataProvider {
  abstract columns: any[];
  list = signal<{data: any[], length: number}>({ data: [], length: 0 });
  abstract load(spec: any): void;
}
