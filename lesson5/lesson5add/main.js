// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function foo(a, b, c) {
//     if (a > b && b < c) {
//         console.log(b);
//     } else if (b > a && a < c) {
//         console.log(a);
//     } else if (b > c && c < a) {
//         console.log(c);
//     } else {
//         console.log('Error');
//     }
// }
// foo(1,2,3);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function foo(a, b, c) {
//     if (a > b && a > c) {
//         console.log(a);
//     } else if (b > a && b > c) {
//         console.log(b);
//     } else  if (c > a && c > b) {
//         console.log(c);
//     } else {
//         console.log('error');
//     }
// };
// foo (35, 678, 13);

// - створити функцію яка повертає найбільше число з масиву

// let arr = [3, 5, 7, 9, 13, 15, 17, 29];
// function max(arr) {
//     return arr.reduce((a, b) => a > b ? a : b);
// }
// console.log(max(arr));

// - створити функцію яка повертає найменьше число з масиву

// let arr = [3, 5, 7, 9, 13, 15, 17, 29];
// function min(arr) {
//     return arr.reduce((a, b) => a < b ? a : b);
// }
// console.log(min(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arr = [3, 5, 7, 9, 13, 15, 17, 29];
// function foo(array) {
//     let sum = 0;
//     for (const item of array) {
//         sum += item;
//     }
//     return sum;
// };
// console.log(foo(arr))

// - Дано натуральное число n. Выведите все числа от 1 до n.

// let n = 13;
//     for (let i = 1; i <= n; i++) {
//         console.log(i);
//     };

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B,
// или в порядке убывания в противном случае.

//     function foo(a,b) {
//     if (a < b) {
//         for (let i = a; i <= b ; i++) {
//             console.log(i);
//         }
//     } else if (a > b) {
//         for (let i = a; i >= b ; i--) {
//             console.log(i);
//         }
//     }
// }
// foo(10,17);


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// let arr  = [9,8,0,4];
// function foo(array,num) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i + 1]) {
//             let temp = array[num];
//             array[num] = array[num + 1];
//             array[num + 1] = temp;
//         } else  {
//             console.log('Error');
//         }
//     }
//     return array;
// }
//
// console.log(foo(arr,3));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// let arr = [1,0,6,0,3];
// function foo(array) {
//     let newArray = [];
//     let counter = 0;
//     let index = 0;
//     for (let i = 0; i < array.length; i++) {
//         array[i] ? newArray[index++] = array[i] : counter++;
//     }
//     let num = newArray.length;
//     for (let i = num; i < num + counter; i++) {
//         newArray[i] = 0;
//     }
//     return newArray;
// }
// console.log(foo(arr));
