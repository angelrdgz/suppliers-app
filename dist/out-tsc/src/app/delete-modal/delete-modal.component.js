import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
var DeleteModalComponent = /** @class */ (function () {
    function DeleteModalComponent(dialog, dialogRef, data) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DeleteModalComponent.prototype.ngOnInit = function () {
    };
    DeleteModalComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DeleteModalComponent = tslib_1.__decorate([
        Component({
            selector: 'app-delete-modal',
            templateUrl: './delete-modal.component.html',
            styleUrls: ['./delete-modal.component.scss']
        }),
        tslib_1.__param(2, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [MatDialog,
            MatDialogRef, Object])
    ], DeleteModalComponent);
    return DeleteModalComponent;
}());
export { DeleteModalComponent };
//# sourceMappingURL=delete-modal.component.js.map