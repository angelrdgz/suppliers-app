import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { IconCamera, IconHeart, IconGithub } from 'angular-feather';
var icons = [
    IconCamera,
    IconHeart,
    IconGithub
];
var IconsModule = /** @class */ (function () {
    function IconsModule() {
    }
    IconsModule = tslib_1.__decorate([
        NgModule({
            exports: icons
        })
    ], IconsModule);
    return IconsModule;
}());
export { IconsModule };
//# sourceMappingURL=icons.module.js.map