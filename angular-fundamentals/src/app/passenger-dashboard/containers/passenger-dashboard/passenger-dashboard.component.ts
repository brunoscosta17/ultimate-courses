import { Component, OnInit } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'app-passenger-dashboard',
    templateUrl: './passenger-dashboard.component.html',
    styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {

    passengers: Passenger[] = [];

    constructor() { }

    ngOnInit(): void {
        this.passengers = [
            {
                id: 1,
                fullname: 'Bruno',
                checkedIn: true,
                checkInDate: 1490742000000,
                children: null
            },
            {
                id: 2,
                fullname: 'Maria',
                checkedIn: false,
                checkInDate: 1491606000000,
                children: [
                    { name: 'Abraão', age: 36 },
                    { name: 'Joquebede', age: 34 }
                ]
            },
            {
                id: 3,
                fullname: 'Mariana',
                checkedIn: true,
                checkInDate: 1488412800000,
                children: [{ name: 'Isaque', age: 20 }]
            },
            {
                id: 4,
                fullname: 'Reginaldo',
                checkedIn: false,
                checkInDate: null,
                children: [{ name: 'Jacó', age: 10 }]
            },
            {
                id: 5,
                fullname: 'Fê',
                checkedIn: true,
                checkInDate: null,
                children: null
            },
        ];
    }

    handleEdit(event: Passenger) {
        this.passengers = this.passengers.map((passenger: Passenger) => {
            if (passenger.id === event.id) {
                passenger = Object.assign({}, passenger, event);
            }
            return passenger;
        });
    }

    handleRemove(event) {
        this.passengers = this.passengers.filter((passenger: Passenger) => {
            return passenger.id !== event.id;
        });
    }
}
