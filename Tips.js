/////////////////////////1/////////////////////////////////

const userList = ['Khurram', 'Dilawar', 'Musa'];

// Long Version
for (let k = 0; k < userList.length; k++) {
  const user = userList[k];
  console.log(user);
}

// Short Version
for (let user of userList) console.log(user);

/////////////////////////2/////////////////////////////////

const numberList = [1, 2, 3, 4, 5];

numberList.forEach(arrayFunc);

function arrayFunc(item, index, array) {
  console.log(item);
}
// Output:
// 1
// 2
// 3
// 4
// 5

/////////////////////////3/////////////////////////////////
const firstArray = [1, 3, 2, 3, 1, true, false, true, 'khurram', 2, 3, 1, 4];
const filteredArray = [...new Set(firstArray)];
console.log(filteredArray); // [1 ,3 ,2 ,true ,false ,"khurram" ,4]

// The Trick is using Set function here.

const arrayOne = [10, 20, 30];
const arrayTwo = [40, 50, 60];
const arrayThree = [70, 80, 90];

const concatenated = arrayOne.concat(arrayTwo, arrayThree);

// Now If you console.log the concatenated array
console.log(concatenated);
// You will receive [10 ,20 ,30 ,40 ,50 ,60 ,70 ,80 ,90]

/////////////////////////4/////////////////////////////////

let numbersArrays = [10, 20, 30, 40, 50, 60, 70, 80];
console.log(numbersArrays.length);
// 8
numbersArrays.length = 5;
console.log(numbersArrays.length);
// 5
console.log(numbersArrays);
// [10, 20, 30, 40, 50]

numbersArrays.length = 0;
console.log(numbersArrays.length);
// 0
console.log(numbersArrays);
// []
/////////////////////////5/////////////////////////////////
let numberVariable = 2021;
let numberString = numberVariable + ''; // number to string
let stringNumber = +numberString; // string to number

/////////////////////////6/////////////////////////////////
// Base function
function Drinks(inputData) {
  var that = {}; // Create an empty object
  that.name = inputData.name; // Add it a "name" property
  return that; // Return the object
} // Function which inherits from the base function
function Coffee(coffeeInputData) {
  // Create the Drinks object
  var newVariable = Drinks(coffeeInputData);
  // Extend base object
  newVariable.giveName = function () {
    return 'This is ' + newVariable.name;
  };
  return newVariable;
} // Usage
var firstCoffee = Coffee({ name: 'Cappuccino' });
console.log(firstCoffee.giveName());
// Output: "This is Cappuccino"

/////////////////////////7/////////////////////////////////
const numberList = [1, 2, 3, 4, 5, 6, 7];

numberList.reverse();

console.log(numberList);

// Output: [7,6, 5, 4, 3, 2, 1]

/////////////////////////8/////////////////////////////////
const numberList = [1, 2, 3, 4, 5, 6];

numberList.splice(4, 6);

console.log(numberList);

// Output: [1 ,2 ,3 ,4]

/////////////////////////9/////////////////////////////////
let studentList = [
  { name: 'Mike', age: 12 },
  { name: 'Jane', age: 13 },
  { name: 'John', age: 15 },
  { name: 'Smith', age: 10 },
  { name: 'Sara', age: 18 },
  { name: 'Sarah', age: 17 },
];

let studentNameList = Array.from(studentList, ({ name }) => name);
console.log(studentNameList);
// Output: ["Mike" ,"Jane" ,"John" ,"Smith" ,"Sara" ,"Sarah"]

/////////////////////////10/////////////////////////////////
const studentNames = ['Mike', 'Jane', 'John', 'Smith', 'Sara'];

const isStudentExist = studentNames.includes('John');

console.log(isStudentExist ? 'Student exist.' : 'Student does not exist.');

// Output: Student exist.
/////////////////////////11/////////////////////////////////

let firstVariable = 1,
  secondVariable = ((2)[(firstVariable, secondVariable)] = [
    secondVariable,
    firstVariable,
  ]); //Swapping

console.log(firstVariable); // result -> 2

console.log(secondVariable); // result -> 1
