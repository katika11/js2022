//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function square (a,b) {
//     let result = a*b;
//     return result;
// }
// let x = square ( 10, 20 );
// console.log(x)

//- створити функцію яка обчислює та повертає площу кола з радіусом r
// let squareCircle = (r) => Math.PI * Math.pow(r, 2);
// console.log(squareCircle(7));

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let squareCilindr = (h, r) => Math.PI * 2 * r * h;
// console.log(squareCilindr(20,30));

//- створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [1,2,3];
// function foo(array) {
//     for (let item of array) {
//         console.log(item);
//     }
// }
// foo(arr);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragraph(text) {
//     document.write(`<p>${text}</p>`);
// }
// paragraph('hello!');

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function foo(text) {
//     document.write(`<ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//     </ul>`)
// }
// foo ('hello!')

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function foo(text,num) {
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`)
//     }
// foo('hello!', '7');

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr = [3,56,true,79,false,13,'str'];
// function foo(array) {
//     document.write(`<ul>`)
//     for (const item of array) {
//     document.write(`<li>${item}</li>`);
//     }
//     document.write(`</ul>`)
// }
// foo(arr)

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let arr = [
//     {id: 1, name: 'vasya', age: 27},
//     {id: 2, name: 'olya', age: 31},
//     {id: 3, name: 'kolya', age: 29},
// ]
// let itemArr = function (array) {
//     for (let item of array) {
//       document.write(`<div>${item.id}--${item.name}--${item.age}</div>`);
//     }
// }
// itemArr(arr);

//- створити функцію яка повертає найменьше число з масиву
// let arr = [3,7,1,98,-7,43];
// let minItem = function (array) {
//     let min = array[0];
//     for (let item of array) {
//     if (item < min) {
//         min = item
//     }
//     }
//     return min
// }
// console.log(minItem(arr))

//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr = [3,7,10,30,27];
// let foo = (array) => {
//     let sum = 0;
//     for (let item of array) {
//         sum += item;
//     }
//     return sum;
// }
// let number = foo(arr);
// console.log(number);