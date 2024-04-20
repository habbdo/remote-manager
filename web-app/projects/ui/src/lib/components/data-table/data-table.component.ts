import { AfterViewInit, Component, DestroyRef, EventEmitter, Output, ViewChild, computed, inject, input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'ui-data-table',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule
  ],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent implements AfterViewInit {
  detroyRef = inject(DestroyRef);
  columns = input.required<any[]>();
  displayedColumns = computed(() => this.columns().map(column => column.field));
  list = input.required<any>();
  @Output() add = new EventEmitter<void>();
  @Output() edit = new EventEmitter<any>();
  @Output() load = new EventEmitter<any>();
  searchCtrl = new FormControl();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.load.emit({
      pageIndex: this.paginator.pageIndex,
      pageSize: this.paginator.pageSize
    });

    this.paginator.page
      .pipe(takeUntilDestroyed(this.detroyRef))
      .subscribe(event => {
        this.load.emit({
          pageIndex: event.pageIndex,
          pageSize: event.pageSize,
          search: this.searchCtrl.value
        });
      });

    this.searchCtrl.valueChanges
      .pipe(
        debounceTime(300),
        takeUntilDestroyed(this.detroyRef)
      )
      .subscribe(value => {
        this.load.emit({
          pageIndex: this.paginator.pageIndex,
          pageSize: this.paginator.pageSize,
          search: value
        });
      });
  }
}
