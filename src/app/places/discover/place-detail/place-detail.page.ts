import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
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
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.active.params.subscribe(
      (res) => (this.place = this.pService.getPlace(Number(res.id)))
    );
  }
  bookPlace() {
    this.navCtrl.navigateBack('/places/tabs/discover');
  }
}
