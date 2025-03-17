// in phase 2 of video constructor now loads reservations from localStorage when the service is initialized.

import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private reservations: Reservation[] = []; //An array to store reservations.

  // constructor is getting loaded before ngOnInit()
  // part 3: remove this in order to bring data from api
  // constructor() {
  //   // localStorage.getItem('reservations') retrieves stored reservations
  //   let savedReservation = localStorage.getItem('reservations');
  //   this.reservations = savedReservation ? JSON.parse(savedReservation) : [];
  // }

  // CRUD
  // this is for getting all the reservations

  // CRUD

  getReservations(): Reservation[] {
    //getReservations(): return all reservations.
    //this means we return a value of type Reservation
    return this.reservations;
  }

  // here we find reservation by id.
  // find will try find reservation by id.
  getReservation(id: string): Reservation | undefined {
    //Finds a reservation by id
    // here we search for id, in arrow function matching with parameter id
    return this.reservations.find((res) => res.id === id);
  }

  addReservation(reservation: Reservation): void {
    //Date.now().toString() : assigns a unique ID using the current timestamp.
    reservation.id = Date.now().toString();
    //adds a new reservation
    this.reservations.push(reservation);
    // localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  deleteReservation(id: string): void {
    //delete a reservation by id.
    let index = this.reservations.findIndex((res) => res.id === id);
    this.reservations.splice(index, 1); //so we get the index of reservation we want to delete.
    // localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  updateReservation(id: string, updatedReservation: Reservation): void {
    //update an existing reservation.
    let index = this.reservations.findIndex(
      (res) => res.id === updatedReservation.id
    );
    this.reservations[index] = updatedReservation;
    // localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }
}
