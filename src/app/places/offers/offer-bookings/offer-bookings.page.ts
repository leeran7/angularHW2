import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place, PlacesService } from '../../places.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {
  place: Place;
  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private pService: PlacesService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((map) => {
      if (!map.has('id')) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      const id = map.get('id');
      this.place = this.pService.getPlace(Number(id));
    });
  }
}
