# modern-javascript-2

https://github.com/bradtraversy/javascript-sandbox

## Преобразование типов

### Преобразовать строку в число

```javascript
let amount = "100";

amount = parseInt(amount);
amount = +amount;
amount = Number(amount);
```

### Преобразовать число в строку

```javascript
let amount = 100;

amount = amount.toString();
amount = String(amount);
```

### Преобразовать строку в десятичное число

```javascript
let amount = "99.5";

amount = parseFloat(amount);
```

### Преобразовать число в булевое значение

```javascript
let amount = 10;

amount = Boolean(amount);
```

## Операторы

```javascript
let x;

x = 5 + 5;
x = 5 - 5;
x = 5 * 5;
x = 5 / 5;
x = 7 % 5; // 2
```

## Concatenation (объединения)

```javascript
let x;
x = "Hello" + " " + "World";
```

## Возведение в степень

```javascript
x = 2 ** 3; // 8
```

## Increment

```javascript
let x;
x = 1;
x = x + 1;
x++;
```

## Decriment (вычитание)

```javascript
let x;
x = 1;
x = x - 1;
x--;
```

## Операторы присваивания

```javascript
let x;
x = 10;
x += 5; //15
x = x + 5;

x = 10;
x -= 5; // 5
x *=5;
x /=5;
x %/5 = 5;
x **= 5;
```

## Операторы сравнения

```javascript
let x;

x = 2 == 2; // true
x = 2 == 4; // false

x = 2 === "2"; // true
x = 2 === "2"; // false

x = 2 != 2; // false
x = 2 != "2"; // false

x = 2 !== "2"; // true

x = 10 > 5; // true
x = 10 < 5; // false
x = 10 >= 5; // true
x = 10 <= 5; // false
```

## Преобразование типов

```javascript
let x;
x = 5 + "5"; //55 string  - не явное преобразование типов

x = 5 + Number("5"); // 10 number

x = 5 * "5"; // 25 number | Умнодение строк не имеет смыла

x = 5 + null; // 5 number

x = Number(null); // 0 number

x = Number(true); // 1 number
x = Number(false); // 0 number

x = 5 + true; // 6 nember

x = 5 + undefined; // NaN number
```

# String

## Шаблонные литералы (строковые шаблоны)

```javascript
let x;
const name = "John";
const age = 30;

x = `Hello, my name is ${name} and I am ${age} years old`;
```

## Свойства и методы

```javascript
let x;
const s = "Hello World";

x = s.length; // 11

x = s[0]; // H

x = s.__proto__; // увидим свойство и методы
```

```javascript
let x;
const s = new String("Hello World");

x = s.charAt(0); // H

x = s.indexof("H"); // 0

x = s.substring(0, 4); // Hell
x = s.substring(2, 5); // llo

x = slice(0, 5); // Hello
x = slice(-11); // Hello World
x = slice(-11, -6); // Hello

x = "            Hello World";
x = x.trim(); // Hello World

x = s.replace("World", "John"); // Hello John

x = s.includes("Hello"); // true
x = s.includes("Helli"); // false

x = s.valueOf(); // Hello John

x = s.split(); // ['Hello World']
x = s.split(" "); // ['Hello', 'World']
x = s.split(""); // ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']
```

## number

```javascript
let x;
const num = new Number(5);

x = num.toString(); // '5'
x = num.toString().lenght; // 1
x = num.toFixed(2); // 5.00 string
```

```javascript
let x;
const num = new Number(5.4527);

x = num.toPrecision(2); // '5.5'
x = num.toExponential(2); // '5.45e+0'
```

```javascript
let x;
const num = new Number(5);

x = num.toLocaleString("en-US"); // 5
x = num.toLocaleString("ar-EG"); // '٥'   - египет

x = Number.MAX_VALUE; // 1.7976931348623157e+308
x = Number.MIN_VALUE; // 5e-324
```
