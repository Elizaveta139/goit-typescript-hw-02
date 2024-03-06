/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  monday = "Monday",
  tuesday = "Tuesday",
  wednesday = "Wednesday",
  thursday = "Thursday",
  friday = "Friday",
  saturday = "Saturday",
  sunday = "Sunday",
}

function isWeekend(day: Days): boolean {
  if (day === "Saturday" || "Sunday") {
    console.log(`${day} is a day off`);
    return true;
  } else {
    console.log(`${day} is a working day`);
    return false;
  }
}

isWeekend(Days.friday);
