import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IonicModule } from '@ionic/angular';
import { RestaurantsService } from './restaurants.service';
import { HttpClientModule } from '@angular/common/http';
import { RestoCardComponent } from './resto-card/resto-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HomePageComponent,
    RestoCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IonicModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    RestaurantsService
  ],

})
export class HomeModule { }
