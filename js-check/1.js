/*
Змініть або видаліть тип змінних (var, const, let) не змінюючи їх значень так, щоб їхня сума стала 7.
Тобто редагувати або видаляти тут можна тільки ключові слова виділенні жирним.
 */

var my_number = -1;
let myNumber = 0;
let number = 3;

if (true) {
    let my_number = 1;
    myNumber = 2;
    number = 6;
}

const sum = my_number + myNumber + number; // Result: -1 + 2 + 6 = 7

console.log(sum);
