// **************************** //
// Chapter 07 Exercise 02 - F
// **************************** //

// ********************************************************
// 2. Write a regular expression that can match:

// ********************************************************
//    F. All the non nested tag elements in a string 
//       a. example
//       input: “Is <b>4 < -1/12</b> true? The <b>answer</b> will <em>surprise</em> you.”
//       output: <b> 4 >< -1/12</b>, <b>answ>er</b>, <em>surprise</em>

//let str = 'Is <b>4 (<>?(-1/12</b> true? The <e>answer</e> will <em>surprise</em> you';
let str = 'Is <b>4  < -1/12 </b> true? The <b>answer</b> will <em>surprise</em> you.';

let arr=str.match(/<([a-z]+)>[a-z0-9.\s¡¿&(){}*=%#@\[\]<>\/\-\?]+<\/\1>/g);
//let arr=str.match(/<([a-z]+>)(.*)<\/\1/g);    // This dot option introduce errors.
console.log(arr)
