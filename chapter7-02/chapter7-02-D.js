// **************************** //
// Chapter 07 Exercise 02 - D
// **************************** //

// ********************************************************
// 2. Write a regular expression that can match:

// ********************************************************
//    D. A 5 character palindrome 
//       a. example
//       i. abcba 
//      ii. 12?21 
//     iii. _1a1_


str='?232?';
var matches = str.match(/^(.)(.)(.)\2\1$/);

console.log(Boolean(matches));

