// 2. Написати код, який перевіряв би поля об’єкта на відповідність даних до наступних умов:
const user = {
    firstName: 'John', // string
    lastName: 'Doe', // string
    rate: 0.86, // number in range 0..1
    address:
        { // not empty object or null
            line1: '15 Macon St', // string
            line2: '', // string
            city: 'Gotham' // string
        },
    phoneNumbers: [ // array containing at least 1 element
        {
            type: 'MOBILE', // string, limited to MOBILE | LINE | VOIP
            number: '(555) 555-1234' // string in specific format
        },
        {
            type: 'LINE',
            number: '(555) 555-5678'
        }
    ]
};

function isObjectEmpty(object) {
    let isEmpty = true;
    for (let keys in object) {
        isEmpty = false;
        break;
    }
    // console.log(object," isEmpty_",isEmpty);
    return isEmpty;
}

function validateUserFields(user) {
    if (typeof user.firstName != "string" ||
        typeof user.lastName != "string" ||
        (typeof user.rate != "number" ||
            (user.rate < 0 && user.rate > 1))
    ) return false;

    if (isObjectEmpty(user.address) ||
        typeof user.address.line1 != "string" ||
        typeof user.address.line2 != "string" ||
        typeof user.address.city != "string") return false;

    let totalPhoneNumbers = user.phoneNumbers.length;
    if (!totalPhoneNumbers) return false;
    else {
        let reType = /^MOBILE$|^LINE$|^VOIP$/;
        let reFormat = /^\(\d{3}\)\s\d{3}-\d{4}$/;
        for (let i = 0; i < totalPhoneNumbers; i++) {
            if (!reType.test(user.phoneNumbers[i].type) ||
                !reFormat.test(user.phoneNumbers[i].number)) return false;

        }
    }

    return true;
}

console.log(user.phoneNumbers.length);
console.log("validateUserFields: ", validateUserFields(user));
