import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    FilterComponent,
  ],
  declarations: [
    FilterComponent
  ]
})
export class SharedModule { }
