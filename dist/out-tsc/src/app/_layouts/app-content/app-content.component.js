import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import * as feather from 'feather-icons';
var AppContentComponent = /** @class */ (function () {
    function AppContentComponent() {
    }
    AppContentComponent.prototype.ngOnInit = function () {
        feather.replace();
    };
    AppContentComponent = tslib_1.__decorate([
        Component({
            selector: 'app-content',
            templateUrl: './app-content.component.html',
            styleUrls: ['./app-content.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AppContentComponent);
    return AppContentComponent;
}());
export { AppContentComponent };
//# sourceMappingURL=app-content.component.js.map