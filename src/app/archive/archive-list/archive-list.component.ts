import { Component, OnInit, OnDestroy } from '@angular/core';
import { Habit } from 'src/app/habits/models/habit';
import { HabitsService } from 'src/app/habits.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-archive-list',
  templateUrl: './archive-list.component.html',
  styleUrls: ['./archive-list.component.less']
})
export class ArchiveListComponent implements OnInit, OnDestroy {

  archive : Habit[] = [];
  habitSubscription : Subscription;

  constructor(private habitsService : HabitsService) { }

  ngOnInit() {
    this.habitSubscription = this.habitsService.habitToArchive$.subscribe(habits => this.archive = this.archive.concat(habits));
  }
  ngOnDestroy() {
    if (this.habitSubscription) {
      this.habitSubscription.unsubscribe();
    }
  }

  showDetails(habit) {
    habit.detailsShowed = !habit.detailsShowed;
    console.log(habit.detailsShowed)
  }

}
