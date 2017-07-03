// TASK 1.1

function firstCharToUpperCase(string) {
    return string[0].toUpperCase() + string.slice(1);
}

console.log(firstCharToUpperCase(`hello`));

// TASK 1.2

function checkForSubstring(str, subStr) {
    var count = 0;
    var pos = 0;
    while (true) {
        var foundPos = str.indexOf(subStr, pos);
        if (foundPos == -1) break;
        pos = foundPos + 1;
        count++;

    }
    return count;
}

console.log(checkForSubstring(`some string`, `s`));

// TASK 1.3

function splitString(str, maxLength) {
    if (str.length > maxLength) {
        return str.substring(0, maxLength) + `...`
    }
    return str
}

console.log(splitString(`Hello World`, 5));

// TASK 1.4

function rand(min, max) {
    return min + Math.floor(Math.random() * (max - min));
}

console.log(rand(50, 100));

// TASK 1.5

function fib(n) {
    if (n < 2) return n;
    return fib(n - 2) + fib(n - 1)
}

console.log(fib(10));

// TASK 1.6

function changeDirection(str) {
    var arr = str.split(``);
    arr.reverse();
    return arr.join(``);
}

console.log(changeDirection(`some string`))

// TASK 1.7

function getLongestWord(sentense) {
    var arr = sentense.split(` `);
    var longest;
    var longestLenght = 0;
    for (let i = 0; i < arr.length; i++) {
        if (longestLenght < arr[i].length) {
            longest = arr[i];
            longestLenght = longest.length;
        }
    }
    return longest;
};

console.log(getLongestWord(`longestwordever bye`));
console.log(getLongestWord(`hello`));
console.log(getLongestWord(``));
console.log(getLongestWord(`hello world longestwordever`));
console.log(getLongestWord(`                                hello world longestwordever1 longestwordever2  bye`));


function getLongestWord2(sentense) {
    var words = sentense.split(` `);
    var longest = ``;
    for (let word of words) {
        longest = word.length > longest.length ? word : longest;
    }
    return longest;
};

console.log(getLongestWord2(`longestwordever bye`));
console.log(getLongestWord2(`hello`));
console.log(getLongestWord2(``));
console.log(getLongestWord2(`hello world longestwordever`));
console.log(getLongestWord2(`                                hello world longestwordever1 longestwordever2  bye`));


// TASK 1.8

function factorial(n) {
    if (n < 3) return n;
    return n * factorial(n - 1);
}

console.log(factorial(10));

// TASK 1.9

function PhoneBook() {
    this.list = [];
    this.addUser = function(user) {
        if (this.findByTel(user.phone) === false) {
            this.list.push(user)
            return true
        } else {
            return false
        }
    };
    this.findByTel = function(phone) {
        const result = this.list.findIndex(function(el) {
            return el.phone === phone
        })
        return result !== -1 ? result : false
    };
    this.getUser = function(tel) {
        const userIdx = this.findByTel(tel);
        return userIdx !== false ? this.list[userIdx] : false;
    };
    this.deleteUser = function(tel) {
        const userIdx = this.findByTel(tel);
        return userIdx !== false ? !!this.list.splice(userIdx, 1) : false;
    };
    this.updateUserByTel = function(tel, newUser) {
        const userIdx = this.findByTel(tel);
        if (userIdx !== false) {
            for (let key in newUser) {
                if (newUser.hasOwnProperty(key)) {
                    this.list[userIdx][key] = newUser[key];
                }
            }
            return true;
        } else {
            return false;
        }
    };
}

const stubUser1 = {
    firstName: 'Vitalii',
    lastName: 'Lutai',
    phone: '11-22-33'
}
const stubUser2 = {
    firstName: 'Vasya',
    lastName: 'Pupkin',
    phone: '44-55-66'
}

let bp = new PhoneBook();
console.log(bp.addUser(stubUser1))
console.log(bp.list)
console.log(bp.findByTel('11-22-33'))
console.log(bp.findByTel('44-22-33'))
console.log(bp.findByTel('11-22-33'))
console.log(bp.getUser('11-22-33'))
console.log(bp.getUser('44-22-33'))
console.log(bp.deleteUser('44-22-33'))
console.log(bp.deleteUser('11-22-33'))
console.log(bp.getUser('11-22-33'))
bp.addUser(stubUser1)
bp.addUser(stubUser2)
console.log(bp.getUser('11-22-33'))
console.log(bp.updateUserByTel('11-22-33', { firstName: 'Vetal\`' }))
console.log(bp.getUser('11-22-33'))
console.log(bp.list)