const apples: number = 5;
let speed: string = 'fast';

let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined;
console.log(nothing);

// Built in Objects
let now: Date = new Date();

// array

let colors: string[] = ['red', 'green', 'blue'];
console.log(colors[1]);

// classes
class Car {}

let car: Car = new Car();

// objeto literal
let point: {
	x: number;
	y: number;
} = {
	x: 5,
	y: 20
};

// function

const logNumber: (i: number) => void = (i: number) => {
	console.log(i);
};
