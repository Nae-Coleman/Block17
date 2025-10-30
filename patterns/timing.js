/**
 * @param {string[]} playlist
 * @param {string} song
 * @returns {boolean} whether `song` is in `playlist`
 * @returns `false` if `playlist` is empty
 */
export function isSongInPlaylist(playlist, song) {
  for (const songInPlaylist of playlist) {
    if (songInPlaylist === song) {
      return true;
    }
  }
  return false;
}
// define the function isSongInPlaylist(playlist, song) with playlist and song as the paramaters

//(const songInPlaylist of playlist) is This is a for...of loop.
//It goes through each song in the playlist one by one.

//songInPlaylist === song → checks if the current song in the playlist is the same as the song we’re looking for.
//If it matches → return true immediately, because we found it.
//Returning immediately stops the loop as soon as a match is found.

// If the loop finishes and never found the song, it returns false.
/**
 * @param {number[]} numbers
 * @returns {boolean} whether all `numbers` are even
 * @returns `undefined` if `numbers` is empty
 */

// TODO

export function isAllEven(numbers) {
  if (numbers.length === 0) return undefined;

  for (const number of numbers) {
    if (number % 2 !== 0) {
      return false;
    }
  }
  return true;
}
// define the function isAllEven with the number parameter

//if the array is empty then make it undefine,
//otherwise the numbers.length tells how many items in a array

//for (const number of numbers) goes thru each number of the array

//number % 2 → gives the remainder when dividing by 2.
//number % 2 !== 0 → true if the number is odd.
//If any number is odd, the function immediately returns false

//If the loop finishes without finding any odd numbers, then all numbers are even, so it returns true.

/**
 * You're in charge of a group camping trip. You've packed supplies in a backpack,
 * and each item in the backpack has a category, such as "food", "equipment", or "clothes".
 * Each item in the "food" category is enough to feed one person.
 *

 * @param {{category: string}[]}} backpack
 * @param {number} people
 * @returns {boolean} whether there is enough food in the backpack to feed everyone
 */

// TODO

export function haveEnoughFood(backpack, people) {
  if (people === 0) return true;
  if (backpack.length === 0) return false;

  let food = 0;
  for (const item of backpack) {
    if (item.category === "food") {
      food += 1;
    }
    if (food >= people) return true;
  }
  return false;
}
//define function named haveEnoughFood with parameter backpack and people

//if person equals 0 then return true means no people then you dont need food

//is the backpack.length equals 0 then return false means if the backpack dont
//have any items then you cant feed people function becomes false

//initiazling the food counter with let food = 0
//starting at 0 to keep track of how much food in the backpack

//for..of loop goes thru the item of backpack , means going
//thru one by one

//item.category equals food then add it to the count.

//if (food >= people) return true
//After counting each food item, it checks if the food count is enough for all people.
//If yes → return true immediately, no need to check the rest of the backpack.
