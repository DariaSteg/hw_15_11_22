// Написати функцію, яка запитує в користувача число з діапазону до тих пір, доки він його не введе
// функція брудна, приймає початок і кінець діапазону, а повертає виключно коректне число числового типу!!!!!!


const enterYourNumber = function (startNumber,endNumber) {
     while (true) {
       const num = prompt("enter your number");
       if (num<startNumber || num > endNumber || isNaN(Number(num)) || num === null || num === "" || num === " ") {
         continue;
       }
       return Number(num);
     }
   };
   console.log(enterYourNumber(2,8));

//    Написати скрипт, який виводить числа (числа повинні бути парними і кратними 9) з діапазону від 0 до 100 у зворотньому порядку.
//    (* - це повинна бути функція)

   const ifRightNumber = function() {
   for (let i = 100; i > 0; i--) {
    if (i %2 === 0 && i %9 === 0) {
      console.log(i);
    }
  }
 }

 console.log(ifRightNumber());

//  Створити функцію конструктор, яка описує користувача:
//  -ім'я
//  -прізвище
//  -вік
//  - метод, який логує ім'я та прізвище разом

const User = {
    name: "Anton", 
    surname: "Steg",
    age: 18,
    fullName : function () {
      console.log("Full name:", this.name,this.surname );},
    };

console.log();
User.fullName();