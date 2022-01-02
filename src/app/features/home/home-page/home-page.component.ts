import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  form = new FormGroup({
    sortBy: new FormControl('picked'),
    maxFee: new FormControl('4'),
  })

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
    });


    this.form.valueChanges.subscribe(
      (value) => {
        const { sortBy, maxFee } = value;
        console.log(true);
        switch (true) {
          case sortBy === 'picked':
            this.getRestaurantsJsonData();
            break;
          case sortBy === 'popular':
            this.sortByRanking();
            break;
          case sortBy === 'rating':
            this.sortByRating();
            break;
          default:
            break;
        }
      }
    )
  }

  async getRestaurantsJsonData() {}

  async sortByRanking() {
    if (!this.restaurants) {
      return;
    }
    this.restaurants = this.restaurants.sort(
      (a, b) => b.rankingPosition - a.rankingPosition
    );
  }

  async sortByRating() {
    if (!this.restaurants) {
      return;
    }
    this.restaurants = this.restaurants.sort(
      (a, b) => b.rating - a.rating
    );
  }

  /* async loadRestaurants() {
    this.restaurants = await this._api.getRestaurants();
  } */

}
