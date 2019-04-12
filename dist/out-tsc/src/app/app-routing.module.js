import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppContentComponent } from './_layouts/app-content/app-content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductsNewComponent } from './products/products-new/products-new.component';
import { ProductsEditComponent } from './products/products-edit/products-edit.component';
import { ProductPhotosComponent } from './products/product-photos/product-photos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SalesListComponent } from './sales/sales-list/sales-list.component';
import { OrdersListComponent } from './orders/orders-list/orders-list.component';
import { SuppliersListComponent } from './suppliers/suppliers-list/suppliers-list.component';
var routes = [
    {
        path: 'app',
        component: AppContentComponent,
        children: [
            { path: '', component: DashboardComponent, pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'products', component: ProductsListComponent },
            { path: 'products/new', component: ProductsNewComponent },
            { path: 'products/:id/edit', component: ProductsEditComponent },
            { path: 'products/:id/photos', component: ProductPhotosComponent },
            { path: 'sales', component: SalesListComponent },
            { path: 'suppliers', component: SuppliersListComponent },
            { path: 'orders', component: OrdersListComponent },
        ],
    },
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map