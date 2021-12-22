import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  categories = [
    {name: 'Deals', fileName: 'ubereats-icon-deals.png'},
    {name: 'Top Eats', fileName: 'ubereats-icon-top_eats.png'},
    {name: 'Burgers', fileName: 'ubereats-icon-burger.png'},
    {name: 'Pizza', fileName: 'ubereats-icon-pizza.png'},
    {name: 'Sushi', fileName: 'ubereats-icon-sushi.png'},
    {name: 'Asian', fileName: 'ubereats-icon-asian.png'},
    {name: 'Fast Food', fileName: 'ubereats-icon-fastfood.png'},
    {name: 'Desserts', fileName: 'ubereats-icon-dessert.png'},
    {name: 'Healthy', fileName: 'ubereats-icon-healthy.png'},
    {name: 'Bubble Tea', fileName: 'ubereats-icon-bubbletea.png'},
    {name: 'Indian', fileName: 'ubereats-icon-indian.png'},
    {name: 'Italian', fileName: 'ubereats-icon-italian.png'},
  ];
  selectedCat!: string;
  public restaurants!: any[];
  

  constructor(
    private readonly _api: RestaurantsService
  ) { }

  ngOnInit(): void {
    this.restaurants = [];
    this._api.getRestaurantsJsonData()
    .then(result => {
      console.log('ALL Data: ', result);
      this.restaurants = result;
    })
    .catch(error => {
      console.log('Error Getting Data: ', error)
    })
  }

  /* async loadRestaurants() {
    this.restaurants = await this._api.getRestaurants();
  } */

}
