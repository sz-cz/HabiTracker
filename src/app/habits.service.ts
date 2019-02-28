import { Injectable } from '@angular/core';
import { Habit } from './habits/models/habit'
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabitsService {

  passHabits : Habit[] = [
    {
      id: 1,
      nameStart: "Będę programować",
      nameEnd: "minut",
      value1: "20",
      value2: "40",
      value3: "60",
      value4: "75",
      value5: "90",
      description: "Mam na myśli wszystkie czynności związane z nauką programowania, tj. przerabianie kursów, tworzenie własnych projektów, wykonywanie ćwiczeń itd.",
      date: new Date('2019-01-03'),
      detailsShowed: false,
      challenges: [
        {
          challengeName: "Napisać jeden własny projekt",
          status: false
        }
      ],
      days: {
        day01: {
          date: new Date("2019-01-03"),
          value: 1,
          log: "",
      },
        day02: {
          date: new Date("2019-01-04"),
          value: 5,
          log: "",
      },
        day03: {
          date: new Date("2019-01-05"),
          value: 5,
          log: "",
      },
        day04: {
          date: new Date("2019-01-06"),
          value: 4,
          log: "",
      },
        day05: {
          date: new Date("2019-01-03"),
          value: 4,
          log: "",
      },
        day06: {
          date:new Date("2019-01-03"),
          value: 5,
          log: "",
      },
        day07: {
          date:new Date("2019-01-03"),
          value: 5,
          log: "",
      },
        day08: {
          date: new Date("2019-01-03"),
          value: 2,
          log: "",
      },
        day09: {
          date: new Date("2019-01-03"),
          value: 5,
          log: "",
      },
        day10: {
          date: new Date("2019-01-03"),
          value: 5,
          log: "",
      },
        day11: {
          date: new Date("2019-01-03"),
          value: 1,
          log: "",
      },
        day12: {
          date: new Date("2019-01-03"),
          value: 2,
          log: "",
      },
        day13: {
          date: new Date("2019-01-03"),
          value: 5,
          log: "",
      },
        day14: {
          date: new Date("2019-01-03"),
          value: 5,
          log: "",
      },
        day15: {
          date: new Date("2019-01-03"),
          value: 5,
          log: "",
      },
        day16: {
          date: new Date("2019-01-03"),
          value: 4,
          log: "",
      },
        day17: {
          date: new Date("2019-01-03"),
          value: 3,
          log: "",
      },
        day18: {
          date: new Date("2019-01-03"),
          value: 5,
          log: "",
      },
        day19: {
          date: new Date("2019-01-03"),
          value: 4,
          log: "",
      },
        day20: {
          date: new Date("2019-01-03"),
          value: 5,
          log: "",
      },
        day21:{
          date: new Date("2019-01-03"),
          value: 5,
          log: "",
      },
        day22: {
          date: new Date("2019-01-03"),
          value: 5,
          log: "",
      },
        day23: {
          date: new Date("2019-01-03"),
          value: 1,
          log: "",
      },
        day24: {
          date: new Date("2019-01-03"),
          value: 5,
          log: "",
      },
        day25: {
          date: new Date("2019-01-03"),
          value: 7,
          log: "",
      },
        day26: {
          date: new Date("2019-01-03"),
          value: 7,
          log: "",
      },
        day27: {
          date: new Date("2019-01-03"),
          value: 7,
          log: "",
      },
        day28:{
          date: new Date("2019-01-03"),
          value: 7,
          log: "",
      }
      }
    },
    {
      id: 2,
      nameStart: "Będę czytać",
      nameEnd: "minut",
      value1: "10",
      value2: "20",
      value3: "30",
      value4: "40",
      value5: "50",
      description: "Chodzi wyłącznie o książki popularnonaukowe. Tytuły fabularne nie wliczają się, bo czytam je dla przyjemności.",
      date: new Date('2019-01-03'),
      detailsShowed: false,
      challenges: [
        {
          challengeName: "Przynajmniej 4 razy osiągnąć cel niebieski",
          status: true
        },
        {
          challengeName: "Skończyć wreszcie 'Krótką historię czasu'",
          status: false
        }
      ],
      days: {
        day01: {
          date: new Date("2019-01-03"),
          value: 1,
          log: "",
      },
        day02: {
          date: new Date("2019-01-03"),
          value: 5,
          log: "",
      },
        day03: {
          date: new Date("2019-01-03"),
          value: 5,
          log: "",
      },
        day04: {
          date: new Date("2019-01-03"),
          value: 4,
          log: "",
      },
        day05: {
          date: new Date("2019-01-03"),
          value: 4,
          log: "",
      },
        day06: {
          date:new Date("2019-01-03"),
          value: 5,
          log: "",
      },
        day07: {
          date:new Date("2019-01-03"),
          value: 5,
          log: "",
      },
        day08: {
          date: new Date("2019-01-03"),
          value: 2,
          log: "",
      },
        day09: {
          date: new Date("2019-01-03"),
          value: 5,
          log: "",
      },
        day10: {
          date: new Date("2019-01-03"),
          value: 5,
          log: "",
      },
        day11: {
          date: new Date("2019-01-03"),
          value: 1,
          log: "",
      },
        day12: {
          date: new Date("2019-01-03"),
          value: 2,
          log: "",
      },
        day13: {
          date: new Date("2019-01-03"),
          value: 5,
          log: "",
      },
        day14: {
          date: new Date("2019-01-03"),
          value: 5,
          log: "",
      },
        day15: {
          date: new Date("2019-01-03"),
          value: 5,
          log: "",
      },
        day16: {
          date: new Date("2019-01-03"),
          value: 4,
          log: "",
      },
        day17: {
          date: new Date("2019-01-03"),
          value: 3,
          log: "",
      },
        day18: {
          date: new Date("2019-01-03"),
          value: 5,
          log: "",
      },
        day19: {
          date: new Date("2019-01-03"),
          value: 4,
          log: "",
      },
        day20: {
          date: new Date("2019-01-03"),
          value: 5,
          log: "",
      },
        day21:{
          date: new Date("2019-01-03"),
          value: 5,
          log: "",
      },
        day22: {
          date: new Date("2019-01-03"),
          value: 5,
          log: "",
      },
        day23: {
          date: new Date("2019-01-03"),
          value: 1,
          log: "",
      },
        day24: {
          date: new Date("2019-01-03"),
          value: 5,
          log: "",
      },
        day25: {
          date: new Date("2019-01-03"),
          value: 7,
          log: "",
      },
        day26: {
          date: new Date("2019-01-03"),
          value: 7,
          log: "",
      },
        day27: {
          date: new Date("2019-01-03"),
          value: 7,
          log: "",
      },
        day28:{
          date: new Date("2019-01-03"),
          value: 7,
          log: "",
      }
      }
    }
  ]
  archiveHabits : Habit[] =[];
  id = 2;

  idGiver() : number {
    this.id++;
    return this.id;
  }

  habitToPass$ = new BehaviorSubject<Habit[]>(this.passHabits);
  habitToArchive$ = new BehaviorSubject<Habit[]>(this.archiveHabits);

  archiveHabit(habit : Habit) {
    this.archiveHabits.push(habit);
    this.habitToArchive$.next(this.archiveHabits)
  }

  sendHabit(habit : Habit) {
    this.passHabits.push(habit);
    this.habitToPass$.next(this.passHabits);
    localStorage.setItem("habits", JSON.stringify(this.passHabits));
  }
  getHabit(id : number) : Habit {
    const index = this.passHabits.findIndex(habit => habit.id == id )
    return this.passHabits[index];
  }
  
  constructor() { 
    // this.passHabits = this.passHabits.concat(JSON.parse(localStorage.getItem("habits")))
  }
}

