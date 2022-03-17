import { Component, OnInit, Input } from '@angular/core';
import { Passenger } from '../../models/Passenger';

@Component({
  selector: 'app-passenger-details',
  template: `
    <span [ngClass]="{'checked-in': item.checkedIn}" class="status"></span>
    {{item.fullname}}
    <div class="date">
      Check in date: {{ item.checkInDate ? (item.checkInDate | date: 'y.MMMM.d' | uppercase) : 'Passenger has not checked in' }}
    </div>
    <div>
      Children: {{ item.children?.length || 0 }}
    </div>
  `,
  styleUrls: ['./passenger-details.component.scss']
})
export class PassengerDetailsComponent implements OnInit {
  @Input() item!: Passenger;

  constructor() { }

  ngOnInit(): void {
  }

}
