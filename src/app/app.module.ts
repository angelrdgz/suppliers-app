import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { ChartistModule } from 'ng-chartist';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppNavComponent } from './_layouts/app-nav/app-nav.component';
import { AppContentComponent } from './_layouts/app-content/app-content.component';
import { AppFooterComponent } from './_layouts/app-footer/app-footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductsNewComponent } from './products/products-new/products-new.component';
import { ProductsEditComponent } from './products/products-edit/products-edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { ApiService } from './api.service';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { ProductPhotosComponent } from './products/product-photos/product-photos.component';
import { SalesListComponent } from './sales/sales-list/sales-list.component';
import { OrdersListComponent } from './orders/orders-list/orders-list.component';
import { SuppliersListComponent } from './suppliers/suppliers-list/suppliers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    AppContentComponent,
    AppFooterComponent,
    DashboardComponent,
    ProductsListComponent,
    ProductsNewComponent,
    ProductsEditComponent,
    HomeComponent,
    LoginComponent,
    DeleteModalComponent,
    ProductPhotosComponent,
    SalesListComponent,
    OrdersListComponent,
    SuppliersListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatCardModule,
    ChartistModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTabsModule,
    MatDialogModule,
    MatTooltipModule,
    FlexLayoutModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  entryComponents: [DeleteModalComponent]
})
export class AppModule { }
