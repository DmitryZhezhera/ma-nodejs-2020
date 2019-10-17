/*
10​*.​Дано клас ​Storage,​що є SDK для доступу до якогось сховища даних по текстовому ключу. При цьому, кожен метод повертає Promise:
Storage
list() повертає ​Promise​, який зарезолвиться масивом ключів
fetch(key) повертає ​Promise,​​я​кий зарезолвиться даними
store(key, data) повертає ​Promise
destroy(key) повертає ​Promise

Потрібно реалізувати нові методи (що також повертатимуть Promise):
storeList([{key, data}])
destroyStartedWith(beginningOfKey)
fetchInTimeOrFail(key, timeout)

Додаткова умова (не обов’язково, за бажанням):
Сховище має ліміт на записування та читання по 5 операцій одночасно для одного клієнта.
 */

class Storage {
    constructor(props) {

    }

    list() {
    }

    fetch(key) {
    }

    store(key, data) {
    }

    destroy(key) {
    }

    storeList([{key, data}]) {
    }

    destroyStartedWith(beginningOfKey) {
    }

    fetchInTimeOrFail(key, timeout) {
    }
}
