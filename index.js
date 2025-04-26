// _____________
// DAY 1
// _____________

// easy

// Given an array [1, 2, 3], return a new array with each value doubled.
// Example Output: [2, 4, 6]

const dobuleNumbers = (arr) => {
  return arr.map((num) => num * 2);
};

// console.log(dobuleNumbers([1, 2, 3]));  ✅

// medium 1

// Given an array of names like ["john", "jane", "doe"], return ["John", "Jane", "Doe"].

const nameCapitalizer = (namesArr) => {
  return namesArr.map(
    (name) => `${name[0].toUpperCase()}${name.slice(1, name.length)}`
  );
};

// console.log(nameCapitalizer(["john", "jane", "doe"])); ✅

// medium 2

// Given an array with mixed types ([1, "2", 3, null, "a"]), return an array with only numbers.

const nonNumberFilter = (numArr) => {
  const numbersOnly = [];
  numArr.forEach((num) => {
    if (typeof num === "number") numbersOnly.push(num);
  });

  return numbersOnly;
};

// console.log(nonNumberFilter([1, "2", 3, null, "a"])); ✅

// hard 1

// Write your own version of the map method: myMap(arr, callback) that works like Array.prototype.map.

const myMap = (arr, callback) => {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i], i, arr));
  }

  return newArr;
};
// console.log(myMap([1, 2, 3], (num) => num * 2)); ✅

// hard 2

// Given a nested array like [[1, 2], [3, 4]], flatten it and return [2, 4, 6, 8].

const flattenAndDoubleArray = (arr) => {
  return arr.flat().map((num) => num * 2);
};

// console.log(
//   flattenAndDoubleArray([
//     [1, 2],
//     [3, 4],
//   ])
// ); ✅

// _____________
// DAY 2
// _____________

// easy

// Remove Falsy ValuesInput: [0, 1, false, 2, '', 3] → Output: [1, 2, 3]

const falsyValueRemover = (arr) => {
  return arr.filter(Boolean);
};

// console.log(falsyValueRemover([0, 1, false, 2, "", 3])); ✅

// medium 1

// Count how many times each word appears in ['apple', 'banana', 'apple'] → { apple: 2, banana: 1 }

const wordCounter = (arr) => {
  return arr.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});
};

// console.log(wordCounter(["apple", "banana", "apple"])); ✅

// medium 2

// Use reduce to find the sum of squared values from [1, 2, 3] → 1^2 + 2^2 + 3^2 = 14

const sumOfSquares = (arr) => {
  return arr.reduce((acc, num) => acc + num * num, 0);
};

// console.log(sumOfSquares([1, 2, 3])); ✅

// hard 1

// Implement filterCreate your own myFilter(arr, callback) function.

const myFilter = (arr, callback) => {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) newArr.push(arr[i]);
  }

  return newArr;
};

// console.log(myFilter([1, 2, 3, 4, 5], (num) => num > 3)); ✅

// hard 2

// Most Frequent ElementFind the most frequent element in [1, 2, 2, 3, 1, 2] → 2

const findMostFrequantElement = (arr) => {
  const countedElements = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  let maxCount = 0;
  let mostFrequent = null;

  for (let key in countedElements) {
    if (countedElements[key] > maxCount) {
      maxCount = countedElements[key];
      mostFrequent = Number(key);
    }
  }

  return mostFrequent;
};

// console.log(findMostFrequantElement([1, 2, 2, 3, 1, 2])); ✅

// _____________
// DAY 3
// _____________

// easy

// Check if Array Includes a Value
// Does [1, 2, 3] include 2? → true

const arrayIncludesValue = (arr, value) => {
  return arr.includes(value);
};

// console.log(arrayIncludesValue([1, 2, 3], 2)); ✅

// medium 1

// Find the First Long WordFind the first word longer than 5 letters in ['cat', 'giraffe', 'hippopotamus'].

const findFirstLongWord = (wordsArr) => {
  return wordsArr.find((word) => word.length > 5);
};

// console.log(findFirstLongWord(["cat", "giraffe", "hippopotamus"])); ✅

// medium 2

//  Check if All numbers Are Positive

const positivNumberChecker = (arr) => {
  return arr.every((num) => num > 0);
};

// console.log(positivNumberChecker([1, 2, 3])); ✅

// hard 1

// Implement a myFindIndex method.

const myFindIndex = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) return i;
  }
  return -1;
};

// console.log(myFindIndex([1, 2, 3, 4, 5], (el) => el === 3)); ✅

// hard 2

// Check if every password in an array meets: at least 8 characters, 1 number, 1 uppercase letter.

const validatePassword = (password) => {
  const hasNumber = "0123456789"
    .split("")
    .some((digit) => password.includes(digit));
  const hasUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    .split("")
    .some((char) => password.includes(char));
  return password.length >= 8 && hasNumber && hasUppercase;
};

// console.log(validatePassword("Giraffe89")); ✅

// _____________
// DAY 4
// _____________

// easy

// Sort [3, 1, 4, 2] → [1, 2, 3, 4]

const handleSort = (arr) => {
  return arr.sort();
};

// console.log(handleSort([3, 1, 4, 2])); ✅

// medium 1

// Sort ['banana', 'apple', 'cherry'] → ['apple', 'banana', 'cherry']

const sortAlphabetically = (arr) => {
  return arr.sort((a, b) => a.localCompare() - b.localCompare());
};

// console.log(handleSort(["banana", "apple", "cherry"])); ✅

// medium 2

// Sort ['a', 'abc', 'ab'] by length → ['a', 'ab', 'abc']

const sortByStrLength = (arr) => {
  return arr.sort((a, b) => a.length - b.length);
};

// console.log(sortByStrLength(["a", "abc", "ab"]));  ✅

// Sort [{name:'A', age:30}, {name:'B', age:20}] by age.

// hard 1

const sortByAge = (arr) => {
  return arr.sort((a, b) => a.age - b.age);
};

// console.log(
//   sortByAge([
//     { name: "A", age: 30 },
//     { name: "B", age: 20 },
//   ])
// ); ✅

// hard 2

// Input: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'], group words that are anagrams together.

const groupAnagrams = (arr) => {
  const groups = new Map();

  arr.forEach((word) => {
    const sorted = word.split("").sort().join(""); // e.g., "eat" → "aet"
    if (!groups.has(sorted)) {
      groups.set(sorted, []);
    }
    groups.get(sorted).push(word);
  });

  return Array.from(groups.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
