'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    const output = `output ${age}`;
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Abode';
calcAge(1993);
