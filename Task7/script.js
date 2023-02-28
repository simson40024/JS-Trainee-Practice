/*
Вам буде дано рядок у нижньому регістрі та число, і ваше завдання 
полягатиме в тому, щоб видалити стільки символів у рядку, скільки 
зазначено в числі, використовуючи таке правило: спочатку видаліть 
усі літери «a», потім літери «b», потім « c» і т. д. Починайте 
видалення з лівого символу.

Приклади коду:
   solve('abracadabra', 1) => 'bracadabra' # видалили один символ 'a'
   solve('abracadabra', 2) => 'brcadabra' # видалили 2 символи 'a'
   solve('abracadabra', 6) => 'rcdbr' # видалили 5 символів 'a', і тому 
   символів 'а' більше не залишилося, видалили 1 символ 'b'
   solve('abracadabra', 8) => 'rdr'
   solve('abracadabra',50) => ''
*/

function solve(str, number) {
  let trimed = str;
  let count = number;
  let charCode = 97;
  while (trimed.length > 0 && count > 0 && charCode <= 122) {
    if (trimed.indexOf(String.fromCharCode(charCode)) != -1) {
      trimed = trimed.replace(String.fromCharCode(charCode), "");
      count--;
    } else charCode += 1;
  }
  return trimed;
}

console.log(`solve('abracadabra', 1) => ` + solve("abracadabra", 1));
console.log(`solve('abracadabra', 2) => ` + solve("abracadabra", 2));
console.log(`solve('abracadabra', 6) => ` + solve("abracadabra", 6));
console.log(`solve('abracadabra', 8) => ` + solve("abracadabra", 8));
console.log(`solve('abracadabra',50) => ` + solve("abracadabra", 50));
