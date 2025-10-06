import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './pages/layout-component/layout-component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, LayoutComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('constructapp-frontend');
}
