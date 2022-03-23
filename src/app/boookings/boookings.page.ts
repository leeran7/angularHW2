import { Component, OnInit } from '@angular/core';
import { BoookingsService } from './boookings.service';

@Component({
  selector: 'app-boookings',
  templateUrl: './boookings.page.html',
  styleUrls: ['./boookings.page.scss'],
})
export class BoookingsPage implements OnInit {
  bookings: Booking[];
  constructor(private bService: BoookingsService) {}

  ngOnInit() {
    this.bookings = this.bService.getBookings();
  }
}

export class Booking {
  constructor(
    public id: number,
    public placeId: number,
    public userId: number,
    public placeTitle: string,
    public guestNumber: number
  ) {}
}
