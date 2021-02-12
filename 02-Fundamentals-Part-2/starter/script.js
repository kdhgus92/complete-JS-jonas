'use strict'; 
// 몇가지 행동 제약 있고 에러 알려줌

/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;
// const if = 23;
*/

/*
function logger() {
    console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// console.log(fruitProcessor(5,0));
const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

const num = Number('23');
*/
/*
//Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);
*/
/*

// Arrow Function

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirment = (birthYear, firstName) => {
    const age = 2037-birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirment(1991, 'Jonas'));
console.log(yearsUntilRetirment(1980, 'Bob'));
*/
/*
// Fuction call other Function

function cutFruitPieces(fruit) {
    return fruit*4;
}

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple
     and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2,3));
*/

/*

const calcAge = function (birthYear) {
    return 2037-birthYear;
}

const yearsUntilRetirment = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
    // return 
}
console.log(yearsUntilRetirment(1991, 'Jonas'));
console.log(yearsUntilRetirment(1950, 'Mike'));
*/

/*
const calcAverage = (a,b,c) => (a+b+c)/3;

let scoreDolphines = calcAverage(44,23,71);
let scoreKoalas = calcAverage(65,54,49);

const checkWinner = function(avgDolphins, avgKoalas) {
    if(avgDolphins >= avgKoalas*2) {
        console.log(`Dolphines win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins*2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No one wins...(${avgDolphins} vs. ${avgKoalas})`);
    }
}

checkWinner(scoreDolphines, scoreKoalas);
checkWinner(576, 111);

scoreDolphines = calcAverage(85,54,41);
scoreKoalas = calcAverage(23,34,27);
checkWinner(scoreDolphines, scoreKoalas); 
*/

/*
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// const years = new Array(1991,1984,2008,2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = 'Jay';
console.log(friends);

// friends = ['Bob','Alice'];

const firstName = 'jonas';
const jonas = [firstName, 'Schedtmann',2037-1991,'teacher',friends];
console.log(jonas);
console.log(jonas.length);

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990,1967,2002,2010,2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);
console.log(age1,age2,age3);

const ages = [calcAge(years[0]), calcAge(years[1]),calcAge(years[years.length-1])];
console.log(ages);
*/

/*
// Add elements
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John')
console.log(friends);

// Remove elements 
friends.pop(); // last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

// in ES6
friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));

if (friends.includes('Steven')) {
    console.log('You have afriends called Steven');
}
*/

/*
const calcTip = function(billVal) {
    // if(billVal>=50 && billVal<=300) {
    //     return billVal*0.15;
    // } else {
    //     return billVal*0.2;
    // }
    return billVal>=50 && billVal<=300 ? billVal*0.15 : billVal*0.2;
}

console.log(calcTip(100));

const bills = [125,555,44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];

console.log(bills,tips,total);
*/

/*
const jonasAray = [
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'teacher',
    ['Michael','Peter','Steven']
];
*/

/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037-1991,
    job: 'teacher',
    friends: ['Michael','Peter','Steven']
}; //object literal Syntax

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first'+nameKey]);
console.log(jonas['last'+nameKey]);
console.log(jonas[`last${nameKey}`]);
// console.log(jonas.'last'+nameKey);

const interestedIn = prompt('What do you want to? Choose between...');

if(jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! What do you want to? Choose between...');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

//chanllenge 
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, 
and his best friend is called ${jonas.friends[0]}`);
*/

/*
// object method

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael','Peter','Steven'],
    hasDriversLicense: true,
    
    // It's an expression not a declaration
    // calcAge: function(birthYear) {
    //     return 2037-birthYear;
    // }

    // calcAge: function() {
    //     // console.log(this);
    //     return 2037-this.birthYear;
    // }

    calcAge: function() {
        this.age = 2037-this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} a ${this.calcAge()}-years old ${this.job}, and has ${this.hasDriversLicense? 'a':'no'} driver's licence.`;
    }
};

// const calcAge = function(birthYear) {
//     return 2037-birthYear;
// }

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
// console.log(jonas['calcAge']());

//Challenge
//"jonas is a 46-years old teacher, and has a driver's licence"
console.log(jonas.getSummary());
*/

/*
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function() {
        this.bmi = this.mass/this.height**2;
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function() {
        this.bmi = this.mass/this.height**2;
        return this.bmi;
    }
}

if(john.calcBMI() > mark.calcBMI()) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`);
} else {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
}
*/
/*

// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');
// console.log('Lifting weights repetition 9');
// console.log('Lifting weights repetition 10');

// for loop keeps runnint while condition is TRUE
for(let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️`);
}
*/
/*

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'teacher',
    ['Michael','Peter','Steven'],
    true
];

const types = [];

// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[5] does not exist

for(let i=0; i < jonas.length ; i++) {
    // Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    // Filling types arry
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i=0; i<years.length ;i++) {
    ages.push(2037-years[i]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS --- ')
for(let i=0; i < jonas.length ; i++) {
    if(typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER --- ')
for(let i=0; i < jonas.length ; i++) {
    if(typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}
*/

/*
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'teacher',
    ['Michael','Peter','Steven'],
    true
];

// 0,1, ..., 4
// 4,3, ..., 0

for(let i=jonas.length-1; i>=0; i--) {
    console.log(i, jonas[i]);
}

for(let exercise=1; exercise < 4; exercise++) {
    console.log(`--------Starting exercise ${exercise}`);

    for(let rep=1; rep<6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} `)
    }
}
*/

// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️`);
// }

/*

let rep = 1;
while(rep <= 10) {
    // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) +1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) +1;
    if(dice === 6) console.log('Loop is qbout to end...');
}
*/


const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const totals = [];

const calcTip = function(billVal) {
    return billVal>=50 && billVal<=300 ? billVal*0.15 : billVal*0.2;
}

for(let i=0; i<bills.length; i++) {
    const tip = calcTip(bills[i]); // 매번 새로운 변수 할당 const로 해도 됨. 
    tips.push(tip); // tip변수 없으면 연산이 늘어남. 
    totals.push(bills[i]+tip);
}

console.log(bills, tips, totals);

const calcAverage = function(arr) {
    let sum = 0;
    for(let i=0; i<arr.length; i++) {
        // sum=sum+arr[i];
        sum+=arr[i];
    }
    // console.log(sum);
    return sum/arr.length;
}
console.log(calcAverage([2,3,7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));