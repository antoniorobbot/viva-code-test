import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'properties',
        pathMatch: 'full'
    },
    {
        path: 'properties',
        loadChildren: './properties/properties.module#PropertiesModule'
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
