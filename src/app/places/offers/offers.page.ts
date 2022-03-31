import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { PlacesService } from '../places.service';
import { Place } from '../places.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  private offers: Place[];
  constructor(private pService: PlacesService, private router: Router) {}

  ngOnInit() {
    this.offers = this.pService.getPlaces();
  }
  onEdit(id: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigate(['/', 'places', 'tabs', 'offers', 'edit', id]);
  }
}
