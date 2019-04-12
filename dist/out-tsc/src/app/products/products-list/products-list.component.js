import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { MatDialog } from '@angular/material';
import { DeleteModalComponent } from '../../delete-modal/delete-modal.component';
var ProductsListComponent = /** @class */ (function () {
    function ProductsListComponent(ApiService, dialog) {
        this.ApiService = ApiService;
        this.dialog = dialog;
        this.products = [];
    }
    ProductsListComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductsListComponent.prototype.getProducts = function () {
        var _this = this;
        this.products = [];
        this.ApiService.getProducts().subscribe(function (data) {
            console.log(data);
            _this.products = data.data;
        });
    };
    ProductsListComponent.prototype.openDialog = function (id, name) {
        var _this = this;
        var dialogRef = this.dialog.open(DeleteModalComponent, {
            width: '250px',
            data: { name: name, id: id }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != undefined) {
                _this.deleteProduct(result);
            }
            console.log('The dialog was closed' + result);
        });
    };
    ProductsListComponent.prototype.deleteProduct = function (id) {
        var _this = this;
        this.ApiService.deleteProduct(id)
            .subscribe(function (res) {
            _this.getProducts();
        }, function (err) {
            console.log(err);
        });
    };
    ProductsListComponent = tslib_1.__decorate([
        Component({
            selector: 'app-products-list',
            templateUrl: './products-list.component.html',
            styleUrls: ['./products-list.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ApiService,
            MatDialog])
    ], ProductsListComponent);
    return ProductsListComponent;
}());
export { ProductsListComponent };
//# sourceMappingURL=products-list.component.js.map