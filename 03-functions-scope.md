## Параметры по умолчанию

```javascript
function registerUser(user = "Bot") {
  return user + " is registered";
}

console.log(registerUser());
```

## Rest Parameters Параметры остатки

```javascript
function sum(...numbers) {
  return numbers;
} // [1,2,3]

console.log(sum(1, 2, 3));
```

## Rest Parameters Параметры остатки

```javascript
function sum(...numbers) {
  let total = 0;

  for (const num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3));
```

## Object as params

```javascript
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
  id: 1,
  name: "John",
};

loginUser(user);
```

```javascript
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in`;
}

loginUser({
  id: 1,
  name: "John",
});
```

## Передача массивов в виде параметров

```javascript
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];

  console.log(item);
}
```
