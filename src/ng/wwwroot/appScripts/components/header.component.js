"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'header-view',
            template: "\n        <header class=\"container-fluid options col-md-12\">\n            <h3 class=\"col-md-2\">Adamas</h3>\n            <div class=\"col-md-10\">\n                <ul class=\"nav nav-tabs nav-justified col-md-10\">\n                  <li role=\"presentation\"><a [routerLink]=\"['Home']\">Home</a></li>\n                  <li role=\"presentation\"><a [routerLink]=\"['Staff']\">Staff</a></li>\n                  <li role=\"presentation\"><a [routerLink]=\"['Recipients']\">Recipients</a></li>\n                  <li role=\"presentation\"><a [routerLink]=\"['DayManager']\">Day Manager</a></li>\n                  <li role=\"presentation\"><a [routerLink]=\"['Rosters']\">Rosters</a></li>\n                  <li role=\"presentation\"><a [routerLink]=\"['Timesheets']\">Timesheets</a></li>\n                  <li role=\"presentation\"><a [routerLink]=\"['Attendance']\">Attendance</a></li>\n                  <li role=\"presentation\"><a [routerLink]=\"['Reports']\">Reports</a></li>\n                </ul>\n            </div>\n        </header>\n    ",
            styles: ["\n        .options{\n            margin-top:3em;\n        }\n\n    "],
            directives: [router_1.RouterLink]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map