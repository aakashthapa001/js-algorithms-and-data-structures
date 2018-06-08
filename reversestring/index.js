// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 3 - array helper: reuce()
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

// Solution 2 - For Loop
// function reverse(str) {
//   let reversed = '';

//   for (character of str) {
//     reversed = character + reversed;
//   }

//   return reversed;
// }

// Solution 1 - .split(), .reverse(), .join()
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

module.exports = reverse;
