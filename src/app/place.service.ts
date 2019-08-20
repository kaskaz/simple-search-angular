import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { delay } from 'rxjs/operators';
import { Place } from './places/place';
import { PLACES } from './mock-places';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  filteredPlaces: Place[];

  constructor() { }

  getPlaces(): Observable<Place[]> {
    return of(PLACES);
  }

  filterPlaces(filterTerm: string) {
    debugger;
    this.getPlaces().subscribe(places => {
      this.filteredPlaces = places.filter(place => {
        return place.name.includes(filterTerm);
      })
    })
  }

  getFilteredPlaces(): Observable<Place[]> {
    return of(this.filteredPlaces);
  }

}
