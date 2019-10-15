/*
5. Відібрати парні цифри та вивести одним рядком.
const data = '21345A67098';
Очікуваний результат:
2468
 */
const data = '21345A67098';

console.log(data.replace(/\D/g,'').replace(/\d/g,function (match) {
    if((+match)%2===0 && +match!==0) return match;
    return '';
}));
