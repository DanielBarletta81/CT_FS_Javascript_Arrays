/* Problem Statement: You are tasked with creating a JavaScript program that demonstrates 
different string manipulation operations. The program should cover obtaining the length of
 a string, converting cases (upper and lower), extracting substrings, and splitting strings
 based on a delimiter.

Task 1: Obtaining String Length - Create a string with some text content.
 - Use the `length` property to obtain the length of the string. */


let message = "Hello, World!";

const messageLength = message.length();

console.log(messageLength);


/* Task 2: Converting Cases - Create a string with mixed-case content.

 Use the `toUpperCase` method to convert the string to uppercase.
 
 Use the `toLowerCase` method to convert the string to lowercase.
 */


 let text = "Hello, World!";

 const textLower = toLowerCase(text);

 console.log(textLower);


 const textUpper = toUpperCase(text);

 console.log(textUpper);



/*  Task 3: Extracting Substrings - Create a string with some text content. - 
 
 Use the `substring`
 method to extract a substring from the original string. */

let sentence = "The quick brown fox jumps over the lazy dog";

console.log(sentence.substring(4, 7));

// outputs 

/* Task 4: Splitting Strings - Create a string containing multiple words separated by spaces.
 - Use the `split` method to split the string into an array of words based
  on the space delimiter. */


let newSentence = "The quick brown fox";

const splitSentence = newSentence.split("");

console.log(splitSentence);