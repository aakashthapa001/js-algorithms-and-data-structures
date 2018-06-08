// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution 2 - array helper: .every()
function palindrome(str) {
  // Lowercase the string and use the RegExp to remove unwanted characters from it
  // const re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
  // const lowerStr = str.toLowerCase().replace(re, '');
  
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

// Solution 1 - .split(), .reverse(), .join()
// function palindrome(str) {
  // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
  // const re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
  // const lowerStr = str.toLowerCase().replace(re, '');
  // const reversed = str.split('').reverse().join(''); 
// }

module.exports = palindrome;
