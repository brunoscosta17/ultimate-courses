import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';

// components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';

@NgModule({
    declarations: [
        // containers
        PassengerDashboardComponent,
        // components
        PassengerCountComponent,
        PassengerDetailComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        // containers
        PassengerDashboardComponent,
    ],
    providers: [],
})
export class PassengerDashboardModule { }