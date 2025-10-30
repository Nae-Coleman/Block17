/**
 * You can assume that `n` is an integer.
 * @param {number} n
 * @returns {number} the sum of all integers from 1 to n, inclusive
 * @returns `0` if n is 0 or negative
 */
export function sumToN(n) {
  if (typeof n !== "number") return NaN;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * @param {number} n
 * @returns {number} the product of all integers from 1 to n, inclusive
 * @returns `NaN` if n is not a number
 * @returns `undefined` if n is negative
 * @returns `1` if n is 0
 */

// TODO

export function factorial(n) {
  if (typeof n !== "number") return NaN;
  if (n < 0) return undefined;

  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= i;
  }
  return product;
}
//This is defining a function factorial by multiplying all positive numbers
//whole numbers from 1 up to n. Ex. 3! = 1 * 2 * 3 = 6
//function factorial(n) the n means one input of the number u want to find the
//factorial of

//if statement is the typeof n do not equal a number then return NaN
//if it do come back a number and its less then 0 then come back undefined
// let the product = 1 is storing the running total of the multiplication
//It starts at 1 because when you multiply 1 doesnt change the number its neutral

//the for loop is looping thru the product until the product reaches n
//after the loop finishes the total is stored in product

// TODO

/**
 * @param {number} n
 * @returns {number[]} an array of integers from 1 to n, inclusive
 * @returns `null` if n is not a number
 * @returns `[]` if n is 0 or negative
 */

export function buildNArray(n) {
  if (typeof n !== "number") return null;
  if (n <= 0) return [];

  const output = [];
  for (let i = 1; i <= n; i++) {
    output.push(i);
  }
  return output;
}
//This builds an array of numbers starting at 1 and ending at n
//If the typeof n is not equal to a number then return null
// if n is less than or equal to 0 then return a empty array

//const output is creating a empty array named output
//If n isnt a number then return null
//if n is 0 or less return an empty array
//otherwise make a list of numbers from 1 and up and return it

// TODO

/**
 * @param {string[]} strings
 * @returns {string} the longest string in `strings`
 */

export function getLongestString(strings) {
  let longest = "";
  for (const string of strings) {
    if (string.length > longest.length) {
      longest = string;
    }
  }
  return longest;
}
//This function takes a array of strings and return the longest
//string in the array
//Defines the function with the name of the getLongestString with
//the parameter of strings

//let longest = "", is creating a variable names longest and starts and
//empty string ("") then will hold the longest string found so far as the
//loop goes on. for..of loop just goes thru every item in the strings
//array one by one

//string.length is telling how many characters in the string
//longest.length tells how many characters are in the current longest word
//found so far. with > means is greater than

// TODO

/**
 * @param {boolean[]} attendance - `true` means a student is present, `false` means a student is absent
 * @returns {number} the number of students present
 */

export function countPresent(attendance) {
  let present = 0;
  for (const isPresent of attendance) {
    if (isPresent) {
      present += 1;
    }
  }
  return present;
}

//function countPresent is being defined with the parameter of
//attendance that will have the array true or false
//let is creating a variable called present and start at 0
//that will keep track of how many people are present

//for of loop goes thru each item inside the parameter attendance array
//if statement if(isPresent) checks to see if the current value is true
//if its true it means the present was present
//if its false then the person was absent
//present += 1 just a counter to add 1
//then return the count

/**
 * In DNA strings, the symbols `A` and `T` are complements of each other,
 * and the symbols `C` and `G` are complements of each other.
 * A complementary strand is a string formed by the complement
 * of each nucleobase in the original string.
 *

// TODO

* @param {string} dna - a string of the symbols `A`, `T`, `C`, or `G`
 * @returns {string} the complementary DNA strand
 * @returns `null` if `dna` is not a string
 */

export function complementDNA(dna) {
  if (typeof dna !== "string") return null;

  let complement = "";
  for (const nucleobase of dna) {
    if (nucleobase === "A") {
      complement += "T";
    } else if (nucleobase === "T") {
      complement += "A";
    } else if (nucleobase === "C") {
      complement += "G";
    } else if (nucleobase === "G") {
      complement += "C";
    }
  }
  return complement;
}
//let complement ="" is creating a empty string named complement
//to store the results in.
// If it’s not a string, return null.
// Otherwise, go through each letter in the DNA sequence.
// For every A, write a T; for every T, write an A; for C, write G; for G, write C.
// When done, return the new string.
