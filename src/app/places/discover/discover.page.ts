import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../places.service';
@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  private places: Place[];
  constructor(private pService: PlacesService) {}

  ngOnInit() {
    this.places = this.pService.getPlaces();
    console.log(this.places);
  }
}
