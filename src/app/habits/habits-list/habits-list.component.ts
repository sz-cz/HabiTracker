import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { Habit } from '../models/habit';
import { HabitsService } from '../../habits.service';

@Component({
  selector: 'app-habits-list',
  templateUrl: './habits-list.component.html',
  styleUrls: ['./habits-list.component.less']
})
export class HabitsListComponent implements OnInit, AfterViewInit {

  @ViewChild("habitName") habitName : ElementRef;

  habits : Habit[] = [];
  today: Date = new Date();

  constructor(private habitsService : HabitsService, private renderer : Renderer2) {}

  ngOnInit() {
    this.habitsService.habitToPass$.subscribe(habit => {
      this.habits = this.habits.concat(habit)
    })
    this.habits.forEach((habit, index) => {
      // if (3 >= 2) {
      //   this.archive(index)
      // }
    })
    // this.pushNewHabit()
  }

  ngAfterViewInit() {
   


  }

  changeValue(day, habit) {
    if (habit.date > this.today) return;
    if (day.value.value === 6)  return ;
    // if (habit.value1 && habit.value2 && habit.value3 && habit.value4 && habit.value5) {
    //   day.value.value >= 5 ? day.value.value = 0 : day.value.value++;
    // } else if (habit.value2 && habit.value3 && habit.value4 && habit.value5) {
      if (!habit.value1 && !habit.value2 && !habit.value4 && !habit.value5) {
        day.value.value >= 3 ? day.value.value = 0 : day.value.value += 3;
      } else {
        day.value.value >= 5 ? day.value.value = 0 : day.value.value++;
      }
    }

    changeStatus(challenge) {
      challenge.status = !challenge.status;
    }
  
  delete(index) {
    this.habits.splice(index,1)
    this.habitsService.passHabits.splice(index,1)
  }
  archive(index) {
    this.habits[index].detailsShowed = false;
    this.habitsService.archiveHabit(this.habits[index])
    console.log(index)
    console.log(this.habits[index], this.habitsService.archiveHabits)
    this.delete(index);
  }

  showDetails(habit) {
    const habitName = this.habitName.nativeElement;
    habit.detailsShowed = !habit.detailsShowed;
    habit.detailsShowed == true ? this.renderer.setStyle(habitName, 'color', 'violet') : this.renderer.setStyle(habitName, 'color', 'black')
  }
}
