/**
 * @param {number} rows
 * @param {number} cols
 * @returns {string[][]} an array containing `rows` arrays of `cols` elements each.
 * Each element is the string "-".
 * @returns `null` if either argument is not a number
 * @returns `[]` if either argument is 0 or negative
 */
export function makeBoard(rows, cols) {
  if (typeof rows !== "number" || typeof cols !== "number") return null;
  if (rows <= 0 || cols <= 0) return [];

  const board = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push("-");
    }
    board.push(row);
  }
  return board;
}

//if statement1 checks if rows or cols are not numbers → return null
//is statement2 checks if rows or cols are zero or negative → return
// empty array []
//consent board is the main array that will hold all rows.
//for (let i = 0; i < rows; i++) → loop once per row.
//Inside the loop, const row = [] creates a new empty array for this row.
//for (let j = 0; j < cols; j++) → loop once per column in this row.
//row.push("-") → adds a "-" to the current row.

/**
 * A 'triangle' is 2D array where each inner array has one more element than the previous.
 *
 * For example, this is a 2x2 triangle:
 * [
 *   ["-"],
 *   ["-", "-"]
 * ]
 *

* @param {*} size - the number of rows in the triangle
 * @returns {string[][]} a triangle with `side` rows
 * @returns `null` if `size` is not a number
 * @returns `[]` if `size` is 0 or negative
 */

// TODO

export function makeTriangle(size) {
  if (typeof size !== "number") return null;
  if (size <= 0) return [];

  const triangle = [];
  for (let i = 1; i <= size; i++) {
    const row = [];
    for (let j = 0; j < i; j++) {
      row.push("-");
    }
    triangle.push(row);
  }
  return triangle;
}
//define function as makeTriangle with size as parameter
//consent triangle is the main array that will hold all rows.
//for (let i = 1; i < size; i++) → loop once per row.
//Inside the loop, const row = [] creates a new empty array for this row.
//for (let j = 0; j < i; j++) → loop once per column in this row.
//row.push("-") → adds a "-" to the current row.

/**
 * @param {string[]} words
 * @param {string} letter - a single character
 * @returns {number}  the number of times `letter` appears in all the words
 * @returns `0` if `letter is not a string
 */

// TODO

export function countLetter(words, letter) {
  let count = 0;
  for (const word of words) {
    for (const char of word) {
      if (char === letter) {
        count += 1;
      }
    }
  }
  return count;
}
// Input: an array of words (words) and a letter (letter)
//Output: total number of times that letter appears across all words.

//let count = 0 Creates a variable count to keep track of how many times the letter appears.
//Starts at 0 because we haven’t counted anything yet.

//for (const word of words) loops thru each word in the array (words)

//for (const char of word)
// Loops through each character in the current word.

//char === letter → checks if the current character is the letter we’re counting.
//count += 1 → adds 1 to the total if it matches.
