import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';
@Component({
    selector: 'header-view',
    template: `
        <header class="container-fluid options col-md-12">
            <h3 class="col-md-2">Adamas</h3>
            <div class="col-md-10">
                <ul class="nav nav-tabs nav-justified col-md-10">
                  <li role="presentation"><a [routerLink]="['Home']">Home</a></li>
                  <li role="presentation"><a [routerLink]="['Staff']">Staff</a></li>
                  <li role="presentation"><a [routerLink]="['Recipients']">Recipients</a></li>
                  <li role="presentation"><a [routerLink]="['DayManager']">Day Manager</a></li>
                  <li role="presentation"><a [routerLink]="['Rosters']">Rosters</a></li>
                  <li role="presentation"><a [routerLink]="['Timesheets']">Timesheets</a></li>
                  <li role="presentation"><a [routerLink]="['Attendance']">Attendance</a></li>
                  <li role="presentation"><a [routerLink]="['Reports']">Reports</a></li>
                </ul>
            </div>
        </header>
    `,
    styles: [`
        .options{
            margin-top:3em;
        }

    `],
    directives: [RouterLink]
})

export class HeaderComponent {
    
}