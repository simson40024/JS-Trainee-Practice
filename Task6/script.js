/*
Функція приймає рядок і число, а повинна повертати усічену
версію даного рядка, починаючи від числа, яке ми 
передаємо в функцію. Усічені символи повинні бути 
замінені трикрапкою '...'. Якщо нічого не було 
усічено, повернути той самий рядок.

Приклади коду:
   solution('Testing String', 3) => 'Tes...'
   solution('Testing String', 8) => 'Testing ...'
   solution('Test', 8) => 'Test'
*/

function solution(str, length) {
  return str.length <= length ? str : str.slice(0, length) + "...";
}

console.log(
  `solution('Testing String', 3) => ` + solution("Testing String", 3)
);
console.log(
  `solution('Testing String', 8) => ` + solution("Testing String", 8)
);
console.log(`solution('Test', 8) => ` + solution("Test", 8));
