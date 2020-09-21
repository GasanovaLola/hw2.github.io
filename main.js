//№1
var x = prompt("Кто пришел ?");

if (x === "Админ") {
    var pasvord = prompt("Пароль ?");
    if (pasvord === "Черный Властелин") {
        console.log("Добро пожаловать");
    }
    else if (x === null) {
        console.log("Вход отменен");
    }
    else {
        console.log("Пароль неверен");
    }
}
else if (x === null) {
    console.log("Вход отменен");
}
else {
    console.log("Я вас не знаю");
}
// -------------------------------------------------

//№2
var sum = 0;
var sumch = 0;
var size = 150;

for (let index = 1; index <= size; index++) {
    sum += index;
    if (index % 2 == 0) {
        sumch += index; 
    }
}
//№2.1
console.log("Сумма всех чисел " + sum);
//№2.2
console.log("Сумма чётных чисел " + sumch);

//№2.3
var num = +prompt("Введите число");
while (isNaN(num)) {
    console.log(num);
    num = prompt("Введите число");
}

//№2.4
var f = prompt("Введите факториал n!");
var t = 1;

for (let index = 1; index <= f; index++) {
    t *= index;
}

console.log(t);


// №2.5
var u = prompt("Введите число для проверки");
var count = 0;

for (let index = 0; index <= u; index++) {
    if (u % index == 0) {
        count++;
    }
}

if (count <= 2) {
    console.log("да");
}
else {
    console.log("нет");
}
