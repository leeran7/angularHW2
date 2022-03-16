import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/boookings/create-booking/create-booking.component';
import { Place, PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  private place: Place;
  constructor(
    private active: ActivatedRoute,
    private pService: PlacesService,
    private navCtrl: NavController,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.active.paramMap.subscribe((res) => {
      if (!res.has('id')) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.pService.getPlace(Number(res.get('id')));
    });
  }
  bookPlace() {
    this.modalCtrl
      .create({
        component: CreateBookingComponent,
        componentProps: { selectedPlace: this.place },
      })
      .then((el) => {
        el.present();
        return el.onDidDismiss();
      })
      .then((res) => {
        if (res.role === 'confirm') {
          console.log('BOOKED');
        }
      });
    this.navCtrl.navigateBack('/places/tabs/discover');
  }
}
