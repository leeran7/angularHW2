import { Injectable } from '@angular/core';
import { Booking } from './boookings.page';

@Injectable({
  providedIn: 'root',
})
export class BoookingsService {
  private bookings: Booking[] = [
    {
      id: 1,
      placeId: 1,
      placeTitle: 'Manhattan',
      guestNumber: 5,
      userId: 1,
    },
  ];
  constructor() {}
  getBookings() {
    return [...this.bookings];
  }
  addBooking(booking: any) {
    this.bookings.push(booking);
  }
  cancelBooking(bookingId: number) {
    this.bookings = this.bookings.filter((booking) => booking.id !== bookingId);
    return this.getBookings();
  }
}
