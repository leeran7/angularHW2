import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
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
  onCancelBooking(offerId: number, slidingEl: IonItemSliding) {
    slidingEl.close();
    this.bookings = this.bService.cancelBooking(offerId);
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
