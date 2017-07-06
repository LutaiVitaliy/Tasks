//TASK 2.1

function sum() {
    var sum = 0;
    for (let every of arguments) {
        sum += every;
    }
    return !isNaN(sum) ? sum : `Не число!`;
}

console.log(sum(1, 2, 3, 4, 5));
console.log(sum());
console.log(sum(23, 65, 0, -100, `q`));

//TASK 2.2

function myConcat(separator, ...arr) {
    var string = arr.join(separator);
    return string;
}

console.log(myConcat(`, `, `red`, `orange`, `blue`));
console.log(myConcat(`; `, `elephant`, `giraffe`, `lion`, `cheetah`));

// TASK 2.3

function sum2(a) {
    return function(b) {
        return !isNaN(a) && !isNaN(b) ? a + b : `Параметры должны быть числами!`

    }
}

console.log(sum2(5)(1));
console.log(sum2(54)(-85));
console.log(sum2(`d`)(1));
console.log(sum2(5)(`a`));
console.log(sum2(2)([1, 2, 3]));

//TASK 2.4

var arr = [1, 2, 3, 4, 5, 6, 7];

function filter(arr, func) {
    var filtered = [];
    for (let key of arr) {
        if (func(key)) {
            filtered.push(key);
        }
    }
    return filtered;
}

function inBetween(a, b) {
    return function(x) {
        return x >= a && x <= b;
    }
}

function inArray(arr) {
    return function(x) {
        return arr.indexOf(x) != -1;
    }
}

console.log(filter(arr, function(x) { return x % 2 == 0 }));
console.log(filter(arr, inBetween(2, 5)));
console.log(filter(arr, inArray([1, 2, 5, 10])));

//TASK 2.5

function Summator() {
    this.sum = function(a, b) {
            return a + b;
        },
        this.run = function() {
            var x = +prompt(`Введите первое значение:`, 1);
            var y = +prompt(`Введите второе значение:`, 1);
            return this.sum(x, y);
        }
}

var ns = new Summator();
console.log(ns.sum(5, 4));
console.log(ns.run())