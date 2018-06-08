import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import {PageHeaderModule, StatModule} from '../../shared';
import {ChartsComponent} from "../charts/charts.component";
import {ChartsRoutingModule} from "../charts/charts-routing.module";
import {ChartsModule as Ng2Charts} from "ng2-charts";

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        DashboardRoutingModule,
        StatModule,
        Ng2Charts, ChartsRoutingModule, PageHeaderModule
    ],
    declarations: [
        DashboardComponent,
        ChartsComponent
    ]
})
export class DashboardModule {}
