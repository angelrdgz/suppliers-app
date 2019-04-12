import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.type = 'Line';
        this.data = {
            labels: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            series: [
                [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
                [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
            ]
        };
        this.options = {
            axisX: {
                showGrid: false
            },
            height: 300,
            showArea: true
        };
        this.events = {
            draw: function (data) {
                if (data.type === 'bar') {
                    data.element.animate({
                        y2: {
                            dur: '0.5s',
                            from: data.y1,
                            to: data.y2,
                            easing: 'easeOutQuad'
                        }
                    });
                }
            }
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib_1.__decorate([
        Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map