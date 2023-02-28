/*
Створіть функцію, яка перевіряє пароль (переданий у вигляді рядка), щоб переконатися, що він відповідає 
наступним вимогам:
1. Від 8 до 20 символів.
2. Містить лише такі символи (і хоча б по одному з кожної категорії): великі літери, малі літери, 
цифри, спеціальні символи з !@#$%^&*?.

Приклади коду:
   check_password("") => "not valid"
   check_password("password") =>"not valid"
   check_password("P1@p") => "not valid"
   check_password("P1@pP1@p") => "valid"
   check_password("P1@pP1@pP1@pP1@pP1@pP1@p") => "not valid"
   check_password("Paaaaaa222!!!") => "valid"
*/

function check_password(password) {
  let regExp =
    /^(?=.{8,20}$)(?=.*[0-9])(?=.*[!@#$%^&*?])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*?]/;

  return password.match(regExp) ? "valid" : "not valid";
}

console.log(`check_password("") => ` + check_password(""));
console.log(`check_password("password") => ` + check_password("password"));
console.log(`check_password("P1@p") => ` + check_password("P1@p"));
console.log(`check_password("P1@pP1@p") => ` + check_password("P1@pP1@p"));
console.log(
  `check_password("P1@pP1@pP1@pP1@pP1@pP1@p") => ` +
    check_password("P1@pP1@pP1@pP1@pP1@pP1@p")
);
console.log(
  `check_password("Paaaaaa222!!!") => ` + check_password("Paaaaaa222!!!")
);
