import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../place.service';
import { Place } from './place';
import {  } from "../place-search/place-search.component";

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  places: Place[];
  selectedPlace : Place;
  searchPlace: string;

  constructor(private placeService: PlaceService) { }

  ngOnInit() { 
    this.getPlaces();
  }

  getPlaces(): void {
    this.placeService.getPlaces()
      .subscribe(places => this.places = places);
  }

  onSelectPlace(place: Place): void {
    this.selectedPlace = place;
  }

  onSearchPlace(searchPlace: string): void {
    this.searchPlace = searchPlace;
  }

}
