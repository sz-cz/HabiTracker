import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabitsListComponent } from './habits-list/habits-list.component';
import { SharedModule } from '../shared/shared.module';
import { HabitDetailsComponent } from './habit-details/habit-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  exports: [HabitsListComponent],
  declarations: [HabitsListComponent, HabitDetailsComponent],

  imports: [
    CommonModule, SharedModule, RouterModule
  ]
})
export class HabitsModule { }
