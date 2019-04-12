import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var ProductDataService = /** @class */ (function () {
    function ProductDataService() {
        this.lastId = 0;
        // Placeholder for todos
        this.products = [];
    }
    ProductDataService.prototype.getProducts = function () {
        return this.products;
    };
    ProductDataService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ProductDataService);
    return ProductDataService;
}());
export { ProductDataService };
//# sourceMappingURL=product-data.service.js.map