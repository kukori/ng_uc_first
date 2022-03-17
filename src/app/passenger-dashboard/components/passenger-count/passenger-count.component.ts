import { Component, OnInit, Input } from '@angular/core';
import { Passenger } from '../../models/Passenger';

@Component({
  selector: 'app-passenger-count',
  template: `
    <div>
      <h3>Airline Passengers</h3>
      <div>Total Checked In: {{ checkedInCount() }}/{{ items.length }}</div>
    </div>
  `,
  styleUrls: ['./passenger-count.component.scss']
})
export class PassengerCountComponent implements OnInit {
  @Input() items!: Passenger[];

  constructor() { }

  ngOnInit(): void {
  }

  checkedInCount(): number | void {
    if (!this.items) return;
    return this.items.filter((passenger: Passenger) => passenger.checkedIn).length
  }

}
