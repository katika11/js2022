//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User (id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let arr = [];
// let user1 = new User(1, 'vasya', 'popo', 'pop@mail', 89999986);
// let user2 = new User(2, 'kolya', 'fpfpf', 'fjg@mail', 9000);
// let user3 = new User(3, 'olya', 'sorot', 'fgkf@mail', 89996);
// let user4 = new User(4, 'petya', 'oooo', 'rgf@mail', 8978996);
// let user5 = new User(5, 'inna', 'asad', 'oooo@mail', 8995496);
// let user6 = new User(6, 'kostja', 'tytuu', 'pppp@mail', 89996000);
// let user7 = new User(7, 'pavlo', 'gjjuk', 'sdsfg@mail', 78989996);
// let user8 = new User(8, 'anna', 'wert', 'uuku@mail', 4389996);
// let user9 = new User(9, 'misha', 'iopiu', 'kjkkkk@mail', 5689996);
// let user10 = new User(10, 'sveta', 'efegt', 'wdwfe@mail', 8989996);
// arr.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10)
// console.log(arr)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let newArray = arr.filter(function (item){
//     return (item.id % 2 === 0)
// });
// console.log(newArray)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let newArray = arr.sort().reverse();
// console.log(newArray)


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor(id, name, surname, email, phone, orders) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.orders = orders;
//     }
// };
// let arr = [];
// let client1 = new Client(1, 'vasya', 'popo', 'pop@mail', 89999986,['1', '2', '3']);
// let client2 = new Client(2, 'kolya', 'fpfpf', 'fjg@mail', 9000, ['1', '2']);
// let client3 = new Client(3, 'olya', 'sorot', 'fgkf@mail', 89996, ['1']);
// let client4 = new Client(4, 'petya', 'oooo', 'rgf@mail', 8978996, ['1', '2', '3', '4']);
// let client5 = new Client(5, 'inna', 'asad', 'oooo@mail', 8995496, ['1', '2']);
// let client6 = new Client(6, 'kostja', 'tytuu', 'pppp@mail', 89996000, ['1', '2', '3', '4','5']);
// let client7 = new Client(7, 'pavlo', 'gjjuk', 'sdsfg@mail', 78989996, ['1', '2', '3']);
// let client8 = new Client(8, 'anna', 'wert', 'uuku@mail', 4389996, ['1', '2']);
// let client9 = new Client(9, 'misha', 'iopiu', 'kjkkkk@mail', 5689996, ['1', '2', '3']);
// let client10 = new Client(10, 'sveta', 'efegt', 'wdwfe@mail', 8989996, ['1', '2']);
// arr.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);
// console.log(arr)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let newArray = arr.sort(function (a, b){
//     return a.orders.length - b.orders.length;
// });
// console.log(newArray)


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, manufacturer, year, maxSpeed, engine, pilot) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//     this.drive = function () {
//         return `їдемо зі швидкістю ${this.maxSpeed} на годину`
//     };
//     this.info = function () {
//         return `model - ${this.model}, manufacturer - ${this.manufacturer}, year - ${this.year}, maxSpeed - ${this.maxSpeed}, engine - ${this.engine}`
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = newSpeed;
//     };
//     this.changeYear = function (newValue){
//         this.year = newValue;
//     };
//     this.addDriver = function (driver) {
//         this.pilot = driver
//     };
// }
// let car1 = new Car('tesla', 'usa', 2012, 300, 10000);
// console.log(car1);
// console.log(car1.drive());
// console.log(car1.info());
// car1.increaseMaxSpeed(400);
// console.log(car1);
// car1.changeYear(2013);
// console.log(car1)
// let driver = {
//     name: 'vasya',
//     age: 31
// };
// car1.addDriver(driver)
// console.log(car1)



// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
// constructor(model, manufacturer, year, maxSpeed, engine, pilot) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//
//     this.drive = function () {
//         return `їдемо зі швидкістю ${this.maxSpeed} на годину`
//     };
//     this.info = function () {
//         return `model - ${this.model}, manufacturer - ${this.manufacturer}, year - ${this.year}, maxSpeed - ${this.maxSpeed}, engine - ${this.engine}`
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = newSpeed;
//     };
//     this.changeYear = function (newValue){
//         this.year = newValue;
//     };
//     this.addDriver = function (driver) {
//         this.pilot = driver
//     };
// }
// }
// let car1 = new Car('tesla', 'usa', 2012, 300, 10000);
// console.log(car1);
// console.log(car1.drive());
// console.log(car1.info());
// car1.increaseMaxSpeed(400);
// console.log(car1);
// car1.changeYear(2013);
// console.log(car1)
// let driver = {
//     name: 'vasya',
//     age: 31
// };
// car1.addDriver(driver)
// console.log(car1)


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// class Cinderella {
//     constructor(name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
// };
// let array = [];
// let cinderella1 = new Cinderella('anna', 23, 38);
// let cinderella2 = new Cinderella('olya', 25, 37);
// let cinderella3 = new Cinderella('sofi', 21, 39);
// let cinderella4 = new Cinderella('ira', 27, 36);
// let cinderella5 = new Cinderella('katya', 25, 37);
// let cinderella6 = new Cinderella('tanya', 28, 38);
// let cinderella7 = new Cinderella('olya', 20, 38);
// let cinderella8 = new Cinderella('anna', 22, 35);
// let cinderella9 = new Cinderella('inna', 29, 36);
// let cinderella10 = new Cinderella('oksana', 30, 38);
// array.push(cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10);
// console.log(array);
//
// class Prince {
//     constructor(name, age, sizePrinces) {
//         this.name = name;
//         this.age = age;
//         this.sizePrinces = sizePrinces;
//     }
// };
// let prince = new Prince('vasya', 27, 35);
//  for(let i = 0; i < array.length; i++){
//  if(i.size === this.sizePrinces){
//      }
//      console.log()
//  }


