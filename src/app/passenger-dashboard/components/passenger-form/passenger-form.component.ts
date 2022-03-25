import { Component, OnInit, Input } from '@angular/core';
import { Passenger } from '../../models/Passenger';

@Component({
  selector: 'app-passenger-form',
  template: `
    <form #form="ngForm" novalidate>
      {{ detail | json }}
      <div>
        Passenger name:
        <input type="text" name="fullname" [ngModel]="detail?.fullname">
      </div>
      <div>
        Passenger ID:
        <input type="number" name="id" [ngModel]="detail?.id">
      </div>
      <div>
        <label>
            <input type="radio" [value]="true" name="checkedIn" [ngModel]="detail?.checkedIn" (ngModelChange)="toggleCheckIn($event)">
            Yes
        </label>
        <label>
            <input 
              type="radio" 
              [value]="false" 
              name="checkedIn" 
              [ngModel]="detail?.checkedIn"
              (ngModelChange)="toggleCheckIn($event)"
            >
            No
        </label>
      </div>
      <div *ngIf="form.value.checkedIn">
        Check in date:
        <input type="number" name="checkInDate" [ngModel]="detail?.checkInDate" hidden >
      </div>

      {{ form.value | json }}
    </form>
  `,
  styleUrls: ['./passenger-form.component.scss']
})
export class PassengerFormComponent implements OnInit {
  @Input() detail?: Passenger;
  constructor() { }

  ngOnInit(): void {}
  toggleCheckIn(event: boolean): void {
    if(event && this.detail) {
      this.detail.checkInDate = Date.now();
    } else if (!event && this.detail) {
      this.detail.checkInDate = null;
    }
  }
}
