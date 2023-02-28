/*
Напишіть функцію, яка приймає два рядки і перевіряє, чи друге слово відрізняється від першого слова лише одним символом

Приклади коду:
   mispelled('versed', 'xersed') => true
   mispelled('versed', 'applb') => false
   mispelled('versed', 'v5rsed') => true
   mispelled('1versed', 'versed') => true
   mispelled('versed', 'versed1') => true
   mispelled('versed', 'aversed') => true
   mispelled('aaversed', 'versed') => false
   mispelled('versed', 'aaversed') => false
*/

function mispelled(str1, str2) {
  let i = 0;
  let count = 0;
  switch (Math.abs(str1.length - str2.length)) {
    case 0:
      while (i < str1.length && count < 2) {
        if (str1[i] != str2[i]) count++;
        i++;
      }

      return count < 2 ? true : false;
    case 1:
      let j = i;
      let shortStr = str1.length < str2.length ? str1 : str2;
      let longStr = str1.length < str2.length ? str2 : str1;
      while (i < shortStr.length && count < 2) {
        if (shortStr[i] != longStr[j]) {
          count++;
          j++;
        }
        i++;
        j++;
      }

      return count < 2 ? true : false;
    default:
      return false;
  }
}

console.log(mispelled("versed", "xersed"));
console.log(mispelled("versed", "applb"));
console.log(mispelled("versed", "v5rsed"));
console.log(mispelled("1versed", "versed"));
console.log(mispelled("versed", "versed1"));
console.log(mispelled("versed", "aversed"));
console.log(mispelled("aaversed", "versed"));
console.log(mispelled("versed", "aaversed"));
