/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
var Days;
(function (Days) {
  Days["monday"] = "Monday";
  Days["tuesday"] = "Tuesday";
  Days["wednesday"] = "Wednesday";
  Days["thursday"] = "Thursday";
  Days["friday"] = "Friday";
  Days["saturday"] = "Saturday";
  Days["sunday"] = "Sunday";
})(Days || (Days = {}));
function isWeekend(day) {
  if (day === "Saturday" || "Sunday") {
    console.log(`${day} is a day off`);
    return true;
  } else {
    console.log(`${day} is a working day`);
    return false;
  }
}
isWeekend(Days.friday);
//# sourceMappingURL=7.js.map
