// [1, 2, 3, 4] -> [4, 3, 2, 1]
// ['A', 'B', 'C', 'D', 'E'] -> ['E', 'D', 'C', 'B', 'A']
// [[1, 2], [3, 4], [5, 6]] -> [[5, 6], [3, 4], [1, 2]]
// [34, 'Hello', 65, 12, 'Test', 'Goodbye'] -> ['Goodbye', 'Test', 12, 65, 'Hello, 34]
// [null, null, 5, 6] -> [6, 5, null, null]
// [] -> []


// create a function called reverseArray
// takes in an array of items
const reverseArray = (items) => {
  // create a results array to hold the results
  const reversedArray = [];
  // go through each item in the input array
  for(let i = 0; i < items.length; i++) {
    // add the item to the beginning of the results array
    reversedArray.unshift(items[i]);
  }
  // return the results array
  return reversedArray;
}

const numbers = [1, 2, 3, 4];
const strings = ['A', 'B', 'C', 'D', 'E'];
const arrays = [[1, 2], [3, 4], [5, 6]];
const strAndNums = [34, 'Hello', 65, 12, 'Test', 'Goodbye'];
const nullArray = [null, null, 5, 6];

// console.log(reverseArray(nullArray));



// ['A', 'B', 'C', 'D', 'E']
// results -> ['E', 'D', 'C', 'B', 'A']






// CONSTANT
const addFive = (num) => {
  const name = 'Bill'; // O(1)
  const age = 65; // O(1)
  const level = 12; // O(1)
  const oneMillionthVariable = 1000000; // O(1)

  const total = num + 5; // O(1)
  return total; // O(1)
}

addFive(1000000000000000000000000000);
// Time Complexity - Big O(1)




// LINEAR
const logItems = (items) => {
  for(let i = 0; i < items.length; i++) {  // O(n)
    console.log(items[i]); // O(1)
  }
}

// logItems([1, 2, 3, 4, 5, 6, ... 1000]);



// QUADRATIC
const logInnerItems = (nestedArray) => {
  for(let i = 0; i < nestedArray.length; i++) { // O(n)
    const innerArray = nestedArray[i]; // O(1)
    for(let j = 0; j < innerArray.length; j++) { // O(n)
      console.log(innerArray[j]); // O(1)
    }
  }
}

// O(n) * O(n) = O(n^2)

// logInnerItems([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]);




// LOGARITHMIC
const findTarget = (arr, target) => {
  // for loop, but cut it in half each time you loop
  for(let i = Math.floor(numArray.length / 2); numArray.length > 0; i = Math.floor(numArray.length / 2)) {

    if(numArray[i] === targetNum) {
      return 'Found item!';
    }

    if(targetNum > numArray[i]) {
      numArray = numArray.slice(i + 1, numArray.length);
    } else {
      numArray = numArray.slice(0, i);
    }
  }
}

findTarget([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// [7, 8, 9, 10]
// [7, 8]
// [7]

