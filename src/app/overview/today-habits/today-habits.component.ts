import { Component, OnInit } from '@angular/core';
import { Habit } from 'src/app/habits/models/habit';
import { HabitsService } from 'src/app/habits.service';

@Component({
  selector: 'app-today-habits',
  templateUrl: './today-habits.component.html',
  styleUrls: ['./today-habits.component.less']
})
export class TodayHabitsComponent implements OnInit {

  habits : Habit[] = [];
  today: Date = new Date();

  constructor(private habitsService : HabitsService) { }

  ngOnInit() {
    this.habitsService.habitToPass$.subscribe(habit => {
      this.habits = this.habits.concat(habit)
    })
  }

  changeValue(day, habit) {
    if (day.value.value === 6)  return ;
      if (!habit.value1 && !habit.value2 && !habit.value4 && !habit.value5) {
        day.value.value >= 3 ? day.value.value = 0 : day.value.value += 3;
      } else {
        day.value.value >= 5 ? day.value.value = 0 : day.value.value++;
      }
    }
}
