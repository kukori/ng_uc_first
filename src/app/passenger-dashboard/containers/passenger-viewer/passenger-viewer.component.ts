import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PassengerDashboardService } from '../../services/passenger-dashboard.service';
import { Passenger } from '../../models/Passenger';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-passenger-viewer',
  template: `
    <div>
      <button (click)="goBack()" class="button" >&lsaquo; Go Back</button>
      <app-passenger-form [detail]="passenger" (update)="onUpdatePassenger($event)"></app-passenger-form>
    </div>
  `,
  styleUrls: ['./passenger-viewer.component.scss']
})
export class PassengerViewerComponent implements OnInit {
  passenger?: Passenger;

  constructor(private router: Router, private route: ActivatedRoute, private passengerService: PassengerDashboardService) { }

  ngOnInit(): void {
    // this.route.params.subscribe((data: Params) => console.log(data))
    this.route.params.pipe(switchMap((data: any) => this.passengerService.getPassenger(data.id)))
    .subscribe((data: Passenger) => this.passenger = data);
  }

  onUpdatePassenger(passenger: Passenger): void {
    this.passengerService.updatePassenger(passenger).subscribe((data: Passenger)=> {
      this.passenger = {...data}
    });
  }

  goBack(): void {
    this.router.navigate(['/passengers']);
  }
}
