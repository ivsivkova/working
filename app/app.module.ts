import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing }        from './app.routing';

//Importing the Custom Modules: Product model, ProductName module
import { ProductsModule } from './products/products.module';
import { ProductNameModule } from './classificators/product-name/products-name.modul';
import { BrandModul } from './classificators/brand/brand.modul';
import { ProductTypeModule } from './classificators/product-type/product-type.modul';

// Importing custom build components

import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { ProfileComponent } from './profile/profile.component';


import { AppComponent }   from './app.component';
@NgModule({
  imports:      [ 
                  BrowserModule, 
                  routing,
                  ProductsModule,
                  ProductNameModule,
                  BrandModul,
                  ProductTypeModule 
                ],
  declarations: [ 
                  AppComponent, 
                  DashboardComponent, 
                  ReportsComponent,
                  ProfileComponent ,
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
