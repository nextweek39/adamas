import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";

import {HomeComponent} from './components/home.component';
import {HeaderComponent} from './components/header.component';
import {StaffComponent} from './components/staff.component';
import {RecipientComponent} from './components/recipient.component';
import {DayManagerComponent} from './components/daymanager.component';
import {RosterComponent} from './components/rosters.component';
import {TimeSheetsComponent} from './components/timesheets.component';
import {AttendanceComponent} from './components/attendance.component';
import {ReportsComponent} from './components/reports.component';

@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/staff', name: 'Staff', component: StaffComponent },
    { path: '/recipients', name: 'Recipients', component: RecipientComponent },
    { path: '/daymanager', name: 'DayManager', component: DayManagerComponent },
    { path: '/rosters', name: 'Rosters', component: RosterComponent },
    { path: '/timesheets', name: 'Timesheets', component: TimeSheetsComponent },
    { path: '/attendance', name: 'Attendance', component: AttendanceComponent },
    { path: '/reports', name: 'Reports', component: ReportsComponent }    
])

@Component({
    selector: 'my-app',
    template: `
        <div class="container-fluid">
            <header-view></header-view>
        
            <main>
                hottt
                <router-outlet></router-outlet>
            </main>
        </div>
    `,
    directives: [
        HomeComponent,
        HeaderComponent,
        ROUTER_DIRECTIVES
    ]   
})
export class AppComponent { }