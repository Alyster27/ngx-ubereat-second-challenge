import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipesService {

  constructor(
    private readonly _http: HttpClient
  ) { }

  /* async getRecipes(id?: string): Promise<any> {
    return this._http
      .get<{data: any}>('../../assets/json-data/ubereats-recipes.json')
      .toPromise();      
  } */

  getRecipes(id?: any): Promise<any[]>{
    return this._http.get<any[]>('../../assets/json-data/ubereats-recipes.json').toPromise();
  }
}
