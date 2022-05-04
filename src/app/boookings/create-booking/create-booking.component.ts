import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Place } from 'src/app/places/places.service';
import { BoookingsService } from '../boookings.service';
@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace: Place;

  constructor(
    private modalCtrl: ModalController,
    private bService: BoookingsService
  ) {}
  endTime: Date;
  startTime: Date;
  ngOnInit() {}
  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
  onBookPlace() {
    const booking = {
      ...this.selectedPlace,
      startTime: new Date(),
      endTime: new Date(),
    };
    this.bService.addBooking(this.selectedPlace);
    this.modalCtrl.dismiss({ message: 'BOOKED' }, 'sucessful');
  }
}
