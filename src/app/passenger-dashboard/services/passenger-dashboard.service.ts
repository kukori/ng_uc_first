import { Injectable } from '@angular/core';
import { Passenger } from '../models/Passenger';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const PASSENGER_API: string = 'http://localhost:5000/passengers';

@Injectable({
  providedIn: 'root'
})
export class PassengerDashboardService {

  constructor(private httpClient: HttpClient) {}

  getPassengers(): Observable<Passenger[]> {
    return this.httpClient.get<Passenger[]>(PASSENGER_API);
  }
}
