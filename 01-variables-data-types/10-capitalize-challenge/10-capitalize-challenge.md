# Capitalize Challenge (Вызов капитализации)

**Instructions**:

Take the variable `myString` and capitalize the first letter of the word using some of the methods that we talked about in the last video. Put the result in a variable called `myNewString`.
Возьмите переменную "myString" и введите первую букву слова с заглавной буквы, используя некоторые из методов, о которых мы говорили в предыдущем видео. Поместите результат в переменную с именем `myNewString`.

Create multiple solutions if you would like.
При желании создайте несколько решений.

**Expected Result:**

```JavaScript
const myString = 'developer';

console.log(myNewString); // 'Developer'
```

**Hints:**

1. You can use the `charAt()` method as well as `string[index]` to get the character at a specific index.
   Вы можете использовать метод `charAt()`, а также `string[index]`, чтобы получить символ с определенным индексом.
2. The `.toUpperCase()` method will make the entire string uppercase
   Метод `.toUpperCase()` преобразует всю строку в верхний регистр
3. `substring()` or `slice()` will return a specific portion of a string
   `substring()` или `slice()` вернут определенную часть строки

<details>
  <summary>Click For Solution</summary>
  
  There are many ways to do this. Let's take a look at a few

```JavaScript
// Solution 1
const myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

// Solution 2 (Uses string[0] instead of string.charAt(0))
const myNewString = myString[0].toUpperCase() + myString.substring(1);

// Solution 3 (Uses template literal and slice())
const myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;
```

In all of these, we get the first character of the string, then we use the **substring()** or **slice()** method to get the rest of the string. We then use the **toUpperCase()** method to capitalize the first character and then we concatenate the result with the rest of the string.

</details>
