import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout-component/layout-component';
import { LoginComponent } from './login-component/login-component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    {
        path: 'pages',
        component: LayoutComponent,
        loadChildren: () =>
            import('./pages/pages.routes').then((x) => x.pagesRoutes),
    },
];
