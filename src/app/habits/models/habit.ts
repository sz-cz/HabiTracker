export interface Day {
    date: Date;
    value: number;
    log: string;
}

export interface Habit {
    id: number;
    nameStart: string;
    nameEnd: string;
    value1: string;
    value2: string;
    value3: string;
    value4: string;
    value5: string;
    description: string;
    date: Date;
    detailsShowed: boolean;
    challenges: Object[];
    days: {
        day01: Day;
        day05: Day;
        day03: Day;
        day06: Day;
        day02: Day;
        day07: Day;
        day04: Day;
        day08: Day;
        day09: Day;
        day10: Day;
        day11: Day;
        day12: Day;
        day13: Day;
        day14: Day;
        day15: Day;
        day16: Day;
        day17: Day;
        day18: Day;
        day19: Day;
        day20: Day;
        day21: Day;
        day22: Day;
        day23: Day;
        day24: Day;
        day25: Day;
        day26: Day;
        day27: Day;
        day28: Day;
    }
}