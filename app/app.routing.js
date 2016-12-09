"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./dashboard/index');
var index_2 = require('./products/index');
var index_3 = require('./classificators/product-name/index');
var index_4 = require('./classificators/brand/index');
var index_5 = require('./classificators/product-type/index');
var index_6 = require('./reports/index');
var index_7 = require('./profile/index');
var appRoutes = [
    { path: 'dashboard', component: index_1.DashboardComponent },
    { path: 'products', component: index_2.ProductsComponent },
    { path: 'producut-name-classificator', component: index_3.ProductNameClassComponent },
    { path: 'brand-classificator', component: index_4.BrandComponent },
    { path: 'product-type-classificator', component: index_5.ProductTypeComponent },
    { path: 'reports', component: index_6.ReportsComponent },
    { path: 'profile', component: index_7.ProfileComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '/dashboard' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map