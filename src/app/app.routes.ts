import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout-component/layout-component';
import { LoginComponent } from './login-component/login-component';
import { Not404Component } from './pages/not404-component/not404-component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    {
        path: 'pages',
        component: LayoutComponent,
        loadChildren: () =>
            import('./pages/pages.routes').then((x) => x.pagesRoutes),
    },
    { path: '**', component: Not404Component }
];
