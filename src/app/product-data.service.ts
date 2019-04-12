import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
	providedIn: 'root'
})
export class ProductDataService {

	lastId: number = 0;
	// Placeholder for todos
	products: Product[] = [];

	constructor() { }

	getProducts(): Product[] {
		return this.products;
	}
}
