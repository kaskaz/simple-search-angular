import { Pipe, PipeTransform } from '@angular/core';
import { Place } from './places/place';

@Pipe({
  name: 'placeFilter'
})
export class PlaceSearchPipe implements PipeTransform {

  transform(value: Place[], term?: string): Place[] {
    return (term && term.length > 0) ?
      value.filter(place => this.match(place, term)) : value;
  }

  match(place: Place, term: string) {
    return place.name.toLowerCase().includes(term.toLowerCase()) 
      || place.location.toLowerCase().includes(term.toLowerCase());
  }

}
