/**
 * @param {number} num1
 * @param {number} num2
 * @returns {number} the product of `num1` and `num2`
 * @returns `NaN` if either argument is not a number
 */
export function multiply(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return NaN;
  }
  return num1 * num2;
}
//The export allows the function to be imported in another file
//function multiply defines a function named multiply
//(num1,num2) if just the numbers that are multiplied (the parameters)
//The if statement is basically saying if num1 OR num2 is not a number
//then return NaN (not a number)
//return num1 * num2 is returning if both numbers are actually numbers
/**
 

* @param {number} age
 * @returns {string} "Age not valid." if `age` is not a number
 * @returns {string} "You must be 18 or older to vote." if `age` is less than 18
 * @returns {string} "Who would you like to vote for?" if `age` is 18 or older
 */

// TODO

export function vote(age) {
  if (typeof age !== "number") {
    return "age not valid.";
  }

  if (age < 18) {
    return "You must be 18 or older to vote.";
  }
  return "Who would you like to vote for?";
}
// The export allows the function to be imported in another file
// function vote defines the vote function with one parameter (age)

// if statement is checking if the age is not a number. If it is a
//number then run the return if over 18 or under 18 .
//if its not a number then return "age is not valid"

/**
 * @param {string} str1
 * @param {string} str2
 * @returns {string} the concatenation of `str1` and `str2`
 * @returns `undefined` if either argument is not a string
 */

// TODO

export function concatenateStrings(str1, str2) {
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    return undefined;
  }
  return str1 + str2;
}
//This is taking two strings and combines them into one single string
//if either string is not a string it returns it undefined
//if both are a string them combine them
