import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { HabitsService } from 'src/app/habits.service';
import { Habit } from 'src/app/habits/models/habit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {

  
  d = new Date();
  habitForm : FormGroup;
  habits : Habit[] = [
    {
      id: +"",
      nameStart: "",
      nameEnd: "",
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      description: "",
      date: new Date(),
      detailsShowed: false,
      challenges: [],
      days: {
        day01: {
          date: new Date(),
          value: 7,
          log: "",
      },
        day02: {
          date: new Date(),
          value: 7,
          log: "",
      },
        day03: {
          date: new Date(),
          value: 7,
          log: "",
      },
        day04: {
          date: new Date(),
          value: 7,
          log: "",
      },
        day05: {
          date: new Date(),
          value: 7,
          log: "",
      },
        day06: {
          date: new Date(),
          value: 7,
          log: "",
      },
        day07: {
          date: new Date(),
          value: 7,
          log: "",
      },
        day08: {
          date:  new Date(),
          value: 7,
          log: "",
      },
        day09: {
          date: new Date(),
          value: 7,
          log: "",
      },
        day10: {
          date: new Date(),
          value: 7,
          log: "",
      },
        day11: {
          date: new Date(),
          value: 7,
          log: "",
      },
        day12: {
          date: new Date(),
          value: 7,
          log: "",
      },
        day13: {
          date: new Date(),
          value: 7,
          log: "",
      },
        day14: {
          date: new Date(),
          value: 7,
          log: "",
      },
        day15: {
          date: new Date(),
          value: 7,
          log: "",
      },
        day16: {
          date: new Date(),
          value: 7,
          log: "",
      },
        day17: {
          date: new Date(),
          value: 7,
          log: "",
      },
        day18: {
          date: new Date(),
          value: 7,
          log: "",
      },
        day19: {
          date: new Date(),
          value: 7,
          log: "",
      },
        day20: {
          date: new Date(),
          value: 7,
          log: "",
      },
        day21:{
          date: new Date(),
          value: 7,
          log: "",
      },
        day22: {
          date: new Date(),
          value: 7,
          log: "",
      },
        day23: {
          date: new Date(),
          value: 7,
          log: "",
      },
        day24: {
          date: new Date(),
          value: 7,
          log: "",
      },
        day25: {
          date: new Date(),
          value: 7,
          log: "",
      },
        day26: {
          date: new Date(),
          value: 7,
          log: "",
      },
        day27: {
          date: new Date(),
          value: 7,
          log: "",
      },
        day28:{
          date: new Date(),
          value: 7,
          log: "",
      }
      }
    }
  ];

  constructor(private formBuilder : FormBuilder,
    private habitsService : HabitsService,
    private router : Router ) { }

  ngOnInit() {
    this.habitForm = this.buildHabitForm();
    this.setDays();
  }

  buildHabitForm() {
    return this.formBuilder.group({
      isMeasurable: false, 
      nameStart: ["", Validators.required],
      nameEnd: "",
      value1: "",
      value2: "",
      value3: [, Validators.required],
      value4: "",
      value5: "",
      description: "",
      day: [this.d.getDate(), Validators.max(31)],
      month: [this.d.getMonth()+1, Validators.max(12)],
      year: this.d.getFullYear(),
      challenge: this.formBuilder.array([])
    })
  }
buildChallenge() : FormGroup {
  return this.formBuilder.group({
    challengeName: '',
    status: false
  });
}
get challenge() : FormArray {
  return <FormArray>this.habitForm.get('challenge')
}
addChallenge() : void {
  this.challenge.push(this.buildChallenge())
}
removeChallenge(i) {
  this.challenge.removeAt(i)
}

toggleValidity() {
  const habitType = this.habitForm.get('isMeasurable');
  const value3Control = this.habitForm.get('value3')

  if (habitType.value) {
    value3Control.clearValidators();
  } else {
    value3Control.setValidators(Validators.required)
  }
  value3Control.updateValueAndValidity();
}

daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

  setDays() {
    let i = 0;
    Object.keys(this.habits[0].days).forEach(day => {
      this.habits[0].days[day].date.setDate(this.habits[0].date.getDate() + i);
      
      if (this.habitForm.get("day").value + i < this.daysInMonth(this.habitForm.get("month").value, this.habitForm.get("year").value)) {
        i++;  
      } else {
        i = -this.habitForm.get("day").value+1;
      }
    })
  }



  changeValue(day) {
    day.value.value === 7 ? day.value.value = 6 : day.value.value = 7;
    console.log(day.value.value)
  }

  addHabit() {
    this.habits[0].id = this.habitsService.idGiver();
    this.habits[0].nameStart = this.habitForm.get("nameStart").value;
    this.habits[0].nameEnd = this.habitForm.get("nameEnd").value;
    this.habits[0].value1 = this.habitForm.get("value1").value;
    this.habits[0].value2 = this.habitForm.get("value2").value;
    this.habits[0].value3 = this.habitForm.get("value3").value;
    this.habits[0].value4 = this.habitForm.get("value4").value;
    this.habits[0].value5 = this.habitForm.get("value5").value;
    this.habits[0].challenges = this.habitForm.get("challenge").value;
    this.habits[0].description = this.habitForm.get("description").value;
    this.habits[0].date = new Date(`${this.habitForm.get("year").value}-${this.habitForm.get("month").value}-${this.habitForm.get("day").value}`)
    this.setDays();
    this.habitsService.sendHabit(this.habits[0]);
    this.router.navigateByUrl('/habits');
  }

}
