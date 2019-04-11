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
      date: new Date('2019-04-01'),
      detailsShowed: false,
      challenges: [
        {
          challengeName: "Napisać jeden własny projekt",
          status: false
        }
      ],
      days: {
        day01: {
          date: new Date("2019-04-01"),
          value: 1,
          log: "",
      },
        day02: {
          date: new Date("2019-04-02"),
          value: 5,
          log: "",
      },
        day03: {
          date: new Date("2019-04-03"),
          value: 5,
          log: "",
      },
        day04: {
          date: new Date("2019-04-04"),
          value: 4,
          log: "",
      },
        day05: {
          date: new Date("2019-04-05"),
          value: 4,
          log: "",
      },
        day06: {
          date:new Date("2019-04-06"),
          value: 5,
          log: "",
      },
        day07: {
          date:new Date("2019-04-07"),
          value: 5,
          log: "",
      },
        day08: {
          date: new Date("2019-04-08"),
          value: 7,
          log: "",
      },
        day09: {
          date: new Date("2019-04-09"),
          value: 7,
          log: "",
      },
        day10: {
          date: new Date("2019-04-10"),
          value: 7,
          log: "",
      },
        day11: {
          date: new Date("2019-04-11"),
          value: 7,
          log: "",
      },
        day12: {
          date: new Date("2019-04-12"),
          value: 7,
          log: "",
      },
        day13: {
          date: new Date("2019-04-13"),
          value: 7,
          log: "",
      },
        day14: {
          date: new Date("2019-04-14"),
          value: 7,
          log: "",
      },
        day15: {
          date: new Date("2019-04-15"),
          value: 7,
          log: "",
      },
        day16: {
          date: new Date("2019-04-16"),
          value: 7,
          log: "",
      },
        day17: {
          date: new Date("2019-04-17"),
          value: 7,
          log: "",
      },
        day18: {
          date: new Date("2019-04-18"),
          value: 7,
          log: "",
      },
        day19: {
          date: new Date("2019-04-19"),
          value: 7,
          log: "",
      },
        day20: {
          date: new Date("2019-04-20"),
          value: 7,
          log: "",
      },
        day21:{
          date: new Date("2019-04-21"),
          value: 7,
          log: "",
      },
        day22: {
          date: new Date("2019-04-22"),
          value: 7,
          log: "",
      },
        day23: {
          date: new Date("2019-04-23"),
          value: 7,
          log: "",
      },
        day24: {
          date: new Date("2019-04-24"),
          value: 7,
          log: "",
      },
        day25: {
          date: new Date("2019-04-25"),
          value: 7,
          log: "",
      },
        day26: {
          date: new Date("2019-04-26"),
          value: 7,
          log: "",
      },
        day27: {
          date: new Date("2019-04-27"),
          value: 7,
          log: "",
      },
        day28:{
          date: new Date("2019-04-28"),
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
      date: new Date('2019-05-10'),
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
          date: new Date("2019-05-10"),
          value: 7,
          log: "",
      },
        day02: {
          date: new Date("2019-05-11"),
          value: 7,
          log: "",
      },
        day03: {
          date: new Date("2019-05-12"),
          value: 7,
          log: "",
      },
        day04: {
          date: new Date("2019-05-13"),
          value: 7,
          log: "",
      },
        day05: {
          date: new Date("2019-05-14"),
          value: 7,
          log: "",
      },
        day06: {
          date:new Date("2019-05-15"),
          value: 7,
          log: "",
      },
        day07: {
          date:new Date("2019-05-16"),
          value: 7,
          log: "",
      },
        day08: {
          date: new Date("2019-05-17"),
          value: 7,
          log: "",
      },
        day09: {
          date: new Date("2019-05-18"),
          value: 7,
          log: "",
      },
        day10: {
          date: new Date("2019-05-19"),
          value: 7,
          log: "",
      },
        day11: {
          date: new Date("2019-05-20"),
          value: 7,
          log: "",
      },
        day12: {
          date: new Date("2019-05-21"),
          value: 7,
          log: "",
      },
        day13: {
          date: new Date("2019-05-22"),
          value: 7,
          log: "",
      },
        day14: {
          date: new Date("2019-05-23"),
          value: 7,
          log: "",
      },
        day15: {
          date: new Date("2019-05-24"),
          value: 7,
          log: "",
      },
        day16: {
          date: new Date("2019-05-25"),
          value: 7,
          log: "",
      },
        day17: {
          date: new Date("2019-05-26"),
          value: 7,
          log: "",
      },
        day18: {
          date: new Date("2019-05-27"),
          value: 7,
          log: "",
      },
        day19: {
          date: new Date("2019-05-28"),
          value: 7,
          log: "",
      },
        day20: {
          date: new Date("2019-05-29"),
          value: 7,
          log: "",
      },
        day21:{
          date: new Date("2019-05-30"),
          value: 7,
          log: "",
      },
        day22: {
          date: new Date("2019-05-31"),
          value: 7,
          log: "",
      },
        day23: {
          date: new Date("2019-06-01"),
          value: 7,
          log: "",
      },
        day24: {
          date: new Date("2019-06-02"),
          value: 7,
          log: "",
      },
        day25: {
          date: new Date("2019-06-03"),
          value: 7,
          log: "",
      },
        day26: {
          date: new Date("2019-06-04"),
          value: 7,
          log: "",
      },
        day27: {
          date: new Date("2019-06-05"),
          value: 7,
          log: "",
      },
        day28:{
          date: new Date("2019-06-05"),
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

