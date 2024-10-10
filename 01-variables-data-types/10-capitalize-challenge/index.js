

const myString = 'developer';
let myNewString;

//Возьмите переменную "myString" и введите первую букву слова с заглавной буквы, используя некоторые из методов, о которых мы говорили в предыдущем видео. Поместите результат в переменную с именем `myNewString`.

// Solution 1
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

// Solution 2
myNewString = myString[0].toUpperCase() + myString.substring(1);

// Solution 3
myNewString = `${myString[0].toUpperCase()}${myString.substring(1)}`;

// Solution 4
myNewString = myString.charAt(0).toUpperCase() + myString.slice(1);


console.log(myNewString); // 'Developer'