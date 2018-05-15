import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';

import { ContentLoaderModule } from '@netbasal/content-loader';

import { PropertiesRoutingModule } from './properties-routing.module';

import { PropertiesListComponent } from './properties-list/properties-list.component';
import { PropertiesDetailsComponent } from './properties-details/properties-details.component';

import { PropertiesService } from './shared/services/properties.service';

@NgModule({
  imports: [
    CommonModule,
    PropertiesRoutingModule,
    SharedModule,
    ContentLoaderModule
  ],
  declarations: [
    PropertiesListComponent,
    PropertiesDetailsComponent
  ],
  providers: [
    PropertiesService
  ]

})
export class PropertiesModule { }
