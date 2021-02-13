const stringIn = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const stringOut = `${stringIn.slice(13, 26)}${stringIn.slice(0, 13)}${stringIn.slice(39)}${stringIn.slice(26, 39)}`;

console.log(stringOut);
console.log('Mama govorit chto ya klassniy');


function rot13(strToEncrypt) {
    const newArray = [];

    for (let i = 0; i < strToEncrypt.length; i++) {
        const charIn = strToEncrypt[i];

        const foundIndex = stringIn.indexOf(charIn); //нашли индекс символа в строке алфавита
        const charOut = foundIndex !== -1 ? stringOut[foundIndex] :charIn;
        //проверяем indexOf на -1, если true - присвоим найденный символ из шифра, если False(цифра, пробел,спецсимвол) - присваиваем символ из оригинала

        newArray.push(charOut);
    }

    const result = newArray.join('')
    return result;
}

console.log(rot13('Mama govorit chto ya klassniy')); // ymym sahaduf otfa km wxmeezuk

/* function test() {
    console.log(rot13('mama') === 'znzn', 'mama', rot13('mama'));
    console.log(rot13('mama govorit') === 'znzn tbibevg');
    console.log(rot13('') === '');
    console.log(rot13('a') === 'n');
    console.log(rot13('A') === 'N');
    console.log(rot13('!') === '!');
}

test(); */