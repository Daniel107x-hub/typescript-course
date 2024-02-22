const carManufacturers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

// Multidimensioal array
const carsByMake: string[][] = [
    ['f150'],
    ['corolla'],
    ['camaro']
];

// Inference on extracting elements
const car = carManufacturers[0];
const myCar = carManufacturers.pop();

// Prevent incompatible values
carManufacturers.push(100);

// Help with map
carManufacturers.map((car: string): string => {
    return car.toUpperCase();
});

// Handle multiple types in arrays
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];