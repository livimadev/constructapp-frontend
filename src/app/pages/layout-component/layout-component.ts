import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../material/material-module';

@Component({
  selector: 'app-layout',
  imports: [
    MaterialModule,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './layout-component.html',
  styleUrl: './layout-component.css',
})
export class LayoutComponent {}
