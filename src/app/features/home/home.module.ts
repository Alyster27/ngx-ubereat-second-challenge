import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IonicModule } from '@ionic/angular';
import { RestaurantsService } from './restaurants.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IonicModule,
    HttpClientModule
  ],
  providers: [
    RestaurantsService
  ],

})
export class HomeModule { }
