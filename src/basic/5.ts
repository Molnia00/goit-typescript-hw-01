

enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

const isWeekend = (day: DayOfWeek): boolean => {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
};

const today: DayOfWeek = DayOfWeek.Wednesday;
console.log(`Сьогодні вихідний? ${isWeekend(today)}`); 

const saturday: DayOfWeek = DayOfWeek.Saturday;
console.log(`Субота вихідний? ${isWeekend(saturday)}`);