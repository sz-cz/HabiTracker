import { Injectable } from '@angular/core';
import { Habit } from './habits/models/habit'
import { BehaviorSubject } from 'rxjs';

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
      date: new Date('2019-02-24'),
      detailsShowed: false,
      challenges: [
        {
          challengeName: "Napisać jeden własny projekt",
          status: false
        }
      ],
      days: {
        day01: {
          date: new Date("2019-02-24"),
          value: 1,
          log: "",
      },
        day02: {
          date: new Date("2019-02-25"),
          value: 5,
          log: "",
      },
        day03: {
          date: new Date("2019-02-26"),
          value: 5,
          log: "",
      },
        day04: {
          date: new Date("2019-02-27"),
          value: 4,
          log: "",
      },
        day05: {
          date: new Date("2019-02-28"),
          value: 4,
          log: "",
      },
        day06: {
          date:new Date("2019-03-01"),
          value: 5,
          log: "",
      },
        day07: {
          date:new Date("2019-03-02"),
          value: 5,
          log: "",
      },
        day08: {
          date: new Date("2019-03-03"),
          value: 7,
          log: "",
      },
        day09: {
          date: new Date("2019-03-04"),
          value: 7,
          log: "",
      },
        day10: {
          date: new Date("2019-03-05"),
          value: 7,
          log: "",
      },
        day11: {
          date: new Date("2019-03-06"),
          value: 7,
          log: "",
      },
        day12: {
          date: new Date("2019-03-07"),
          value: 7,
          log: "",
      },
        day13: {
          date: new Date("2019-03-08"),
          value: 7,
          log: "",
      },
        day14: {
          date: new Date("2019-03-09"),
          value: 7,
          log: "",
      },
        day15: {
          date: new Date("2019-03-10"),
          value: 7,
          log: "",
      },
        day16: {
          date: new Date("2019-03-11"),
          value: 7,
          log: "",
      },
        day17: {
          date: new Date("2019-03-12"),
          value: 7,
          log: "",
      },
        day18: {
          date: new Date("2019-03-13"),
          value: 7,
          log: "",
      },
        day19: {
          date: new Date("2019-03-14"),
          value: 7,
          log: "",
      },
        day20: {
          date: new Date("2019-03-15"),
          value: 7,
          log: "",
      },
        day21:{
          date: new Date("2019-03-16"),
          value: 7,
          log: "",
      },
        day22: {
          date: new Date("2019-03-17"),
          value: 7,
          log: "",
      },
        day23: {
          date: new Date("2019-03-18"),
          value: 7,
          log: "",
      },
        day24: {
          date: new Date("2019-03-19"),
          value: 7,
          log: "",
      },
        day25: {
          date: new Date("2019-03-20"),
          value: 7,
          log: "",
      },
        day26: {
          date: new Date("2019-03-21"),
          value: 7,
          log: "",
      },
        day27: {
          date: new Date("2019-03-22"),
          value: 7,
          log: "",
      },
        day28:{
          date: new Date("2019-03-23"),
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
      date: new Date('2019-03-10'),
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
          date: new Date("2019-03-10"),
          value: 7,
          log: "",
      },
        day02: {
          date: new Date("2019-03-11"),
          value: 7,
          log: "",
      },
        day03: {
          date: new Date("2019-03-12"),
          value: 7,
          log: "",
      },
        day04: {
          date: new Date("2019-03-13"),
          value: 7,
          log: "",
      },
        day05: {
          date: new Date("2019-03-14"),
          value: 7,
          log: "",
      },
        day06: {
          date:new Date("2019-03-15"),
          value: 7,
          log: "",
      },
        day07: {
          date:new Date("2019-03-16"),
          value: 7,
          log: "",
      },
        day08: {
          date: new Date("2019-03-17"),
          value: 7,
          log: "",
      },
        day09: {
          date: new Date("2019-03-18"),
          value: 7,
          log: "",
      },
        day10: {
          date: new Date("2019-03-19"),
          value: 7,
          log: "",
      },
        day11: {
          date: new Date("2019-03-20"),
          value: 7,
          log: "",
      },
        day12: {
          date: new Date("2019-03-21"),
          value: 7,
          log: "",
      },
        day13: {
          date: new Date("2019-03-22"),
          value: 7,
          log: "",
      },
        day14: {
          date: new Date("2019-03-23"),
          value: 7,
          log: "",
      },
        day15: {
          date: new Date("2019-03-24"),
          value: 7,
          log: "",
      },
        day16: {
          date: new Date("2019-03-25"),
          value: 7,
          log: "",
      },
        day17: {
          date: new Date("2019-03-26"),
          value: 7,
          log: "",
      },
        day18: {
          date: new Date("2019-03-27"),
          value: 7,
          log: "",
      },
        day19: {
          date: new Date("2019-03-28"),
          value: 7,
          log: "",
      },
        day20: {
          date: new Date("2019-03-29"),
          value: 7,
          log: "",
      },
        day21:{
          date: new Date("2019-03-30"),
          value: 7,
          log: "",
      },
        day22: {
          date: new Date("2019-03-31"),
          value: 7,
          log: "",
      },
        day23: {
          date: new Date("2019-04-01"),
          value: 7,
          log: "",
      },
        day24: {
          date: new Date("2019-04-02"),
          value: 7,
          log: "",
      },
        day25: {
          date: new Date("2019-04-03"),
          value: 7,
          log: "",
      },
        day26: {
          date: new Date("2019-04-04"),
          value: 7,
          log: "",
      },
        day27: {
          date: new Date("2019-04-05"),
          value: 7,
          log: "",
      },
        day28:{
          date: new Date("2019-04-05"),
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

