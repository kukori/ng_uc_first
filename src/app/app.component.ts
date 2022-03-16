import { Component } from '@angular/core';

interface Child {
  name: string,
  age: number
}

interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
  checkInDate: number | null
  // checkInDate?: number  <-optional property
  children: Child[] | null
}



@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>{{title}}</h1>
      <input type="text" [ngModel]="name" (input)="handleChange($event)">
      <!-- <input type="text" [(ngModel)]="name"> -->
      <div *ngIf="name.length > 3">
        Searching for... {{name}}
      </div>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span [ngClass]="{'checked-in': passenger.checkedIn}" class="status"></span>
          {{i+1}}: {{passenger.fullname}}
          <p>{{ passenger | json }}</p>
          <div class="date">
            Check in date: {{ passenger.checkInDate ? (passenger.checkInDate | date: 'y.MMMM.d' | uppercase) : 'Passenger has not checked in' }}
          </div>
          <div>
            Children: {{ passenger.children?.length || 0 }}
          </div>
        </li>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span [class.checked-in]="passenger.checkedIn" class="status"></span>
          {{i+1}}: {{passenger.fullname}}
        </li>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span 
            class="status"
            [style.backgroundColor]="(passenger.checkedIn ? 'green' : 'red')"
          ></span>
          {{i+1}}: {{passenger.fullname}}
        </li>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span 
            class="status"
            [ngStyle]="{backgroundColor: passenger.checkedIn ? 'green' : 'red'}"
          ></span>
          {{i+1}}: {{passenger.fullname}}
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  name: string = '';

  passengers: Passenger[] = [
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

  constructor() {
    this.title = 'Ultimate Angular';
  }

  handleChange(event: any): void {
    this.name = event.target.value;
  }
}
