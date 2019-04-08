import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppContentComponent } from './_layouts/app-content/app-content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsListComponent } from './products/products-list/products-list.component';


const routes: Routes = [
{
	path:  'app',
	component:  AppContentComponent,
	children: [
		{path: '', component:  DashboardComponent, pathMatch: 'full'},
		{path: 'dashboard', component:  DashboardComponent},
		{path: 'products', component:  ProductsListComponent},
	],
},
{ path: '**', redirectTo: '' }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
