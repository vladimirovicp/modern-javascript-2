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

x = s.slice(0, 5); // Hello
x = s.slice(-11); // Hello World
x = s.slice(-11, -6); // Hello

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

## Math object

```javascript
let x;

x = Math.sqrt(9); // 3

x = Math.abs(-5); // 5

x = Math.round(4.2); // 4

x = Math.ceil(4.2); // 5 округляем в большую

x = Math.floor(4.9); // 4 округляем в меньшую

x = Math.pow(2, 3); // 8  возведение в степень

x = Math.min(4, 5, 3); // 3

x = Math.max(4, 5, 3); // 5

x = Math.random(); // от 0 до 1

x = Math.random() * 10; // от 0 до 9  например 1,669687238705285

x = Math.random() * 10 + 1; // от 1 до 10 например 1,669687238705285

x = Math.floor(Math.random() * 10 + 1); // от 1 до 10
x = Math.floor(Math.random() * 100 + 1); // от 1 до 100
```

## dates and time

```javascript
let d;

d = new Date();

d = new Date(2021, 6, 10); // месяц начинается с нуля  | Sat Jul 10 2021 00:00:00 GMT+0400 (GMT+04:00)

d = new Date(2021, 0, 10); // январь | Sun Jan 10 2021 00:00:00 GMT+0400 (GMT+04:00)

d = new Date(2021, 0, 10, 12, 30, 0); // добавил время | Sun Jan 10 2021 12:30:00 GMT+0400 (GMT+04:00)

d = new Date("2021-07-10"); // Sat Jul 10 2021 04:00:00 GMT+0400 (GMT+04:00)

d = new Date("2021-07-10T12:30:00"); // Sat Jul 10 2021 12:30:00 GMT+0400 (GMT+04:00)

d = new Date("07/10/2021"); // Sat Jul 10 2021 00:00:00 GMT+0400 (GMT+04:00)

d = new Date("07/10/2021 12:30:00"); // Sat Jul 10 2021 12:30:00 GMT+0400 (GMT+04:00)

d = new Date("2022-07-10"); // Sun Jul 10 2022 04:00:00 GMT+0400 (GMT+04:00)

d = Date.now(); // прошедшие милисекунды

d = new Date("07/10/2021");
d = d.getTime(); // 1625860800000

d = new Date("07/10/2021 12:30:00");
d = d.getTime(); // 1625905800000
d = d.valueOf(); // 1625905800000

d = new Date(1625905800000); // Sat Jul 10 2021 12:30:00 GMT+0400 (GMT+04:00)

d = Math.floor(Date.now() / 1000); // временая ветка в секундах
```

## Методы Date

```javascript
let x;
let d = new Date("10/11/2024 11:30:00");

x = d.toString(); // 'Fri Oct 11 2024 11:30:00 GMT+0400 (GMT+04:00)'

x = d.getTime(); // 1728631800000
x = d.valueOf(); // 1728631800000  в милисекундах

x = d.getFullYear(); // 2024 | год

x = d.getMonth(); // 9  не забывай, что месяц с нуля

x = d.getMonth() + 1; // 10 что бы получать правильный месяц

x = d.getDate(); // 11 | день

x = d.getHours(); // 11 | часов

x = d.getMinutes(); // 30 | минут

x = d.getSeconds(); //  0 | секунды

x = d.getMilliseconds(); // 0 | милисекунды

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`; // '2024-10-11'

x = Intl.DateTimeFormat("en-US").format(d); // '10/11/2024'
x = Intl.DateTimeFormat("en-GB").format(d); // '11/10/2024'
x = Intl.DateTimeFormat("ru-RU").format(d); // '11.10.2024'

x = Intl.DateTimeFormat("default").format(d); // формат моей страны '11.10.2024'

x = Intl.DateTimeFormat("default", { month: "long" }).format(d); // 'октябрь'

x = d.toLocaleString("default", { month: "short" }); // 'окт.'

x = d.toLocaleString("default", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  seconds: "numeric",
  timeZone: "America/New_York",
}); // 'пятница, 11 октября 2024 г. в 03:30'
```

# Массивы

```javascript
const number = [12, 45, 33, 29, 39];
```
