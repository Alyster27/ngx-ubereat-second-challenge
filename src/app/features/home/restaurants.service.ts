import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class RestaurantsService {

  constructor(
    private readonly _http: HttpClient
  ) { }

  async getRestaurants(): Promise<any> {
    return this._http
      .get<{results: {data: any[]}}>('./assets/json-data/ubereats-restaurants.json')
      .pipe(
        map((res) => res.results.data),
        tap(res => console.log(res))
      )
      .toPromise();
  }
}
