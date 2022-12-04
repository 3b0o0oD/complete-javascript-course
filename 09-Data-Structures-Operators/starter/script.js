'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const resturant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPastsa: function (ing1, ing2, ing3) {
    console.log(`here is your ings ${ing1} ,${ing2} ${ing3}`);
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address = 'first avenue',
  }) {
    // console.log(
    //   `order received ! ${this.starterMenu[starterIndex]} and it will be delivered to ${address} at ${time}`
    // );
  },
  orderPizza: function (mainIng, ...otherING) {
    // console.log(mainIng);
    // console.log(otherING);
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: undefined, // Open 24 hours
      close: 24,
    },
  },
};
resturant.orderPizza('mash', 'onion', 'olives');
resturant.orderDelivery({
  time: '22:30',
  address: 'test address',
  mainIndex: 2,
  starterIndex: 2,
});

resturant.orderDelivery({
  address: 'just a new Address',
});

//const ingrs = [prompt('let\'s make pasta , ing1'),prompt('let\'s make pasta , ing2 '),prompt('let\'s make pasta, ing3')]
//console.log(ingrs);

//resturant.orderPastsa(...ingrs)
const { name, openingHours, categories } = resturant;
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;

// console.log(x, y, z);
// console.log(arr);

let [main, secondary] = resturant.categories;

//console.log(main, secondary);

const temp = main;

main = secondary;
secondary = temp;

//console.log(resturant.order(2, 0));

const [starterr, mainn] = resturant.order(2, 0);

const nested = [2, 3, [4, 5]];

const [l, , [n], v = 1] = nested;

//console.log(l, n, v);

//mutating variables

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

//console.log(a, b);

({ a, b } = obj);

//console.log(a, b);

//nested objects

const {
  fri: { open: o, close: c },
} = openingHours;
//console.log(o, c);

const {
  sat: { open: openn = [], close: closes },
} = openingHours;

//console.log(openn, closes);

/// Spreading Array by using     "..."+"arrayname"

const arr = [7, 8, 9];

const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

//console.log(badNewArr);

const newArr = [1, 2, ...arr];

//console.log(newArr);

const newMenu = [...resturant.mainMenu, 'new item'];
//console.log(newMenu);

// copy array

const mainMenuCopy = [...resturant.mainMenu];

//console.log(mainMenuCopy);

//join two array

const menu = [...resturant.mainMenu, ...resturant.starterMenu];

//console.log(menu);

//iterables are arrays, strings , maps,sets , NOT OBJECTS

const str = 'Abode';

const letters = [...str, '', 'is the Best'];

// console.log(...letters);

// objects
const newRestorant = { ...resturant, founder: 'Abode', founded: '1993' };

// console.log(newRestorant);

const resturantCopy = { ...resturant };

resturantCopy.name = 'restoranteeeeeee';

// console.log(resturantCopy);

// console.log(newRestorant);

// Spread operator used on the right side of =

const arra = [1, 2, ...[3, 4, 5]];
// console.log(arra);

// REST operator is used on the left side of =

const [s, x, ...others] = [1, 2, 3, 4, 5];
// console.log('a =\t' + a, ', b =\t' + b, 'and the others =\t' + others);

//objects

const { sat, ...weekdays } = resturant.openingHours;
// console.log(weekdays);

//function

const add = function (...i) {
  let sum = 0;

  for (let j = 0; j < i.length; j++) sum += i[j];

  // console.log(sum);
};

add(2, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 1, 1, 1);

const y = [23, 145, 54, 65, 3];

add(...y);

// OR Operator use any data type , return any data type , short-cercuiting

// console.log(3 || 'Abode'); // 3
// console.log('' || 'Abode'); //Abode
// console.log(undefined || 'Abode'); //Abode
// console.log(undefined || null); // null
// console.log(undefined || 0 || 'hello'); //hello
// console.log(undefined || 0 || false); //false >> if all the operands are falsey the return will be the last operand

resturant.guests = 23;

const guest1 = resturant.guests ? resturant.guests : 12;

const guests = 22;

const guest2 = resturant.guests || 11;
// console.log(guest2);

// AND operator

// console.log('-----AND-----');

// console.log(0 && 'Abode'); // 0 cuz the first operand is falsy

// console.log(1 && 'Abode'); // Abode  cuz the first operand is truthy so the output will be the last truthy operand
// console.log(1 && 'Abode' && 'test'); // test  cuz the first operand is truthy so the output will be the last truthy operand

//console.log(1 && null && 'test'); // null cuz the null is falsy so it will short-circuit the whole operation
/// means if there is a falsy operand it will be returned
// if all operands are truthy the return will be tha last truthy operand

// nullish : null and undefined are falsy // 0 and '' are truthy

const testNullish = resturant.numguest ?? 10; // 10 cuz numgest is undefined and the other number is truthy so will return truthy value

//console.log(testNullish);

const testNullish2 = resturant.numguest ?? null; // the output will be the last falsy operand if there is no truthy one
//console.log(testNullish2);

const rest1 = {
  name: ' rest 1 ',
  numguests:  0 ,
};
const rest2 = {
  name: ' rest 2 ',
  owner: ' Abode',
};
// OR assignment operator will assign  the attached value if the original value is falsy ///// need to be fixed 
// rest1.numguests ||= 10;
// rest2.numguests ||= 10;

//nullish assignment operator (null or undefined) // if the original value is falsy ////// need to be fixed 

rest1.numguests ??= 10;
// rest2.numguests ??= 10;

rest1.numguests = rest1.numguests || 10;
// rest2.numguests = rest2.numguests || 10;

console.log(rest1.numguests);
console.log(rest2.numguests);
