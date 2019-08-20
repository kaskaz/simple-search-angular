import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, of } from "rxjs";

import { PlaceService } from "../place.service";

@Component({
  selector: 'app-place-search',
  templateUrl: './place-search.component.html',
  styleUrls: ['./place-search.component.css']
})
export class PlaceSearchComponent implements OnInit {  

  searchText: string;

  @Output('search')
  searchEvent: EventEmitter<string> = new EventEmitter();

  constructor(private placeService: PlaceService) { }

  ngOnInit() {
  }

  onSearch(): void {
    this.searchEvent.emit(this.searchText);
  }

}
