/*
У цьому завданні вам буде надано рядок, який може містити змішані великі 
та малі літери, і ваше завдання полягає в тому, щоб перетворити цей рядок 
або тільки в нижній регістр, або тільки у верхній регістр. Як визначити, 
який регістр перетворювати? Все просто: вам потрібно зробити якнайменше 
змін у вихідному рядку. Якщо рядок містить однакову кількість великих і 
малих літер, перетворити рядок на малі. Наприклад: Саша => саша, тому що, 
щоб усі літери були однаковими, достатньо зробити одну дію – перетворити 
літеру 'З' з верхнього регістру в нижній. А якби ми робили 'САША' - 3 дії

Приклади коду:
   solve('code') => 'code'
   solve('CODe') => 'CODE'
   solve('COde') => 'code'
   solve('Code') => 'code'
*/

function solve(str) {
  let numberLl = (str.match(/\p{Ll}/gu) || []).length;
  let numberLu = (str.match(/\p{Lu}/gu) || []).length;
  if (numberLl == 0 && numberLu == 0) {
    return str;
  } else {
    if (numberLl >= numberLu) return str.toLowerCase();
  }
  return str.toUpperCase();
}

console.log(solve("code"));
console.log(solve("CODe"));
console.log(solve("COde"));
console.log(solve("Code"));
console.log(solve("187&^%#@0361"));
