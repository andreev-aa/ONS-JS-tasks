//- Используя циклы и логические операторы, напишите функцию реализующую логику игры FizzBuzz
// ([ссылка на вики](https://ru.wikipedia.org/wiki/Fizz_buzz)). Ваша задача правильно посчитать до 30.

let n = 30;
function fizzBuzz(i) {
    //сначала сделаем цикл вывода переменной от 1 до 30
    for (i = 1; i <= n ; i++) {
        //если кратно 3 и 5, то выводим  Fizz Buzz
        if ((i % 5 == 0) && (i % 3 == 0)) {
            console.log('Fizz Buzz');
        }
        //если кратно только 5,то выводим Buzz
        else if (i % 5 == 0) {
            console.log('Buzz');
        }
        //если кратно только 3,то выводим Fizz
        else if (i % 3 == 0) {
            console.log('Fizz');
        }
        //в остальных случаях просто i
        else {
            console.log(i);
        }
    }
}

fizzBuzz();