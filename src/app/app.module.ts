import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { ChartistModule } from 'ng-chartist';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

import { AppNavComponent } from './_layouts/app-nav/app-nav.component';
import { AppContentComponent } from './_layouts/app-content/app-content.component';
import { AppFooterComponent } from './_layouts/app-footer/app-footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsListComponent } from './products/products-list/products-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    AppContentComponent,
    AppFooterComponent,
    DashboardComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatCardModule,
    ChartistModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
