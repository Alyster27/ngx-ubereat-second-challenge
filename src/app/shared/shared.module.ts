import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './components/header/header.component';
import { PlacePickerComponent } from './components/place-picker/place-picker.component';


@NgModule({
  declarations: [
    HeaderComponent,
    PlacePickerComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
