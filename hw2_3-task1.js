//Напишите функцию, переворачивающую переданную строчку ( word —> drow )
let str = 'word';
function toRotateString(i) {
    return i.split('').reverse().join('');
}

console.log( toRotateString(str) ); //drow

//переведем строку в массив
//перезапишем массив в обратном порядке
//переведем новый массив в строку