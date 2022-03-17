import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/Passenger';

@Component({
  selector: 'app-passenger-dashboard',
  template: `
    <div>
      <app-passenger-count [items]="passengers"></app-passenger-count>
      <app-passenger-details *ngFor="let passenger of passengers" [item]="passenger" ></app-passenger-details>
    </div>
  `,
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[] = [];

  constructor() {}

  ngOnInit(): void {
    this.passengers = [
      {
        id: 1,
        fullname: 'Steven',
        checkedIn: false,
        checkInDate: null,
        children: [{ name: 'Ted', age: 12 }, { name: 'Chloe', age: 10 }]
      },
      {
        id: 2,
        fullname: 'Jane',
        checkedIn: true,
        checkInDate: 1490742000000,
        children: null,
      },
    ]
  }

}


