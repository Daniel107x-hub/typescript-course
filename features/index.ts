// Type inference ->m TYpescript detectes that today is of type Date
const today = new Date();
today.getMonth();

const person = {
  age: 20
};


class Color {};
const red = new Color();

// Variables
let apples: number = 5; // Type annotation we indicate that the variable will only hold numbers
// apples = true;

let speed: string = "fast";
// speed = 5;


let hasName: boolean = true;
let nothingMuch : null = null;
let nothing : undefined = undefined;

// Built in objects
let now : Date = new Date();

let logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}
logNumber(10);

// logNumber = (i: string) => { // Wrong since we expect thllllat the argument is number
//   console.log(i);
// }

logNumber = (b: number) => { // Correct but we are returning a string instead of void
  console.log(b);
  return 'OK';
}
const value = logNumber(10);
console.log(value);

logNumber = (i: number) => { // Correct
  console.log(i);
}
logNumber(30);

// Any example
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y:number} = JSON.parse(json); // Parse method returns any type since the value depends on what it's parsing
console.log(coordinates); // {x: 10, y: 20}
