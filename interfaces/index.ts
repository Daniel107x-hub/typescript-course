interface Reportable {
    summary(): string;
}

interface Person {
    name: string;
    age: number;
    cars?: number;
    summary(): string;
}

function printSummary(reportable: Reportable) {
    console.log(reportable.summary());

}

const person1 = {
    name: 'John', 
    age: 30, 
    cars: 2,
    summary(): string {
        let summary : string =  `${this.name} is ${this.age} years old.`
        if(this.cars) {
            summary += ` He has ${this.cars} cars.`;
        }
        return summary;
    }
};

const person2 = {
    name: 'Dan', 
    age: 30, 
    cars: 1,
    summary(): string {
        let summary : string =  `${this.name} is ${this.age} years old.`
        if(this.cars) {
            summary += ` He has ${this.cars} cars.`;
        }
        return summary;
    }
};

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar.`;
    }
};

printSummary(person1);
printSummary(person2);
printSummary(drink);