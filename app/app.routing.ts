import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/index';
import { ProductsComponent } from './products/index';
import { ProductNameClassComponent } from './classificators/product-name/index';
import { BrandComponent } from './classificators/brand/index';
import { ProductTypeComponent } from './classificators/product-type/index';
import { ReportsComponent } from './reports/index';
import { ProfileComponent } from './profile/index';

const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'producut-name-classificator', component: ProductNameClassComponent },
    { path: 'brand-classificator', component: BrandComponent },
    { path: 'product-type-classificator', component: ProductTypeComponent },
    { path: 'reports', component: ReportsComponent },
    { path: 'profile', component: ProfileComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '/dashboard' }
];

export const routing = RouterModule.forRoot(appRoutes);
