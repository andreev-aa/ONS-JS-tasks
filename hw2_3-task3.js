//Задача №3 , урок 2_3
//Напишите функцию, генерирующую двумерный массив. 
//Количество вложенных масивов от 1 до arraysCount, и с числами внутри этих массивов от 1 до numbersCount.

function generate(numbersCount, arraysCount) {
//сначала создадим 1 пустой массив
    const array = [];

    // зададим нужное количество элементов
        for (let i = 0; i < arraysCount; i++) {
            array[i] = [];
            for (let j = 0; j < numbersCount; j++) {
                array[i][j] = j + 1; //это попытка обойти проблему лишнего пустого элемента вначале массива
            }
        }
    
        return array;
}

console.log( generate(5, 3) );
// выведет:
// [
//     [ 1, 2, 3, 4, 5 ]
//     [ 1, 2, 3, 4, 5 ]
//     [ 1, 2, 3, 4, 5 ]
// ]