# modern-javascript-2

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
