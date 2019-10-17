/*
9. Написати функцію, що огортає ​setTimeout()​в Promise. При виклику вона приймає один параметр — кількість мілісекунд.
Функція повертає Promise, що має перейти в стан resolved через задану кількість мілісекунд.
 */

function somePromise(miliseconds) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, miliseconds);
    });
}

somePromise(3000).then(()=>console.log("Done"));
