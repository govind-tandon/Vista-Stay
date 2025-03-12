/* 
-ActivatedRoute: To retrieve reservation ID from the URL.
-Router → To navigate after form submission.

*/

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  standalone: false,
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css',
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({});

  // formbuilder to get injected into our reservationForm component.
  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      CheckInDate: ['', Validators.required],
      CheckOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', [Validators.required, Validators.minLength(2)]],
    });

    // extracts id from the url, activatedRoute.snapshot.paramMap.get('id').
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      let reservation = this.reservationService.getReservation(id);

      if (reservation) {
        // if id exists, fetches the reservation and fills the form (patchValue).
        //this allows users to edit existing entry instead of adding new one.
        this.reservationForm.patchValue(reservation);
      }
    }
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      let reservation: Reservation = this.reservationForm.value;
      let id = this.activatedRoute.snapshot.paramMap.get('id');

      // if we are having and id in our activatedRoute we are updating, if not then we are adding.
      if (id) {
        // update
        this.reservationService.updateReservation(id, reservation);
      } else {
        this.reservationService.addReservation(reservation);
      }
      this.reservationService.addReservation(reservation);
      this.router.navigate(['list']);
    }
  }
}
