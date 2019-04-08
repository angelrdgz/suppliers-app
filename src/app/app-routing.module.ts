import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppContentComponent } from './_layouts/app-content/app-content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductsNewComponent } from './products/products-new/products-new.component';
import { ProductsEditComponent } from './products/products-edit/products-edit.component';


const routes: Routes = [
{
	path:  'app',
	component:  AppContentComponent,
	children: [
		{path: '', component:  DashboardComponent, pathMatch: 'full'},
		{path: 'dashboard', component:  DashboardComponent},
		{path: 'products', component:  ProductsListComponent},
		{path: 'products/new', component:  ProductsNewComponent},
		{path: 'products/:id/edit', component:  ProductsEditComponent},
	],
},
{ path: '**', redirectTo: '' }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
