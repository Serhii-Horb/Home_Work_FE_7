// --------------- Задача1: --------------- 
// Напишите функцию, которая принимает два числовых аргумента и 
// возвращает наименьшее из них.

function minArg(arg1, arg2) {
    if(arg1 < arg2) {
        return arg1
    } else {
        return arg2
    }
}
console.log("Задача:1")
console.log(minArg(7, 5))

// --------------- Задача2: --------------- 
// Напишите функцию, которая принимает два числовых аргумента и выводит в 
// консоль все четные числа от большего к меньшему.

function printArg (arg1, arg2) {
    let max = 0
    if (arg1 > max) {
        max = arg1
    }
    if(arg2 > max) {
        max = arg2
    }
    for(let i = max; i > 0; i--) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}
console.log("Задача:2")
printArg(20, 3)

// --------------- Задача3: --------------- 
// Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень)
// и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.

function power(arg1, arg2 = 2) {
    return arg1 ** arg2
}
console.log("Задача:3")
console.log(power(4, 2))

// --------------- Задача4: --------------- 
// Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.
function sum (n) {
   let summa = 0
    for(let i = 1; i <= n; i++) {
        summa += i
    }
    return summa
}
console.log("Задача:4")
console.log(sum(5))

// --------------- Задача5: --------------- 
// Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных 
// чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).

function sum2 (n, m) {
    let sumEven = 0
    let sumOdd = 0
    for(let i = n; i <= m; i ++) {
        if (i % 2 == 0) {
            sumEven += i
        } else {
            sumOdd += i
        }
    }
    console.log(sumEven)
    console.log(sumOdd)
}
console.log("Задача:5")
sum2(2, 10)

// --------------- Задача6: --------------- 
// Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный
// элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по
// длине элементов - функция возвращает первый из этих элементов. 
// Пример: [ 'one', 'two', 'three' ] => 'three'

function longElement (stringArray) {
    let elementLength = 0
    let longestElement = null;
    if (stringArray.length == 0) {
        return null;
      }

    for(let i = 0; i < stringArray.length; i++) {
        if(stringArray[i].length > elementLength) {
            elementLength = stringArray[i].length
            longestElement = stringArray[i];
        }
    }
    return longestElement
}
console.log("Задача:6")
console.log(longElement([ 'one', 'two', 'three' , 'hallo']))
