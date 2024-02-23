# Typescript  
## Types
Un tipo es una forma sencilla de referirse a las propiedades y funciones que un *valor* tiene.
Ejemplo de distintos tipos
1. string
2. number
3. boolean
4. Date

Existe una distincion entre los distintos tipos de dato  
Tipos primitivos:
1. number
2. string
3. boolean
4. symbol
5. void
6. numm
7. undefined

Object types:
1. functions
2. arrays
3. classes
4. objects

[Tipos de datos en typescript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#object-types)

Types are the basic building block of a typescript application, so they are used everywhere.

### Sintaxis para asignar un tipo a una variable
```typescript
  let variableName: TYPE = VALUE;
```
Con TYPE podemos definir el tipo de una variable y finalmente le asignamos un valor de dicho tipo.

- Definicion de un arreglo de strings
```typescript
  let arrayOfStrings: string[] = ['hello', 'my', 'name']
```
- Array of numberss
```typescript
  let numbers: number[] = [1, 2, 3]
```

- Array de booleans
```typescript
  let booleans: boolean[] = [true, true, false]
```

- Clases
```typescript
  class Car{}
  let car: Car = new Car();
```

- Object literals
```typescript
  let point: {x: number; y: number} = { // We put the name of the properties and the type 
    x: 10,
    y: 20
  }
```

- Functions
```typescript
  const logNumber: 
    (i: number) => void =  // This variable will hold a function which received a parameter named i of type number and will return void (Nothing)
      (i: number) => { // The function itself will receive an arument of type number
        console.log(i);
      }
```

### Type inference
1. Si la declaracion y la inicialiacion se escriben en la misma linea typescript infiere el tipo de la variable. Si esta esta separada veremos que typescript asignara un tipo any.
```typescript
  const color = 'red' //Typescript knows this is a string
```
2. Debemos usar las anotaciones de tipado cuando el tipo no pueda ser inferido.
3. Cuando una funcione retorne el tipo **any** y queramos clarificar el valor.

Para todos los demas casos, usaremos la inferencia de tipos, es decir, no escribiremos un tipo explicitamente.

**Evitar variables con tipo any de ser posible.**

Es posible indicar que dos tipos puedens er signados a una variable:
```typescript
  let numberAboveZero: boolean | number = false;
```

## Anotations o functions
Agregaremos anotaciones para indicarle a typescript el tipo de argumentos que recibira y el tipo de valor de retorno.
(C, Y, N)


## Arrays
- Para idicar que un array multidimensional tiene un tipo, basta con usar la siguiente notacion
```typescript
  const names: string[][];
```
- Para utilizar multiples tipos en un array
```typescript
  const dates: (Date | string)[];
```

## Tuplas
[Documentation](https://www.typescriptlang.org/es/play?#code/PTAEBUFuAcEsGMCGBbApgOwC6tAV3aIgE5GoDmANgPajxVawY4AmO8qRNioyu8AFlQDOoKgCMAVqkzCAUCFCs8BIVWqhMsaFQB0EAJ7RUAZXhEtmDY3Q58hdAEOKsIS9CohR+LEQV36eTAZInQuUGoRYlJKYVAAR1w2emx0MkQCZAAvik1oCg8rbSEAGlB9QMV6JQLYZG0iTHTsdz8qIlYCDHjE0CEcWHRWAA90nVkKgFEhGRE+8IoUdI1cPMQRAAougcoAS5EAKn3MFfyhQ4BKPQAFayFuDArUCgWROmQafG4AMzbkbiU6DZ4I0iIQKGR8LFmIgZqAjJxaPQKmhQrMBo0hm4ErYCOIpDJRO0MIhmDR6vNEAA3DxjCpXRKsV6kYjKbjHVZ4TTOABe6VJ4W4riwiExIiUUXIEUeBAAUlTEKZzNBMAAucaA6agL6IWDOVIAJQ82nQcwAvKAANoAIgAclRLAAxKj4ZhW0oAFgADO6ALoAbnGCnhNCBHlgIIcYtQ8AWRBZQlwhRobw+6DZJ0QtI1lmgayFZENnnofRVlum5lSpXQuGQYg4PtA5utAG8AL5u0AAJk9nv9gbAAEE-Lm7qCnrRcERVKDVGJSOFYqFa6Qo4Ra2tQJTiD4xKcKtAGQVqaCFopYF8OBhvPcsPPT1vzIhdywcLkuCRJVQKutQOty9tQAAH1Aataw4c4LQbc4ygFZYOR-C1-0rECazrIgoNpBQJgIOwJRiUpxzaDoQJoGo6jaRosBwcl1GxZRHnyFECS6eBcF8BJGFBAZmAQajD16DhWVoEliUUVAKmwIYCVTEDMjQTg9Gw2D2QWAjWiJAh9Fg6hUnDXBmAqVQCDSOMGF5UkhFpc9fxHfNC2NPoLQARgbU03K7HtoObWRQERE1LGoJAKAASXQH5G1AGVjAAeRtHRcynVB1ls7Z7OLVALV7c4A18jU1FQHRqDIdZAt8UKfmy2RW37UApgJVwyHQc8EG4OjwEMEwzAsOFOHqbx6GIBwWiTCo6A-YFSM6PxIEGXjCFYViSVI0ABhjXBVFAMgmDjIghvwR4SDaXpYBWqjhUIeB2FYUFuDsPFpEm5RQBmnj2BIioFtjJbaRSg0jXSi1Oz7CoAFU0zg08D1QJQKD4WBQRTJ6xESAhc0wIgAGfUeIbgjGhbk5AUMbYSUaFYQwdGnkQczYmTKh3lAMQ1hfUR0Y3EFUDWWlMA60BjEaL4vgHS7nSwCKLVAtDSiQshpfR7Y5YrMgAH5gezXoBa+Ut+cQQXhbofBMEg8WfMtT1SitAdoXQABrAB3KgOytEl0nt3RUAAAStH1ilN5yLYAaXSKh7fSJ2beD0P0B0IQvZ9v3OwtgcbEnAYnfSVBU+j2OneMFYOEpFw2m933gYUABhNjBhoOZNCYJ7AQkQ26dCbx+SUN8RC6J5Rvp6wCbE5SMxg2HyBkxo-gAR5oRlASoNuqGl8Sg34-hEHYUF1pnwj4SW0ElGgXrEDSbwsbhHHTte4gKjojxmihjvtondjcE4hddOOZgR9ibjeKER4pJxlmBwBwBAlB2DfIPMmj0EqaFYrGNUsgeZGFAFcRA+h+a4DECIJsOs9Yi0NqUHQxDJYcEgmrYsOZ0GYOwaWNBGDjjYONk2P20xdZfEyj7LsABWXsvtfKIU1s5LhnZeGlE7AANj4awoRfDQAAGYeylEUebBRPZ44UP8jwZI-Boo2HoUxHB58GFYKEJw4RoAADUxiaFmJchY6xuYTFMKBsIgM6t3hYH4OAB2BiKZGKcbY4RgMGyOOoYwsxrigbuModorx4B+CkFQH4rAATwmmJCSEgMdJDwiFwFyWAvJQQqQ3Alf4HgupiHhlqfA-UbAiBeKNNipwND0yWHYdAckOA0G4qgL4AxYDt2ooNNA6NYiAnogoSBrBsBEGQAMJaiDPrEBwF8Wpmh6DCQoPAmEyT0FOiIBMOo1B9CoCSoM0spCiBEOIcQMgQhSwWmIToK55DziXNQhwbJQUdnYHoQco5eQqCnKSmwwW5i5GBIieYlylUfm4AWH8-ZbRAUnLOX+IR9jIXpKYfYlypQoUZPsUDSqgQKj8EwJgaADyQB2zpToZBFSlSYAWKkHQbQyDAFJPAIQwA16DDEFQEOwBSD5GZgAWlCNgXljKhBdWVOK+R4rPQ6ApcgCgABiFSHhxUDHFSuTA4qymjI4EIcVfJxWeGZMwcVqAhiHw8K4Ys5LKXUpVCARA+T+AqreMAXcVBOWyvlYapVdqgVK3Fdqs1mB+CoHFfgG2oQ7boEjR1YAsggA)
A diferencia de los arreglos, los cuales manntienen de 0 a muchos objetos y donde el orden de 
estos elementos no importa mucho, utilizamos las tuplas donde el indice  el tipo importan.
Puede ser utilizado como una alternativa a los objetos.
```typescript
  const passResponse: [string, number] = ["{}", 200];
```
 Podemos utilizar arreglos de tuplas con elementos condicionales
 ```typescript
  type StaffAccount = [number, number, string?];
  const staff: StaffAccout[] = [
    [0, 1, "wefwef@"],
    [1, 1, "seferfg/@"],
    [4, 3]
  ];
```

## Object types
> La verificacion de tipos en typescript se realiza a partir de la ***forma*** que tienen los valores algo conocido como **duck typing** o **structural subtyping**. Las interfaces cumplen el rol de nombrar a estos tipos/estructuras definiendo contratos con el codigo asi como el codigo fuera del proyecto. En versiones mas recientes de TS, las interfaces son un subtipo de los **object types**, los cuales puede ser anonimos, nombrados (interfaces) o type alias.

[Object types docs](https://www.typescriptlang.org/docs/handbook/2/objects.html)

### Anonymous object type
```typescript
function greet(person: {name: string}){
  return "Hello " + person.name;
}
```

### Interface
Utilizadas para describir la forma de los objetos. Pueden ser extendidas declarandolas multiples veces.
- Las interfaces solo pueden describir la forma de los objetos
- Las comparaciones de tipos de interfaces pueden ser mas rapidas que de los types
```typescript
  interface Person{
    name: string;
    age?: number; // El simbolo ? permite indicar que una propiedad podria no estar presente
  }

  function greet(person: Person){
    return "Hello " + person.name;
  }
```

### Type alias
```typescript
type Person = {
  name: string;
  age: number;
};

function greet(person: Person){
  return "Hello " + person.name;
}