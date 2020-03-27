// In JavaScript, write a function that recieves an array of numbers
// as the arguement, and returns two arrays, one that returns all even numbers
// and one that returns all odd numbers.
// You do not need to account for negative numbers
// To test your code, run `node script.js` in the shared terminal.
// You should have about 10 minutes to complete this
// Hints(?):  .push(), %,  .forEach()


// function evenOrOdd(arr) {
//   const even = [];
//   const odd = [];
  
//   for (var i= 0; i<arr.length; i++){
//   if ((arr[i]%2) !=1){
//       even.push(arr[i]);
//   }
//   else {
//       odd.push(arr[i]);
//   }
//   return {  /* Arrays*/ }
// }}


// const numArray = [1, 36, 2, 56, 9, 23, 5, 72, 36];
// console.log(evenOrOdd(numArray).odd) // =>  [1, 9, 23, 5]
// console.log(evenOrOdd(numArray).even) // =>  [36, 2, 56, 72, 36]


function evenOrOdd(arr) {
 const even = [];
 const odd = [];



  return {
   even,
   odd,
  };
}
let numArray = [1, 36, 2, 56, 9, 23, 5, 72, 36];
const { even, odd } = evenOrOdd(numArray)
console.log(odd); // =>  [1, 9, 23, 5]
console.log(even); // =>  [36, 2, 56, 72, 36]