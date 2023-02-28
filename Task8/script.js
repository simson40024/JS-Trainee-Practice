/*
Ми маємо час, але з ним щось пішло не так! Я дивлюся на годинник, а він показує 76 хвилин п'ятого! 
Виправте це непорозуміння, будь ласка. Приклади нижче.

Приклади коду:
   timeCorrect('09:10:01') => '09:10:01'
   timeCorrect('11:70:10') => '12:10:10'
   timeCorrect('19:99:09') => '20:39:09'
   timeCorrect('19:99:99') => '20:40:39'
   timeCorrect('24:01:01') => '00:01:01'
   timeCorrect('52:01:01') => '04:01:01'
*/

function timeCorrect(time) {
  if (time == null || time == undefined) return "Error input time";
  let [hh, mm, ss] = time.split(":");
  let data = new Date(2023, 0, 26, hh, mm, ss);
  return data != "Invalid Date"
    ? data.toLocaleString().slice(-8)
    : "Error input time";
}

console.log(`timeCorrect('09:10:01') => ` + timeCorrect("09:10:01"));
console.log(`timeCorrect('11:70:10') => ` + timeCorrect("11:70:10"));
console.log(`timeCorrect('19:99:09') => ` + timeCorrect("19:99:09"));
console.log(`timeCorrect('19:99:99') => ` + timeCorrect("19:99:99"));
console.log(`timeCorrect('24:01:01') => ` + timeCorrect("24:01:01"));
console.log(`timeCorrect('52:01:01') => ` + timeCorrect("52:01:01"));
console.log(`timeCorrect('wrong time') => ` + timeCorrect());
console.log(`timeCorrect() => ` + timeCorrect());
