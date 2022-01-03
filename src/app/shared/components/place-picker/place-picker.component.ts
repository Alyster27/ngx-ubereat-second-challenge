import { debounceTime, map, switchMap } from 'rxjs/operators';
import { environment } from './../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable, of, Subject } from 'rxjs';

export interface MapboxOutput {
  attribution: string;
  features: Feature[];
  query: [];
}
export interface Feature {
  place_name: string;
}

@Component({
  selector: 'app-place-picker',
  templateUrl: './place-picker.component.html',
  styleUrls: ['./place-picker.component.scss']
})
export class PlacePickerComponent implements OnInit {

  subject: Subject<string> = new Subject();
  results$: Observable<Feature[]>|undefined;
  selectedItem: any = null;

  constructor(
    private readonly _http: HttpClient,
    public modalCtrl: ModalController
  ) { }

  ngOnInit(): void {
    this.results$ = this.subject.pipe(
      debounceTime(500),
      switchMap(searchText => this.search_word(searchText))
    )
  }

  // Function to call when the value changes.
  public async valueChanged(input: any) {
    this.selectedItem = null;
    if (input?.value?.length <= 4) return this.subject.next('');
    this.subject.next(input?.value);
  }

  search_word(query: string) {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
    if (query?.length <= 6 || !query) return of([]);
    return this._http.get(url + query + '.json?types=address&access_token='+ environment.mbglToken)
    .pipe(
      map((res: any) => {
        return (res as MapboxOutput).features;
      })
    );
  }

  selectItem(value: any) {
    const {
      address: street_number = null,
      place_name,
      center: coords,
      text: street = null
    } = value;
    const {
      short_code = null,
      text: country = null
    } = value?.context.find((el: any) => el?.id.includes('country')) || {};
    const {text: region = null} = value?.context.find((el: any) => el?.id.includes('region')) || {};
    const {text: place = null} = value?.context.find((el: any) => el?.id.includes('place')) || {};
    const {text: postcode = null} = value?.context.find((el: any) => el?.id.includes('postcode')) || {};
    const data = {
      street_number,
      street,
      postcode,
      region,
      place,
      country,
      short_code,
      place_name,
      coords
    };
    console.log(data, value);
    this.selectedItem = data;
  }
}
