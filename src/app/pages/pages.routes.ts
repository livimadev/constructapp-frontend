import { Routes } from "@angular/router";
import { CustomerComponent } from "./customer-component/customer-component";
import { CustomerEditComponent } from "./customer-component/customer-edit-component/customer-edit-component";
import { SupplierComponent } from "./supplier-component/supplier-component";
import { DashboardComponent } from "./dashboard-component/dashboard-component";
import { certGuard } from "../guard/cert.guard";

export const pagesRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent, canActivate: [certGuard]},
  {
      path: 'customer',
      component: CustomerComponent,
      children: [
        { path: 'new', component: CustomerEditComponent },
        { path: 'edit/:id', component: CustomerEditComponent },
      ], canActivate: [certGuard]
    },
    { path: 'supplier', component: SupplierComponent, canActivate: [certGuard] },
]