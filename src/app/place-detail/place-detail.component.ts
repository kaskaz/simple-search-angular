import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../places/place'

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css']
})
export class PlaceDetailComponent implements OnInit {

  @Input() place: Place;

  constructor() { }

  ngOnInit() {
  }

}
