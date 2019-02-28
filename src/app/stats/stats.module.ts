import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics/statistics.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  exports: [StatisticsComponent],
  declarations: [StatisticsComponent],

  imports: [
    CommonModule,
    SharedModule
  ]
})
export class StatsModule { }
