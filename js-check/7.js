/*
7. Дано 2 масиви, Овочі та Фрукти:
const vegetables = ['potato', 'tomato', 'cucumber']; const fruits = ['apple', 'pineapple', 'banana'];
Зробити за допомогою ​if​ без використання циклів пошук до якого масиву належить значення 'cucumber', вивівши в консоль назву масиву.
Зробити ту саму задачу за допомогою ​switch​/ ​case.​
 */

const vegetables = ['potato', 'tomato', 'cucumber'];
const fruits = ['apple', 'pineapple', 'banana'];

function search1(food) {
    if (food === vegetables[0]) console.log("vegetables");
    else if (food === vegetables[1]) console.log("vegetables");
    else if (food === vegetables[2]) console.log("vegetables");
    else if (food === fruits[0]) console.log("fruits");
    else if (food === fruits[1]) console.log("fruits");
    else if (food === fruits[2]) console.log("fruits");
    else console.log("what is it?");
}

search1('cucumber');

function search2(food) {
    switch (food) {
        case 'potato':
            console.log("vegetables");
            break;
        case 'tomato':
            console.log("vegetables");
            break;
        case 'cucumber':
            console.log("vegetables");
            break;
        case 'apple':
            console.log("fruits");
            break;
        case 'pineapple':
            console.log("fruits");
            break;
        case 'banana':
            console.log("fruits");
            break;
        default:
            console.log("what is it?");
    }
}
search2('cucumber');
