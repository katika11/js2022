//Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль.
let array = ['apple', 'kiwi', 'mango', 'avocado', 'melon', 123, 456, 789, -109, -790];
console.log(array);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);

//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'the catcher in the rye',
    pageCount: 234,
    genre: 'realistic fiction'
}
console.log(book1);
let book2 = {
    title: 'the war of the worlds',
    pageCount: 287,
    genre: 'science fiction'
}
console.log(book2);
let book3 = {
    title: 'brave new world',
    pageCount: 311,
    genre: 'dystopian novel'
}
console.log(book3);

//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age.
let books1 = {
    title: 'the catcher in the rye',
    pageCount: 234,
    genre: 'realistic fiction',
    authors: [ {name:'michael mitchell',age: 43} ]
}
console.log(books1);
console.log(books1.authors);
let books2 = {
    title: 'the war of the worlds',
    pageCount: 287,
    genre: 'science fiction',
    authors: [ {name:'herbert wells',age:37} ]
}
console.log(books2);
console.log(books2.authors);
let books3 = {
    title: 'brave new world',
    pageCount: 311,
    genre: 'dystopian novel',
    authors: [ {name:'aldous huxley',age:38} ]
}
console.log(books3);
console.log(books3.authors);

//Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name:'tomas',username:'tom',password:123456},
    {name:'henry',username:'hen',password:456890},
    {name:'lucas',username:'luc',password:347856},
    {name:'mason',username:'mas',password:678956},
    {name:'jacob',username:'jac',password:987656},
    {name:'logan',username:'log',password:456756},
    {name:'mateo',username:'mat',password:346656},
    {name:'james',username:'jam',password:763490},
    {name:'nolan',username:'nol',password:435623},
    {name:'robyn',username:'rob',password:981267},
]
console.log(users);
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

