import { Routes } from '@angular/router';
import { CustomerComponent } from './pages/customer-component/customer-component';
import { SupplierComponent } from './pages/supplier-component/supplier-component';
import { ProjectComponent } from './pages/project-component/project-component';

export const routes: Routes = [
    { path: 'pages/customer', component: CustomerComponent},
    { path: 'pages/supplier', component: SupplierComponent},
    { path: 'pages/project', component: ProjectComponent}
];
