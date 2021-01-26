// Задача 1
function checkLength(a) {
    let b = a.length;
    if (b < 10) {
        console.log(`Слово "${a}" подходит!`);
    } else {
        console.log(`Слово "${a}" слишком длинное!`);
    }
}
checkLength('Последовательность');

// Задача 2
function concatTwoStrings(string1, string2) {
    const newString = `${string1}${string2}`;
    if (newString.length > 20) {
        return newString.substring(0, 20) + '...';
    } else {
        return newString;
    }
}

console.log(concatTwoStrings('На золтом крыльце ', '20aaa'));