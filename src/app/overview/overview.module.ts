import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { QuoteBoxComponent } from './quote-box/quote-box.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { TodayHabitsComponent } from './today-habits/today-habits.component';
import { MottoComponent } from './motto/motto.component';

@NgModule({
  declarations: [DashboardComponent, QuoteBoxComponent, InfoBoxComponent, TodayHabitsComponent, MottoComponent],
  exports: [DashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class OverviewModule { }
