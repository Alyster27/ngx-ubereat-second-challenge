import { HttpClientModule } from '@angular/common/http';
import { RecipesService } from './recipes.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantPageComponent } from './components/restaurant-page/restaurant-page.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RestaurantPageComponent
  ],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    IonicModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    RecipesService
  ]
})
export class RestaurantModule { }
