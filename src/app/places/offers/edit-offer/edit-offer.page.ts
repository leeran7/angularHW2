import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Place, PlacesService } from '../../places.service';
@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
  place: Place;
  form: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private pService: PlacesService,
    private navCtrl: NavController
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('id')) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      this.place = this.pService.getPlace(Number(paramMap.get('id')));
      this.form = new FormGroup({
        title: new FormControl(this.place.title, {
          updateOn: 'blur',
          validators: [Validators.required],
        }),
        description: new FormControl(this.place.description, {
          updateOn: 'blur',
          validators: [Validators.required, Validators.maxLength(180)],
        }),
      });
    });
  }
  onUpdateOffer() {
    if (!this.form.valid) {
      return;
    }
    console.log(this.form);
    // this.pService.updatePlace(this.place.id, this.form.value.title, this.form.value.description);
    // this.navCtrl.navigateBack('/places/tabs/offers');
  }
}
