import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()]
})
export class ChartsComponent implements OnInit {
    constructor(private translate: TranslateService) {
        this.translate.addLangs(['en', 'pt-br', 'es']);
        this.translate.setDefaultLang('pt-br');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|pt-br|es/) ? browserLang : 'pt-br');
    }

    ngOnInit() {}
    // bar chart
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartOptions2: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels: string[] = [
        '2016/2017',
    ];
    public barChartLabels2: string[] = [
        '2016/2017',
    ];
    public barChartType: string = 'bar';
    public barChartType2: string = 'bar';
    public barChartLegend: boolean = true;
    public barChartLegend2: boolean = true;

    public barChartData: any[] = [
        {data: [4.828], label: 'UNDER ARMOUR'},
        {data: [17.241], label: 'ADIDAS'},
        {data: [19.3], label: 'NIKE'},
    ];
    public barChartData2: any[] = [
        {data: [21.8], label: 'Under Armour'},
        {data: [15.6], label: 'ADIDAS'},
        {data: [7], label: 'NIKE'},
    ];

    // lineChart
    public lineChartData: Array<any> = [
        {data: [23, 24, 25, 26, 27, 28], label: 'UNDER ARMOUR'},
        {data: [75, 52, 51, 68, 67, 63], label: 'NIKE'},
    ];
    public lineChartData2: Array<any> = [
        {data: [9, 9.5, 7, 14, 11, 9], label: 'UNDER ARMOUR'},
        {data: [17, 15.5, 15, 19, 18.9, 14], label: 'ADIDAS'},
    ];
    public lineChartLabels: Array<any> = [
        'Ago 16', 'Set 16', 'Out 16', 'Nov 16', 'Dez 16', 'Jan 17'
    ];

    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartColors: Array<any> = [
        {
            // grey
            backgroundColor: 'rgba(100, 150, 218, 0.3)',
            borderColor: '#4caf50',
            pointBackgroundColor: '#00897b',
            pointBorderColor: '#03a9f4',
            pointHoverBackgroundColor: '#039be5',
            pointHoverBorderColor: '#eeff41'
        },
        {
            // dark grey
            backgroundColor: 'rgba(117, 190, 218, 0.1)',
            borderColor: '#fbc02d',
            pointBackgroundColor: '##212121',
            pointBorderColor: '#f4511e',
            pointHoverBackgroundColor: '#f4511e',
            pointHoverBorderColor: '#f4511e'
        }
    ];

    public lineChartColors2: Array<any> = [
        {
            // grey
            backgroundColor: 'rgba(100, 150, 218, 0.3)',
            borderColor: '#aa00ff',
            pointBackgroundColor: '#ffea00',
            pointBorderColor: '#aa00ff',
            pointHoverBackgroundColor: '#ff8a65',
            pointHoverBorderColor: '#aa00ff'
        },
        {
            // dark grey
            backgroundColor: 'rgba(117, 190, 218, 0.1)',
            borderColor: '#009688',
            pointBackgroundColor: '#c0ca33',
            pointBorderColor: '#3e2723',
            pointHoverBackgroundColor: '#009688',
            pointHoverBorderColor: '#ff8a65'
        }

    ];
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }



}
