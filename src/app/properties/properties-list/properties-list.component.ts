import { Component, OnInit } from '@angular/core';

import { Propertie } from './../shared/models/propertie';
import { PropertiesService } from './../shared/services/properties.service';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.scss']
})
export class PropertiesListComponent implements OnInit {
  isLoading = false;
  foundProperties = 0;
  pageLimit = 0;
  page = 1;
  filter;
  properties: Propertie[];

  constructor(
    private propertiesService: PropertiesService
  ) {
  }

  ngOnInit() {
    this.loadProperties();
  }

  loadProperties() {
    this.isLoading = true;
    this.propertiesService.getProperties(this.filter, this.page)
      .subscribe(response => {
        this.properties = response.properties;
        this.foundProperties = response.foundProperties;
        this.pageLimit = Math.ceil(response.foundProperties / 20);
        this.isLoading = false;
      },
        err => {
          console.log(err);
        });
  }

  filterUpdated(filter) {
    this.filter = filter;
    this.loadProperties();
  }

  nextPage() {
    this.page++;
    this.loadProperties();
    window.scrollTo(0, 0);
  }

  previousPage() {
    this.page--;
    this.loadProperties();
    window.scrollTo(0, 0);

  }

}
