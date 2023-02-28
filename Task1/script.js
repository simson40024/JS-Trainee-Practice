/*
Враховуючи математичне рівняння, яке має *,+,-,/, переверніть його так, 
як зазначено у прикладі

Приклади коду:
   solve("100*b/y") => "y/b*100"
   solve("a+b-c/d*30") => "30*d/c-b+a"
   solve("a*b/c+50") => "50+c/b*a"
*/

function solve(exp) {
  let result = [""];
  let j = 0;
  for (let i = 0; i < exp.length; i++) {
    if (!exp[i].match(/-|\*|\/|\+/)) {
      result[j] = result[j] + exp[i];
    } else {
      result.push(exp[i], "");
      j += 2;
    }
  }
  return result.reverse().join("");
}
console.log(solve("100*b/y"));
console.log(solve("a+b-c/d*30"));
console.log(solve("a*b/c+50"));
