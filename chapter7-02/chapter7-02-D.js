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


str='ab"ba';
//str='?u¡u?';    
var matches = str.match(/^([a-zA-Z0-9\)\?!\/@#\$%\^\&*+"|\(\)¿¡=._-])([a-zA-Z0-9\)\?!\/@#\$%\^\&*+"|\(\)¿¡=._-])[a-zA-Z0-9\)\?!\/@#\$%\^\&*+"|\(\)¿¡=._-]\2\1$/);
console.log(Boolean(matches));

