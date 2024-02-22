// La inferencia funiona on el return, de cualquier manera es preferible utilizar el tipado on anotaciones
const add = (a: number, b: number): number => { // Type of the arguments and the return value
    return a + b;
}

// Arrow function
const subtract = (a: number, b: number) => {
    a - b;
}

// Named function
function divide(a: number, b: number): number {
    return a / b;
};

// Anonymous functions
const multiply = function(a: number, b: number): number {
    return a * b;
}

const forecast = {
    date: new Date(),
    weather: 'Sunny'
}

const logWeather = ({date, weather}: { date: Date, weather: string }): void => {
    console.log(weather);
}

const logWeather2 = (forecast: { date: Date, weather: string }): void => {
    const {date, weather}: { date: Date, weather: string } = forecast; // Destructurig and annotations come separately
    console.log(weather)
}

const place = {
    name: 'New York',
    coords: {
        lat: 0,
        long: 15
    }
}

const {coords: {lat, long}}: {coords: {lat: number, long: number}} = place; // Destructuring and annotations come separately