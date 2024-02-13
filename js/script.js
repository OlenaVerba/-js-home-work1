// FullStack-розробник 5.0
// Модуль №21. Введення в Java Script
// JS HomeWork1

// Домашня робота 1  JS
//***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log
// (яка повинна показати “Іван”).

// let name1 = 'Іван';
// let city = 'Kyiv';
// city = name1;
// console.log(city);

//***2***
//Який буде результат виконання скрипта?
// let name2 = 'Olga';

// console.log(`привіт ${1}`); // привіт 1
// console.log(`привіт ${'name2'}`); // привіт name
// console.log(`привіт ${name2}`); // привіт Olga

//***3***
//Видобути число зі змінних
// let a = '5';
// let b = '13cvb';
// let c = '12.9sxdcfgv';

// console.log(Number(a)); //5
// console.log(parseInt(b)); //13
// console.log(parseFloat(c)); //12.9

// // вивести в консоль тип
// console.log(typeof Number(a)); //number
// console.log(typeof parseInt(b)); //numder
// console.log(typeof parseFloat(c)); //numder

//***4***
//Зробіть, щоб 0.1 + 0.2 = 0.3

// console.log((0.1 * 10 + 0.2 * 10) / 10);

//***5**
//Поверніть найбільше число с набору 20, 10, 50, 40

// console.log(Math.max(20, 10, 50, 40));

//***6**
//Поверніть випадкове число в діапазоні від 2 до 4

// console.log(Math.random() * (4 - 2) + 2);

// Формула console.log(Math.random() * (max - min) + min);

//***7**
//дізнатись довжину message

// const message = 'Welcome to Bahamas!';

// console.log(message.length); //19

//***8**
//вивести в консоль message великими літерами

// const message = 'Welcome to Bahamas!';
// console.log(message.toUpperCase()); //WELCOME TO BAHAMAS!

//***9**
// створити пустий об*єкт
// додати туди ім'я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers
// вивести результат в консоль

// let player = {};
// player.name = 'Marta';
// player.age = 35;
// player.city = 'Lviv';
// console.log(player);
// delete player.city;
// player['like flowers'] = true;
// console.log(player);

//***10**
// За допомогою циклу “for...in” вивести в консоль ключі
// і значення об'єкта

// let player = {
//   name: 'Marta',
//   age: 35,
//   city: 'Lviv',
//   ['like dance']: true,
// };

// for (key in player) {
//   console.log(key);
//   console.log(player[key]);
// }
