// let age = +prompt('Введите возраст',);
// if (age >= 18) {
//     console.log('Dostup');
// } else if (age < 12) {
//     console.log('drugoy servis');
// } else if (18 > age && age > 12) {
//     console.log('zapret');
// } 
// else {
//     console.log('ne chislo');
// }

// let res = age >= 18 ? console.log('dostup') : 18 > age && age > 12 ? console.log('zapret') : age < 12 ? console.log('drugoy servis') : console.log('ne chislo');

let name = prompt('Введите имя',);
let surname = prompt('Введите фамилию',);
let age = +prompt('Введите возраст',);
let experience = +prompt('Введите стаж работы',);

if (age >= 30 && experience >= 3) {
    console.log('Поздравляю, вы приняты');
} else {
    console.log('К сожалению вы нам не подходите');
}