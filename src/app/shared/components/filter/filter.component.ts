import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Output() filterUpdated = new EventEmitter();
  filterObj = new Object();

  code = '';
  squareMeters = '';
  baths = '';
  beds = '';
  minPrice = '';
  maxPrice = '';

  constructor(
  ) { }

  ngOnInit() {
  }

  updateFilters() {
    this.filterObj['code'] = this.code ? this.code : null;
    this.filterObj['squareMeters'] = this.squareMeters ? this.squareMeters : null;
    this.filterObj['baths'] = this.baths ? this.baths : null;
    this.filterObj['beds'] = this.beds ? this.beds : null;
    this.filterObj['minPrice'] = this.minPrice ? this.minPrice : null;
    this.filterObj['maxPrice'] = this.maxPrice ? this.maxPrice : null;

    this.filterUpdated.emit(this.filterObj);

  }
}
