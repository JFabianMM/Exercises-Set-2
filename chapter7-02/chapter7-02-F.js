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

// 2.F) non-nested tags
//      Your code has issues with “Is <b>4 > -1/12</b> true? The <b>answer</b> will <em>surprise</em> you.”
//      Expected answer <b>4 > -1/12</b>, <b>answer</b>, <em>surprise</em>
//      Notice that there should be 3 matches.


var str = 'Is <b>4 (<>?(-1/12</b> true? The <e>answer</e> will <em>surprise</em> you';
//var str = 'Is <b>4 < -1/12</b> true? The <b>answer</b> will <em>surprise</em> you.';
let arr=str.match(/<([a-z]+)>[a-z0-9.\s¡¿&(){}*%#@\[\]<>\/\-\?]{1,}<\/\1>/g);
console.log(arr)
