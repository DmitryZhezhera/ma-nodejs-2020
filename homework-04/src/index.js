/*
Написать синхронную функцию throwDice() возвращающую случайное целое число в диапазоне от 1 до 6 включительно.

написать программу бросания двух игровых костей с получением результата с временными задержками:
через 0.7с после старта вызвать throwDice() вывести результат
через 2с после старта вызвать throwDice() вывести результат
через 3c после старта вывести сумму выпавших кубиков

Повышенный уровень сложности:
расширить throwDice() вероятностью выпадения 0 и в этом случае генерировать исключение/возвращать ошибку в случае коллбек.
В случае возникновения исключения на любом из бросков прервать выполнение и вывести сообщение ("Lost dice");

Задание выполнить 3 раза:
1) с помощь коллбеков
2) с помощью промисов
3) с помощью async/await

PS. Очень сильно рекомендую всем выполнить задание повышенного уровня сложности.

Deadline: 07.12.2019 23:59
*/
function throwDice() {
  const rand = Math.floor(Math.random() * 7);
  if (rand === 0) throw new Error('Lost dice');
  return rand;
}

function app() {
  let sum = 0;
  setTimeout(() => {
    try {
      let num1 = throwDice();
      let num2 = throwDice();
      sum = num1 + num2;
      console.log('num1=', num1, ' num2=', num2, ' sum=', sum);

      setTimeout(() => {
        try {
          num1 = throwDice();
          num2 = throwDice();
          sum = sum + num1 + num2;
          console.log('num1=', num1, ' num2=', num2, ' sum=', sum);

          setTimeout(() => {
            try {
              num1 = throwDice();
              num2 = throwDice();
              sum = sum + num1 + num2;
              console.log('num1=', num1, ' num2=', num2, ' sum=', sum);
            } catch (e) {
              console.log(e);
            }
          }, 1000);
        } catch (e) {
          console.log(e);
        }
      }, 1300);
    } catch (e) {
      console.log(e);
    }
  }, 700);
}

app();
