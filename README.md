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

### Anotations o functions
Agregaremos anotaciones para indicarle a typescript el tipo de argumentos que recibira y el tipo de valor de retorno.
(C, Y, N)

