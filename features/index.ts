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
apples = true;

let speed: string = "fast";
speed = 5;


let hasName: boolean = true;
let nothingMuch : null = null;
let nothing : undefined = undefined;

// Built in objects
let now : Date = new Date();
