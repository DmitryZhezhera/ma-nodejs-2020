/*
6. Дзеркально об’єднати два масиви в один через одне значення і вивести новий масив в консоль.
const first = [1, 2, 3, 4, 5]; const second = [6, 7, 8, 9, 0];
Очікуваний результат:
[5, 0, 4, 9, 3, 8, 2, 7, 1, 6]
 */

const first = [1, 2, 3, 4, 5];
const second = [6, 7, 8, 9, 0];

let arr = [];
for (let i=4; i>=0; i--){
    arr.push(first[i]);
    arr.push(second[i]);
}

console.log(arr);
