export class Product {
	id: number;
	name: string = '';
	price: number = 0.00;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
