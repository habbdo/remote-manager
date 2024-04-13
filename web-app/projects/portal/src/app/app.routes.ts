import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashbord', pathMatch: 'full'},
  { path: 'dashbord', loadComponent: () => import('./pages/dashbord.page').then(x => x.DashboardPage)},
  { path: 'customers', loadComponent: () => import('./pages/customers.page').then(x => x.CustomersPage)},
  { path: 'employees', loadComponent: () => import('./pages/employees.page').then(x => x.EmployeesPage)},
  { path: '**', redirectTo: 'dashbord' },
];
