/*
Необхідно написати функцію, яка приймає рядок як аргумент і виводить кількість 
голосних у цьому рядку. Використовувати алфавіту російської мови. 
Необхідно написати щонайменше 3 реалізації функції.

Приклади коду:
   findVowels('Привіт') => 2
   findVowels('Абракадабра') => 5
*/

function findVowels1(str) {
  return str.match(/[уеїєоаіяию]/gi).length;
}

function findVowels2(str) {
  let strInLowerCase = str.toLowerCase();
  let vowels = "уеїєоаіяию";
  let numberVowels = 0;
  for (let i = 0; i < str.length; i++) {
    numberVowels = vowels.includes(strInLowerCase[i])
      ? numberVowels + 1
      : numberVowels;
  }
  return numberVowels;
}

function findVowels3(str) {
  let vowels = ["у", "е", "ї", "є", "о", "а", "і", "я", "и", "ю"];
  let result = str
    .toLowerCase()
    .split("")
    .map((item) => vowels.includes(item))
    .reduce((sum, item) => {
      return item ? sum + 1 : sum;
    }, 0);
  return result;
}

console.log(`findVowels1("Привіт") => ` + findVowels1("Привіт"));
console.log(`findVowels1("Абракадабра") => ` + findVowels1("Абракадабра"));
console.log(`findVowels2("Привіт") => ` + findVowels2("Привіт"));
console.log(`findVowels2("Абракадабра") => ` + findVowels2("Абракадабра"));
console.log(`findVowels3("Привіт") => ` + findVowels3("Привіт"));
console.log(`findVowels3("Абракадабра") => ` + findVowels3("Абракадабра"));
