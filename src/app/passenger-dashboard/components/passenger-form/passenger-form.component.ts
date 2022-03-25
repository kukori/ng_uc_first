import { Component, OnInit, Input } from '@angular/core';
import { Passenger } from '../../models/Passenger';
import { Baggage } from '../../models/Baggage';

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
        <!-- <label>
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
        </label> -->
        <label>
            Checked In:
            <input 
              type="checkbox" 
              name="checkedIn" 
              [ngModel]="detail?.checkedIn"
              (ngModelChange)="toggleCheckIn($event)"
            >
        </label>
      </div>
      <!-- <div>
        Luggage:
        <select name="baggage" [ngModel]="detail?.baggage">
          <option
            [value]="item.key"
            [selected]="item.key === detail?.baggage"
            *ngFor="let item of baggages">
              {{item.value}}
            </option>
        </select>
      </div> -->
      <div>
        Luggage:
        <select name="baggage" [ngModel]="detail?.baggage">
          <option
            [ngValue]="item.key"
            *ngFor="let item of baggages">
              {{item.value}}
            </option>
        </select>
      </div>
      <div *ngIf="form.value.checkedIn">
        <input type="number" name="checkInDate" [ngModel]="detail?.checkInDate" hidden >
      </div>

      {{ form.value | json }}
    </form>
  `,
  styleUrls: ['./passenger-form.component.scss']
})
export class PassengerFormComponent implements OnInit {

  @Input() detail?: Passenger;
  baggages: Baggage[] = [
    { key: 'none', value: 'No baggage' },
    { key: 'hand-only', value: 'Hand baggage' },
    { key: 'hold only', value: 'Hold baggage' },
    { key: 'both', value: 'Hand and hold baggage' },
  ];

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
