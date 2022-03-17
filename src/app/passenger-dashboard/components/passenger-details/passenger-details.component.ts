import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Passenger } from '../../models/Passenger';

@Component({
  selector: 'app-passenger-details',
  template: `
    <div class="name-status">
      <div [ngClass]="{'checked-in': item.checkedIn}" class="status"></div>
      <div *ngIf="editing">
        <input type="text" [value]="item.fullname" (input)="onNameChange(name.value)" #name>
      </div>
      <div *ngIf="!editing">
        {{item.fullname}}
      </div>
    </div>
    <div class="date">
      Check in date: {{ item.checkInDate ? (item.checkInDate | date: 'y.MMMM.d' | uppercase) : 'Passenger has not checked in' }}
    </div>
    <div>
      Children: {{ item.children?.length || 0 }}
    </div>
    <button (click)="toggleEdit()">{{ editing ? 'Done' : 'Edit' }}</button>
    <button (click)="onRemove()">Remove</button>
  `,
  styleUrls: ['./passenger-details.component.scss']
})
export class PassengerDetailsComponent implements OnInit {
  @Input() item!: Passenger;
  @Output() remove: EventEmitter<Passenger> = new EventEmitter();
  @Output() edit: EventEmitter<Passenger> = new EventEmitter();
  editing: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  toggleEdit(): void {
    if(this.editing) {
      this.edit.emit(this.item);
    }
    this.editing = !this.editing;
  }

  onNameChange(name: string): void {
    this.item.fullname = name;
  }
  onRemove(): void {
    this.remove.emit(this.item);
  }
}
