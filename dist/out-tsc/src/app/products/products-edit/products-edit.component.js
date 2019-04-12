import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from '../../api.service';
var ProductsEditComponent = /** @class */ (function () {
    function ProductsEditComponent(ApiService, route, router) {
        this.ApiService = ApiService;
        this.route = route;
        this.router = router;
        this.product = [];
    }
    ProductsEditComponent.prototype.ngOnInit = function () {
        this.getProduct(this.route.snapshot.paramMap.get("id"));
    };
    ProductsEditComponent.prototype.getProduct = function (id) {
        var _this = this;
        this.product = [];
        this.ApiService.getProduct(id).subscribe(function (data) {
            console.log(data);
            _this.product = data.data;
        });
    };
    ProductsEditComponent.prototype.sendUpdate = function () {
        var _this = this;
        console.log(this.product);
        this.ApiService.updateProduct(this.route.snapshot.paramMap.get("id"), this.product).subscribe(function (result) {
            _this.router.navigateByUrl('app/products');
        }, function (err) {
            console.log(err);
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ProductsEditComponent.prototype, "product", void 0);
    ProductsEditComponent = tslib_1.__decorate([
        Component({
            selector: 'app-products-edit',
            templateUrl: './products-edit.component.html',
            styleUrls: ['./products-edit.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ApiService,
            ActivatedRoute,
            Router])
    ], ProductsEditComponent);
    return ProductsEditComponent;
}());
export { ProductsEditComponent };
//# sourceMappingURL=products-edit.component.js.map