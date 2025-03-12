// component will show list, so we need to bind it

import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-reservation-list',
  standalone: false,
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css',
})
export class ReservationListComponent implements OnInit {
  //OnInit ifecycle hook

  // reservation-property of type reservation-array, in which initial value is empty
  reservations: Reservation[] = [];

  //create constructor to grab an instance of our service.
  constructor(private reservationService: ReservationService) {}

  //in thelifecycle hook on ngOnInit
  ngOnInit(): void {
    // Now Shows Data from Local Storage:
    // getReservations(): it return all reservation that we know about.
    this.reservations = this.reservationService.getReservations();
  }

  // Delete reservation functionality.
  // However, UI won't refresh automatically, unless ngOnInit is re-triggered
  deleteReservation(id: string) {
    this.reservationService.deleteReservation(id);
  }
}
