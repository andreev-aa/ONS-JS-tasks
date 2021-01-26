//задача 1
function checkLength(a) {
    let b = a.length;
    if (b < 10) {
        console.log(`Слово "${a}" подходит!`);
    } else {
        console.log(`Слово "${a}" слишком длинное!`);
    }
}

checkLength('Последовательность');
