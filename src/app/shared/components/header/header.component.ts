import { PlacePickerComponent } from './../place-picker/place-picker.component';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  deliveryAddress: string = 'Rue du Nant';

  constructor(
    private readonly _modalCtrl: ModalController
  ) { }

  ngOnInit(): void {
  }

  async changeAddress() {
    const ionModal = await this._modalCtrl.create({
      component: PlacePickerComponent
    });
    await ionModal.present();
    const { data = undefined } = await ionModal.onDidDismiss();
    if (!data) {
      return;
    }
    console.log(data);
    this.deliveryAddress = data.place_name;
  }

}
