import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Place } from '../places/place';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {

  @Input() places: Place[];

  @Output('place') 
  selectedPlaceEvent: EventEmitter<Place> = new EventEmitter<Place>();
  
  selectedPlace: Place;
  
  constructor() { }

  ngOnInit() {
  }

  onSelectPlace(place: Place): void {
    this.selectedPlace = place;
    this.selectedPlaceEvent.emit(place);
  }

}
