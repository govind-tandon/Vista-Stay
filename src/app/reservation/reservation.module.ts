import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationListComponent } from '../reservation-list/reservation-list.component';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [ReservationListComponent, ReservationFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    HomeModule,
  ],
})
export class ReservationModule {}
