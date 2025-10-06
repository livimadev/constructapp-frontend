import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SupplierComponent } from './pages/supplier/supplier';
import { CustomerComponent } from './pages/customer/customer';
import { ProjectComponent } from './pages/project-component/project-component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    SupplierComponent, 
    CustomerComponent,
    ProjectComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('constructapp-frontend');
}
