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
        this.storage = new Map();
        this.nSessionsRead = 0;
        this.nSessionsWrite = 0;
        this.nSessionsReadMax = 5;
        this.nSessionsWriteMax = 5;
    }

    list() {
        this.nSessionsRead++;
        return new Promise((resolve, reject) => {
            if (this.nSessionsRead <= this.nSessionsReadMax) {
                this.nSessionsRead--;
                resolve(this.storage.keys());
            } else reject(new Error('to much read sessions'));
        })
    }

    fetch(key) {
        this.nSessionsRead++;
        return new Promise((resolve, reject) => {
            if (this.nSessionsRead <= this.nSessionsReadMax) {
                this.nSessionsRead--;
                resolve(this.storage.get(key));
            } else reject(new Error('to much read sessions'));
        })
    }

    store(key, data) {
        this.nSessionsWrite++;
        return new Promise((resolve, reject) => {
            if (this.nSessionsWrite <= this.nSessionsWriteMax) {
                this.storage.set(key, data);
                this.nSessionsWrite--;
                resolve('saved');
            } else reject(new Error('to much write sessions'));
        })
    }

    destroy(key) {
        this.nSessionsWrite++;
        return new Promise((resolve, reject) => {
            if (this.nSessionsWrite <= this.nSessionsWriteMax) {
                delete this.storage.delete(key);
                this.nSessionsWrite--;
                resolve('deleted');
            } else reject(new Error('to much write sessions'));
        })
    }

    storeList([{key, data}]) {
        this.nSessionsWrite++;
        return new Promise((resolve, reject) => {
            if (this.nSessionsWrite <= this.nSessionsWriteMax) {
                arguments[0].forEach((item) => {
                    for (let key in item) {
                        this.storage.set(key, item[key]);
                    }
                });
                this.nSessionsWrite--;
                console.log("storeList result: ", this.storage);
                resolve('list saved');
            } else reject(new Error('to much write sessions'));
        })
    }

    destroyStartedWith(beginningOfKey) {
        this.nSessionsWrite++;
        return new Promise((resolve, reject) => {
            if (this.nSessionsWrite <= this.nSessionsWriteMax) {
                let isDelete = false;
                for (var [key, value] of this.storage) {
                    console.log(key + ' = ' + value);
                    if (key === beginningOfKey) isDelete = true;
                    if (isDelete) this.storage.delete(key);
                }
                this.nSessionsWrite--;
                // console.log("destroyStartedWith result: ", this.storage);
                resolve('destroyed Started With');
            } else reject(new Error('to much write sessions'));
        })
    }

    fetchInTimeOrFail(key, timeout) {
        this.nSessionsRead++;
        return new Promise((resolve, reject) => {
            if (this.nSessionsRead <= this.nSessionsReadMax) {
                this.nSessionsRead--;
                setTimeout(() => {
                    reject(new Error('failed by timeout'));
                }, timeout);

                setTimeout(() => {
                    resolve(this.storage.get(key));
                }, 1000);

            } else reject(new Error('to much read sessions'));
        })
    }
}

console.log('========');
const storage = new Storage();


storage.store("a", 'A')
    .then(storage.store("b", 'B'))
    .then(storage.store("c", 'C'))
    .then(storage.store("d", 'D'))
    .then(console.log("state of storage: ", storage.storage))
    .then(storage.destroy("c"))
    .then(storage.storeList([{'e': 'E'}, {'f': 'F'}, {'g': 'G'}]))
    .then(storage.list()).then((result) => console.log(result))
    .then(storage.list()).then((result) => console.log(result));


storage.destroyStartedWith('e');
storage.list().then((result) => console.log("list of keys: ", result));
storage.fetch('d').then(result => console.log(result));
storage.fetchInTimeOrFail('d', 500)
    .then(result => console.log(result), err => console.log(err))
    .then(() => console.log("THE END"));

// storage.fetch('a').then((result) => console.log(result));





