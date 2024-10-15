//const arr = [1, 2, 3, 4, 5];

//console.log(arr);
// [6, 5, 4, 3, 2, 1, 0];

const arr = [1, 2, 3, 4, 5];

arr.unshift(0);
arr.push(6);
arr.reverse();

console.log(arr);


//Объедините `arr1` и `arr2` в новый массив под названием `arr3` со следующими элементами:

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

let arr3;
// arr3 = arr1.concat(arr2.splice(1));
// arr3 = arr1.slice(0,4).concat(arr2);
// arr3 = [...arr1.splice(0,4), ...arr2];

arr3 = [...arr1, ...arr2];
arr3.splice(4,1);
console.log(arr3);

