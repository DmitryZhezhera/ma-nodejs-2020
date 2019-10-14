/*
3. Вивести позиції (не індекси) букв “о” і прибрати всі “l” з тексту.
    let text = 'Hello World!';
Очікуваний результат:
5
8
Heo Word!
*/
let text = 'Hello World!';

let matchAll = text.matchAll(/o/g);
console.log(matchAll);
for (let item of matchAll) {
    console.log(item.index+1);
}

console.log(text.replace(/l/g, ''));
