import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.scss']
})
export class RestaurantPageComponent implements OnInit {

  restaurant!: any;
  currentCat!: any;
  data!: any;

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _api: RecipesService
  ) { }

  async ngOnInit(): Promise<void> {
    const {id = undefined} = this._route.snapshot.params;
    this.restaurant = await this._api.getRecipes(id);

    this.restaurant = [];
    this._api.getRecipes()
    .then(result => {
      console.log('ALL Data: ', result);
      this.restaurant = result;
    })
    .catch(error => {
      console.log('Error Getting Data: ', error)
    });
  }

  selectCategory(index: number) {}

}
