// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = 'hello world';
// console.log(str);
// console.log(str.length);
//
// let str = 'lorem ipsum';
// console.log(str);
// console.log(str.length);
//
// let str = 'javascript is cool';
// console.log(str);
// console.log(str.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world';
// console.log(str1);
// let upperCase1 = str1.toUpperCase();
// console.log(upperCase1);
//
// let str2 = 'lorem ipsum';
// console.log(str2);
// let upperCase2 = str2.toUpperCase();
// console.log(upperCase2);
//
// let str3 = 'javascript is cool';
// console.log(str3);
// let upperCase3 = str3.toUpperCase();
// console.log(upperCase3);


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str1 = 'HELLO WORLD';
// console.log(str1);
// let upperCase1 = str1.toLowerCase();
// console.log(upperCase1);
//
// let str2 = 'LOREM IPSUM';
// console.log(str2);
// let upperCase2 = str2.toLowerCase();
// console.log(upperCase2);
//
// let str3 = 'JAVASCRIPT IS COOL';
// console.log(str3);
// let upperCase3 = str3.toLowerCase();
// console.log(upperCase3);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let str = ' dirty string   ';
// console.log(str);
// let s = str.trim();
// console.log(s);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// let arr = str.split(' ');
// console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let arr = [10,8,-7,55,987,-1011,0,1050,0];
// let array = arr.map(num => {
//     return String(num);
// });
// console.log(array);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];
// function sortNums(direction) {
//      if (direction < 1) {
//          nums.sort(function(a, b){return a - b});
//      }
//     if (direction > 1){
//          nums.sort(function(a, b){return b - a})
//      }
// }
// sortNums(0)
// console.log(nums)


// - є масив
// let coursesAndDurationArray = [
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// coursesAndDurationArray.sort(function (a,b){
//     if (a.monthDuration < b.monthDuration) {
//         return 1;
//     }
//     if (a.monthDuration > b.monthDuration) {
//         return -1;
//     }
//     if (a.monthDuration === b.monthDuration) {
//         return 0;
//     }
// });
// console.log(coursesAndDurationArray)
//
// let filter = coursesAndDurationArray.filter(function (item){
//     return item.monthDuration > 5;
// });
// console.log(filter);


// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
// //         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
// //     color:'', // 'red','black'
// // }

// let deck = [
//     {cardSuit: 'Spade', value: 6, color: 'Black'},
//     {cardSuit: 'Clubs', value: 6, color: 'Black'},
//     {cardSuit: 'Hearts', value: 6, color: 'Red'},
//     {cardSuit: 'Diamonds', value: 6, color: 'Red'},
//     {cardSuit: 'Spade', value: 7, color: 'Black'},
//     {cardSuit: 'Clubs', value: 7, color: 'Black'},
//     {cardSuit: 'Hearts', value: 7, color: 'Red'},
//     {cardSuit: 'Diamonds', value: 7, color: 'Red'},
//     {cardSuit: 'Spade', value: 8, color: 'Black'},
//     {cardSuit: 'Clubs', value: 8, color: 'Black'},
//     {cardSuit: 'Hearts', value: 8, color: 'Red'},
//     {cardSuit: 'Diamonds', value: 8, color: 'Red'},
//     {cardSuit: 'Spade', value: 9, color: 'Black'},
//     {cardSuit: 'Clubs', value: 9, color: 'Black'},
//     {cardSuit: 'Hearts', value: 9, color: 'Red'},
//     {cardSuit: 'Diamonds', value: 9, color: 'Red'},
//     {cardSuit: 'Spade', value: 10, color: 'Black'},
//     {cardSuit: 'Clubs', value: 10, color: 'Black'},
//     {cardSuit: 'Hearts', value: 10, color: 'Red'},
//     {cardSuit: 'Diamonds', value: 10, color: 'Red'},
//     {cardSuit: 'Spade', value: 'Jack', color: 'Black'},
//     {cardSuit: 'Clubs', value: 'Jack', color: 'Black'},
//     {cardSuit: 'Hearts', value: 'Jack', color: 'Red'},
//     {cardSuit: 'Diamonds', value: 'Jack', color: 'Red'},
//     {cardSuit: 'Spade', value: 'Queen', color: 'Black'},
//     {cardSuit: 'Clubs', value: 'Queen', color: 'Black'},
//     {cardSuit: 'Hearts', value: 'Queen', color: 'Red'},
//     {cardSuit: 'Diamonds', value: 'Queen', color: 'Red'},
//     {cardSuit: 'Spade', value: 'King', color: 'Black'},
//     {cardSuit: 'Clubs', value: 'King', color: 'Black'},
//     {cardSuit: 'Hearts', value: 'King', color: 'Red'},
//     {cardSuit: 'Diamonds', value: 'King', color: 'Red'},
//     {cardSuit: 'Spade', value: 'Ace', color: 'Black'},
//     {cardSuit: 'Clubs', value: 'Ace', color: 'Black'},
//     {cardSuit: 'Hearts', value: 'Ace', color: 'Red'},
//     {cardSuit: 'Diamonds', value: 'Ace', color: 'Red'}
// ];
// let filterAce = deck.filter(card => card.cardSuit === 'Spade' && card.value === 'Ace');
// console.log(filterAce);
//
// let filterSix = deck.filter(card => card.value === 6);
// console.log(filterSix);
//
// let filterRed = deck.filter(card => card.color === 'Red');
// console.log(filterRed);
//
// let filterDiamonds = deck.filter(card => card.cardSuit === 'Diamonds');
// console.log(filterDiamonds);

// let filterClubs = deck.filter(card => (card.cardSuit === 'Clubs' && card.value >= 9) ||
//     (card.cardSuit === 'Clubs' && typeof card.value === 'string'));
// console.log(filterClubs);

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// let reduce;
// reduce = deck.reduce((accum, value) => {
//     if (value.cardSuit === 'Spade') {
//         accum.spades.push(value);
//     } else if (value.cardSuit === 'Diamonds') {
//         accum.diamonds.push(value);
//     } else if (value.cardSuit === 'Hearts') {
//         accum.hearts.push(value);
//     } else if (value.cardSuit === 'Clubs') {
//         accum.clubs.push(value);
//     }
//     return accum;
// }, {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// });
// console.log(reduce);