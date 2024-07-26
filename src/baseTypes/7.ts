/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDays {
  monday = "monday",
  tuesday = "tuesday",
  wednesday = "wednesday",
  thursday = "thursday",
  friday = "friday",
  saturday = "saturday",
  sunday = "sunday",
}

const WEEKEND_DAYS = [WeekDays.saturday, WeekDays.sunday];

const isWeekend = (day: WeekDays) => WEEKEND_DAYS.includes(day);

console.log(isWeekend(WeekDays.monday));
console.log(isWeekend(WeekDays.saturday));
