import { Injectable } from '@angular/core';
import { Passenger } from '../models/Passenger';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PassengerDashboardService {
  private apiUrl = 'http://localhost:5000/passengers';

  constructor(private httpClient: HttpClient) {}

  getPassengers(): Observable<Passenger[]> {
    return this.httpClient.get<Passenger[]>(this.apiUrl);
  }

  getPassenger(id: number): Observable<Passenger> {
    const url = `${this.apiUrl}/${id}`
    return this.httpClient.get<Passenger>(url);
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    const url = `${this.apiUrl}/${passenger.id}`
    return this.httpClient.put<Passenger>(url, passenger, httpOptions);
  }

  deletePassenger(passenger: Passenger): Observable<Passenger> {
    const url = `${this.apiUrl}/${passenger.id}`
    return this.httpClient.delete<Passenger>(url);
  }
}
