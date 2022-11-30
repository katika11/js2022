//- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//let str = "HTML JavaScript PHP";
//document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let str = "HTML JavaScript PHP";
// function insert_dash(str) {
//     return str.toUpperCase().split(' ').join('-');
// }
// document.write(insert_dash(str));


//- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let str = 'be happy for this moment';
// let result = str.charAt(0).toUpperCase() + str.slice(1);
// console.log(result);


//- Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = 'Harry..Potter';
// let split = n1.split('..');
// let nn = split.toString().replace(',',' ');
// console.log(nn);
//
// let n2 = 'Ron---Whisley';
// let split2 = n2.split('---');
// let nn2 = split2.toString().replace(',',' ');
// console.log(nn2);
//
// let n3 = 'Hermione__Granger';
// let split3 = n3.split('__');
// let nn3 = split3.toString().replace(',',' ');
// console.log(nn3);


// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// function rand (min,max) {
//  return Math.random() * (max - min) + min;
// }
// console.log(Math.round(rand(10,30)));


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort

//console.log(Math.round(Math.random() * 30));

//let getRandomNum = (min, max) => {
//     return Math.floor(Math.random() * (max - min) + min);
// }
// console.log(getRandomNum(30,70));

// let arr = [];
// for ( i = 0; i < 15; i++ ) {
//     let a = Math.round(Math.random() * 100);
//     arr.push(a);
//     arr.sort();
// }
// console.log(arr);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)

// let arr = [];
// for ( i = 0; i < 30; i++ ) {
//     let a = Math.round(Math.random() * 100);
//     arr.push(a);
// }
// console.log(arr);
// let arrFilter = arr.filter (elem => elem % 2 == 0);
// arrFilter.sort ();
// console.log(arrFilter);


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let str = 'be happy for this moment';
// let strArr = str.split (' ');
// console.log(' ' + strArr);
// let firstWord = strArr.map(word => word[0].toUpperCase() + word.substring(1));
// console.log(' ' + firstWord);
// let string = firstWord.join(' ');
// console.log(' ' + string);


// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
// наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

// let val = (str) => {
//     if (!str.startsWith('@') && str.includes('@') && str.includes('.', str.indexOf('@') + 3)) {
//         console.log('Valid');
//     } else {
//         console.log('Not valid');
//     }
// }
//
// val('someemail@gmail.com');
// val('someeMAIL@gmail.com');
// val('someeMAIL@i.ua');
// val('some.email@gmail.com');


//- є масив, відсортувати його в спадаючому порядку за кількістю елементів в полі modules

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// coursesArray.sort((a, b) => a.modules.length - b.modules.length);
// console.log(coursesArray);


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

// let str = "Астрономия это наука о небесных объектах";
// let count = 0;
// let symb = str.indexOf('о');
//
// while (symb !== -1) {
//     count++;
//     symb = str.indexOf('о', symb + 1);
// }
// console.log(count);


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

// let str = "Сила тяжести приложена к центру масс тела";
// let cutString = (str, n) => str.split(' ').splice(0, n).join(' ');
// console.log(cutString(str, 5));

