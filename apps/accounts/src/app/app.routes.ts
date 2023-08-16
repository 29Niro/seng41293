import { Route } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

export const appRoutes: Route[] = [
    {
        path: '',
        // component: LoginComponent,
        loadComponent: () => import('./pages/login/login.component').then(c => c.LoginComponent),
    },
    {
        path: 'admin',
        loadComponent: () => import('./pages/admin/admin.component').then(c => c.AdminComponent),
    }
];
