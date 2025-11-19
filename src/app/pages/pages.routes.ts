import { Routes } from "@angular/router";
import { CustomerComponent } from "./customer-component/customer-component";
import { CustomerEditComponent } from "./customer-component/customer-edit-component/customer-edit-component";
import { SupplierComponent } from "./supplier-component/supplier-component";
import { DashboardComponent } from "./dashboard-component/dashboard-component";

export const pagesRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {
      path: 'customer',
      component: CustomerComponent,
      children: [
        { path: 'new', component: CustomerEditComponent },
        { path: 'edit/:id', component: CustomerEditComponent },
      ],
    },
    { path: 'supplier', component: SupplierComponent },
]