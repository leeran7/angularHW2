import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../places.service';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  private offers: Place[];
  constructor(private pService: PlacesService) {}

  ngOnInit() {
    this.offers = this.pService.getPlaces();
  }
}
