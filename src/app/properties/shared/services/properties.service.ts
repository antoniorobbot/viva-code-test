import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, retry } from 'rxjs/operators';

import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {
  endpoint = '/properties';

  constructor(
    private http: HttpClient,
  ) { }

  getProperties(filter, page): Observable<any> {
    const url = `${environment.api}${this.endpoint}`;
    let params = new HttpParams();

    params = params.append('page', page);
    if (filter) {
      if (filter.code) params = params.append('code', filter.code);
      if (filter.squareMeters) params = params.append('squareMeters', filter.squareMeters);
      if (filter.baths) params = params.append('baths', filter.baths);
      if (filter.beds) params = params.append('beds', filter.beds);
      if (filter.minprice) params = params.append('minprice', filter.minPrice);
      if (filter.maxPrice) params = params.append('maxprice', filter.maxPrice);
    }
    return this.http
      .get<any>(url, { observe: 'response', params: params }).pipe(
        map(response => {
          return response.body;
        }));
  }
}
