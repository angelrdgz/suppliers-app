import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from '../../api.service';
var ProductsNewComponent = /** @class */ (function () {
    function ProductsNewComponent(ApiService, route, router) {
        this.ApiService = ApiService;
        this.route = route;
        this.router = router;
        this.product = { name: '', price: 0.00, discount: 0.00, description: '', sku: '' };
    }
    ProductsNewComponent.prototype.ngOnInit = function () {
    };
    ProductsNewComponent.prototype.sendStore = function () {
        var _this = this;
        console.log(this.product);
        this.ApiService.storeProduct(this.product).subscribe(function (result) {
            _this.router.navigateByUrl('app/products');
        }, function (err) {
            console.log(err);
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ProductsNewComponent.prototype, "product", void 0);
    ProductsNewComponent = tslib_1.__decorate([
        Component({
            selector: 'app-products-new',
            templateUrl: './products-new.component.html',
            styleUrls: ['./products-new.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ApiService,
            ActivatedRoute,
            Router])
    ], ProductsNewComponent);
    return ProductsNewComponent;
}());
export { ProductsNewComponent };
//# sourceMappingURL=products-new.component.js.map