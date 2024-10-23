//Step 1

// Создайте массив объектов с именем library. 
// Добавьте 3 объекта со свойствами title, author, status. 
// Title и author должны быть строками (любое значение, которое вы хотите), 
// а status должен быть другим объектом со свойствами own, reading и прочитанный. 
// Все они должны быть логическими значениями. 
// Для всех статусов установите значение own равным true, а значение reading и значение read для false.

const library = [
    {
        title: 'title1',
        author: 'author1',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
        {
        title: 'title2',
        author: 'author2',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
        {
        title: 'title2',
        author: 'author2',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
];

console.log('Step 1',library)

// Step 2

//Вы закончили чтение всех книг. 
//Установите значение read для всех из них равным true. 
//Не редактируйте исходный объект. Задайте значения, используя точечную запись.

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log('Step 2',library)

// Step 3

// Деструктурируйте название из первой книги и переименуйте переменную в firstBook

const { title: firstBook  } = library[0];


console.log('Step 3',firstBook)

// Step 4

let libraryJSON = JSON.stringify(library);

console.log('Step 4', libraryJSON)