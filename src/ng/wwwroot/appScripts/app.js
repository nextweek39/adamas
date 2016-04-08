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
var router_1 = require("angular2/router");
var home_component_1 = require('./components/home.component');
var header_component_1 = require('./components/header.component');
var staff_component_1 = require('./components/staff.component');
var recipient_component_1 = require('./components/recipient.component');
var daymanager_component_1 = require('./components/daymanager.component');
var rosters_component_1 = require('./components/rosters.component');
var timesheets_component_1 = require('./components/timesheets.component');
var attendance_component_1 = require('./components/attendance.component');
var reports_component_1 = require('./components/reports.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        router_1.RouteConfig([
            { path: '/', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
            { path: '/staff', name: 'Staff', component: staff_component_1.StaffComponent },
            { path: '/recipients', name: 'Recipients', component: recipient_component_1.RecipientComponent },
            { path: '/daymanager', name: 'DayManager', component: daymanager_component_1.DayManagerComponent },
            { path: '/rosters', name: 'Rosters', component: rosters_component_1.RosterComponent },
            { path: '/timesheets', name: 'Timesheets', component: timesheets_component_1.TimeSheetsComponent },
            { path: '/attendance', name: 'Attendance', component: attendance_component_1.AttendanceComponent },
            { path: '/reports', name: 'Reports', component: reports_component_1.ReportsComponent }
        ]),
        core_1.Component({
            selector: 'my-app',
            template: "\n        <div class=\"container-fluid\">\n            <header-view></header-view>\n        \n            <main>\n                hottt\n                <router-outlet></router-outlet>\n            </main>\n        </div>\n    ",
            directives: [
                home_component_1.HomeComponent,
                header_component_1.HeaderComponent,
                router_1.ROUTER_DIRECTIVES
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.js.map