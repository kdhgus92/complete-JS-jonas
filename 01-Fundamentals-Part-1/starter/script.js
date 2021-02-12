/*
let js = "amazing";
console.log(40+8+23- 10);

console.log('Jonas');
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

//Variable name conventions
// let 3years = 3;
let jonas_matida = 'JM';
let _function = 27;
let name= "Jonas";

let person = 'jonas';
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';
//이게 낫다.

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);

//Naming convention
//camel case ex) firstName, lastName
//first_name_person : 


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true); 
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
// console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);
console.log(typeof null); // javascript bug


//var는 옛날


let age = 30;
age = 31;

//immutatable
const birthYear = 1991;
// birthYear = 1990;

//const는 반드시 초기화 필요
//const 선언이 권장된다. clean code
// const job;


//var는 쓰지마라 옛날것.
var job = 'programmer';
job = 'teacher';

//선언 없이도 되나 해라! 자동적으로 Global scope로 
lastName = 'Schmedtmann';
console.log(lastName);

//Math operators
const now = 2037;
const ageJonas = now-1991;
const ageSarah = now-2018;
console.log(ageJonas, ageSarah); 

console.log(ageJonas * 2, ageJonas / 10, 2**3);
// 2**3 means 2 to the power of 3 = 2*2*2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignement operators
let x = 10 + 5;
x+=10; // x = x+10 = 25
x*=4;  // x = x*4 = 100
x++; //x = x+1
x--; //x = x-1
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now-1991 > now-2018);

const now = 2037;
const ageJonas = now-1991;
const ageSarah = now-2018;

console.log(now-1991 > now-2018);
console.log(25-10-5);

let x, y;
x=y=25-10-5; //x=y=10
console.log(x,y);

const averageAge = (ageJonas+ageSarah)/2;
console.log(ageJonas, ageSarah,  averageAge);

// const massMark = 78;
// const massJohn = 92;
// const heightMass = 1.69;
// const heightJohn = 1.95;

const massMark = 95;
const massJohn = 85;
const heightMass = 1.88;
const heightJohn = 1.76;

const markBMI = massMark/heightMass**2;
const johnBMI = massJohn/(heightJohn*heightJohn);
const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year-birthYear) + ' years old '+job+'!';
console.log(jonas);

//template Literal - ES6, backtick
const jonasNew = `I'm ${firstName}, a ${year-birthYear} years old ${job}!`;
console.log(jonasNew);
console.log(`Just a regular strign ...`);

console.log('STirng with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);

const age = 15;
// const isOldEnough = age>=18;

if(age>=18) {
    console.log('Sarah can start driving License 🚗');
} else {
    const yearsLeft = 18-age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;
let century;

if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

/*
const massMark = 78;
const massJohn = 92;
const heightMass = 1.69;
const heightJohn = 1.95;

// const massMark = 95;
// const massJohn = 85;
// const heightMass = 1.88;
// const heightJohn = 1.76;

const markBMI = massMark/heightMass**2;
const johnBMI = massJohn/(heightJohn*heightJohn);
console.log(markBMI, johnBMI);

if(markBMI > johnBMI) {
    console.log(`Mark's BMI(${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI(${johnBMI}) is higher than Mark's (${markBMI})!`);
}
*/

/*
//type conversion - manual 
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear)+18);

console.log(Number('Jonas')); //fail
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion - Auto 
console.log('I am ' + 23 + ' years old');
// console.log('I am ' + String(23) + ' years old');
console.log('23'-'10'- 3);
console.log('23'+'10'+ 3);
console.log('23'*'2');
console.log('23'>'18');

let n = '1'+ 1; // '11'
n = n-1; // 10
console.log(n);
*/
/*
// 5 falsy value: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if(money) {
    console.log("Don't spend it all ;)");
} else {
    console.log("you should get a job!");
}

let height = 0;
if(height) {
    console.log('YE! Height is defined');
} else {
    console.log('Height is Undefined');
}
*/
/*
const age = '18';
if(age === 18) console.log('You just became an adult :D (strict)');
if(age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if(favourite === 23) { // '23'==23 , 23===23
    console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else if(favourite=== 9){
    console.log('9 is also a cool number');
} else {
    console.log('Number is not 23 or 7 or 9');
} 

if(favourite !== 23) console.log('Why not 23?');
*/
/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if(hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!')
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!')
} else {
    console.log('Someone else should drive...');
}
*/

// const avgDolphines = (96+108+89)/3
// const avgKoalas = (88+91+110)/3

// const avgDolphines = (97+112+101)/3
// const avgKoalas = (109+95+123)/3

/*
const avgDolphines = (97+112+90)/3
const avgKoalas = (109+95+95)/3

console.log(avgDolphines, avgKoalas)

if(avgDolphines > avgKoalas && avgDolphines >= 100) {
    console.log('Dolphines Win😁');
} else if (avgDolphines < avgKoalas && avgKoalas >= 100) {
    console.log('Koalas win😁');
} else if (avgDolphines === avgKoalas && 
    (avgDolphines>=100 && avgKoalas>=100)){
    console.log('Draw😁'); 
} else {
    console.log('No one wins😥');
}
*/
/*
const day = 'friday';

switch(day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;  
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}

if(day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day ==='tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday'){
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}
*/

/* 27
// expression
3+4 
1991 
true && false && !false

// statements
if(23>10) {
    const str = '23 is bigger'; 
}

const me = 'Jonas'
console.log(`I'm ${2037 -1991} years old ${me}`);
*/

/*
//28

const age = 23;
// age >= 18 ? console.log('I like to drink wine') 
// : console.log('I like to drink water');

const drink = age >= 18? 'wine' : 'water';
console.log(drink);

let drink2;
if(age >=18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18? 'wine' : 'water'}`);
*/

const bill = 430;
const tip = 50<=bill && bill<=300 ? bill*0.15 : bill*0.2;
console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill+tip}`);

// let tip;
// if(50 <= bill && bill <= 300) {
//     tip = bill*0.15;
// } else {
//     tip = bill*0.2;
// }
// console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill+tip}`);

