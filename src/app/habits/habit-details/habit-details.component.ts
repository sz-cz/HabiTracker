import { Component, OnInit } from '@angular/core';
import { HabitsService } from 'src/app/habits.service';
import { ActivatedRoute } from '@angular/router';
import { Habit } from '../models/habit';

@Component({
  selector: 'app-habit-details',
  templateUrl: './habit-details.component.html',
  styleUrls: ['./habit-details.component.less']
})
export class HabitDetailsComponent implements OnInit {

  constructor(private habitsService : HabitsService, private route : ActivatedRoute) { }

  habit : Habit;

  ngOnInit() {
    this.loadHabit();
  }

  loadHabit() {
    const id = +this.route.snapshot.params['id'];
    this.habit = this.habitsService.getHabit(id);
  }
  consolog(item) {
    console.log(item)
  }
}
