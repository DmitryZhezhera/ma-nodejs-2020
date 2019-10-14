/*
4. Створити новий об’єкт різними способами (мінімум 2 способа).
Присвоїти кожному об’єкту параметр ‘name’, що буде містити унікальне ім’я (наприклад, 'Object A', 'Object B'). Вивести в консоль ці об’єкти за допомогою ​console.log().​
 */

let objectA = {};
objectA.name = 'Object A';

function SomeObject(name) {
    this.name = name;
}

let objectB = new SomeObject('Object B');

console.log(objectA);
console.log(objectB);

