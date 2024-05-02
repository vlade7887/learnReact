import emoji from "./data/emojipedia";
// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// function double(x) {
//   return x;
// }

// const newNumber = numbers.map(function (x) {
//   return x;
// });
// var newNumber = [];

// numbers.forEach(function (x) {
//   newNumber.push(x * 2);
// });
// console.log(newNumber);

//Filter - Create a new array by keeping the items that return true.
// const newNumber = numbers.filter(function (x) {
//   return x > 10;
// });

// var newNumber = [];
// numbers.forEach(function (x) {
//   if (x < 10) {
//     newNumber.push(x);
//   }
// });

// console.log(newNumber);
//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = 0;
// numbers.forEach(function (x) {
//   newNumber += x;
// });
// const newNumber = numbers.reduce(function (x, y) {
//   console.log("accumulate = " + x);
//   console.log("currentNumber=" + y);
//   return x + y;
// });

// console.log(newNumber);
//Find - find the first item that matches from an array.
// const find = numbers.findIndex(function (x) {
//   return x > 10;
// });

// console.log(find);

//FindIndex - find the index of the first item that matches.


const newData = emoji.map((data) => data.meaning.substring(0, 100)
);

console.log(newData);


function App() {
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

export default App;
