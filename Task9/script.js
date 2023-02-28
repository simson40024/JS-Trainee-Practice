/*
Співробітники нашої компанії багато подорожують і нам важливо фіксувати скільки днів 
вони були у відрядженні. Напишіть функцію, яка приймає багатовимірний масив з днями відрядження. 
Перше число масиву – день прибуття, друге – день від'їзду. Необхідно, щоб вона повертала скільки 
днів співробітник був у відрядженні. Наприклад: daysRepresented ([[10,17],[200,207]]) повертає 16, 
тому що є дві поїздки по 8 днів, що в сумі дає 16.

Приклади коду:
   daysRepresented([[10,15],[25,35]]) => 17
   daysRepresented([[2,8], [220,229],[10,16]]) => 24
   daysRepresented( [[13,20],[86,93]]) => 16
   daysRepresented( [[1,2], [8,10],[12,15]]) => 9
   daysRepresented( [[2,8], [10,16],[19,26]]) => 22
*/

function daysRepresented(dates) {
  return dates.reduce((sum, days) => {
    sum += days[1] - days[0] + 1;
    return sum;
  }, 0);
}

console.log(
  `daysRepresented([[10,15],[25,35]]) => ` +
    daysRepresented([
      [10, 15],
      [25, 35],
    ])
);
console.log(
  `daysRepresented([[2,8], [220,229],[10,16]]) => ` +
    daysRepresented([
      [2, 8],
      [220, 229],
      [10, 16],
    ])
);
console.log(
  `daysRepresented( [[13,20],[86,93]]) => ` +
    daysRepresented([
      [13, 20],
      [86, 93],
    ])
);
console.log(
  `daysRepresented( [[1,2], [8,10],[12,15]]) => ` +
    daysRepresented([
      [1, 2],
      [8, 10],
      [12, 15],
    ])
);
console.log(
  `daysRepresented( [[2,8], [10,16],[19,26]]) => ` +
    daysRepresented([
      [2, 8],
      [10, 16],
      [19, 26],
    ])
);
