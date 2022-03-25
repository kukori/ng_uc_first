import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Passenger } from '../../models/Passenger';
import { Baggage } from '../../models/Baggage';

@Component({
  selector: 'app-passenger-form',
  template: `
    <form (ngSubmit)="handleSubmit(form.value, form.valid)" #form="ngForm" novalidate>
      <div>{{ detail | json }}</div>
      <div>
        Passenger name:
        <input 
          type="text" 
          name="fullname"
          required=""
          #fullname="ngModel"
          [ngModel]="detail?.fullname"
        >
        <div *ngIf="fullname.errors?.['required'] && fullname.dirty" class="error">
          Passenger name is required
        </div>
        {{fullname.errors | json}}
      </div>
      <div>
        Passenger ID:
        <!-- using the template reference #id="ngModel" we are getting access of what ngModel is doing => errors... -->
        <input 
          type="number" 
          name="id"
          required
          min="0" 
          max="100"
          #id="ngModel"
          [ngModel]="detail?.id"
        >
        <div *ngIf="id.errors?.['required'] && id.dirty" class="error">
          Passenger id is required
        </div>
        <div *ngIf="id.errors?.['min'] && id.dirty" class="error">
          Passenger id can't be less than 0
        </div>
        {{id.errors | json}}
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
      <div>{{ form.value | json }}</div>
      <div>Invalid:{{ form.invalid | json }}</div>
      <div>Valid:{{ form.valid | json }}</div>

      <button type="submit" [disabled]="form.invalid">
        Update Passenger
      </button>
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
  @Output() update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  constructor() { }

  ngOnInit(): void {}

  toggleCheckIn(event: boolean): void {
    if(event && this.detail) {
      this.detail.checkInDate = Date.now();
    } else if (!event && this.detail) {
      this.detail.checkInDate = null;
    }
  }

  handleSubmit(passenger: Passenger, isValid: boolean | null): void {
    if(isValid) {
      this.update.emit(passenger);
    }
  }

}
