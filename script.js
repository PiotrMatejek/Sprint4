//Podstawy funkcji w JavaScript.

// Wyświetl wyniki w konsoli

//PODSTAWY FUNKCJI:

// 1. Napisz funkcję dodającą dwie liczby
const add = (a, b) => a + b;
console.log(add(2, 2));

// 2. Napisz funkcję zwracającą długość tablicy
const arrayItems = [1, 2, 3, 4, 5];

function lengthArray(array) {
  return array.length;
}

console.log(lengthArray(arrayItems));

// 3. Napisz funkcję sprawdzającą, czy liczba jest parzysta
function odd(num) {
  num % 2 === 0
    ? console.log(`Liczba ${num} jest parzysta`)
    : console.log(`Liczba ${num} jest nieparzysta`);
}

odd(3);

// 4. Napisz funkcję obliczającą pole kwadratu
const square = (a) => a * a;

console.log(square(5));

// 5. Napisz funkcję zwracającą odwrotność liczby
const inverseNumber = (number) => -number;

console.log(inverseNumber(-100));

// 6. Napisz funkcję konwertującą stopnie Celsjusza na Fahrenheita
function CelsiusToFahrenheit(degree) {
  const convertedDegree = degree * 1.8 + 32;

  return convertedDegree;
}

console.log(CelsiusToFahrenheit(33));

// 7. Napisz funkcję zwracającą pierwszy element tablicy
elementOfItems = [1, 2, 3, 4, 5];

const firstElementOfArray = (element) => element[0];

console.log(firstElementOfArray(elementOfItems));

// 8. Napisz funkcję łączącą dwa ciągi znaków, utwórz warunek który sprawdzi czy argumenty są typu string
function addString(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") return;

  const combinedString = string1 + string2;

  return combinedString;
}

console.log(addString("String", "check"));

// 9. Napisz funkcję zwracającą typ zmiennej
const checkType = (item) => typeof item;

console.log(checkType(true));

// 10. Napisz funkcję zwracającą absolutną wartość liczby
function absoluteNumber(number) {
  if (number < 0) {
    return -number;
  }
  return number;
}

console.log(absoluteNumber(-100));

//PODSTAWY PĘTLI:

// 1. Napisz funkcję, która będzie miała pętlę for, która wyświetli liczby od 1 do 10
function loopFor(number) {
  for (let i = 1; i <= number; i++) {
    console.log(i);
  }
}

loopFor(10);

// 2. Napisz funkcję, która będzie używać pętli while do wyświetlenia liczb parzystych mniejszych od 20

function loopWhile() {
  let counter = 0;
  while (counter < 20) {
    if (counter % 2 === 0) {
      console.log(counter);
    }
    counter++;
  }
}

loopWhile();

// 3. Napisz funkcję, która użyje pętli do while do wyświetlenia liczb od 10 do 1
function loopWhileSection() {
  let counter = 10;
  while (counter > 0) {
    console.log(counter);
    counter--;
  }
}

loopWhileSection();

// 4. Napisz funkcję, która użyje pętli while i break do przerwania pętli po osiągnięciu liczby 5
function whileBreak() {
  let counter = 0;
  while (true) {
    if (counter > 5) {
      break;
    }
    console.log(counter);
    counter++;
  }
}

whileBreak();

// 5. Napisz funkcję, która użyje pętli for in do iteracji po właściwościach obiektu
const persons = {
  name: "Krzych",
  age: 100,
};

function loopObject(persons) {
  for (const person in persons) {
    console.log(person);
  }
}

loopObject(persons);

// 6. Napisz funkcję, która użyje pętli for of do iteracji po elementach tablicy
const numberOfUsers = [10, 50, 5, 100];

function loopArray(users) {
  for (const user of users) {
    console.log(user);
  }
}

loopArray(numberOfUsers);
// 7. Napisz funkcję, która użyje pętli for do obliczania sumy elementów tablicy
const arrayValues = [20, 40, 60];

function sumArray(arrayNumbers) {
  counter = 0;
  for (const num of arrayNumbers) {
    counter += num;
  }
  console.log(`Sum of numbers: ${counter}`);
}

sumArray(arrayValues);

// 8. Napisz funkcję, która użyje pętli while do odwrócenia ciągu znaków
function loopWhileReverse(text) {
  let counter = 1;
  let reversedText = "";

  while (counter <= text.length) {
    reversedText += text[text.length - counter];
    counter++;
  }
  console.log(`${text} : ${reversedText}`);
}

loopWhileReverse("Devstock");

// 9. Napisz funkcję, która użyje pętli for of do znalezienia największej liczby w tablicy
const items = [2, 3, 1, 100, 20, 5];
function maxNumber(numbers) {
  let maxNumberArray = numbers[0];

  for (const num of numbers) {
    if (maxNumberArray > num) {
      continue;
    } else {
      maxNumberArray = num;
    }
  }
  console.log(maxNumberArray);
}
maxNumber(items);

// 10. Napisz funkcję, która użyje pętli for in do wyświetlenia par klucz-wartość tablicy obiektów
const person = [
  {
    name: "Piotrek",
    age: 39,
    country: "Poland",
  },
  {
    name: "Kazik",
    age: 89,
    country: "Italy",
  },
];

function keyValueLoop(person) {
  person.forEach((users) => {
    for (const key in users) {
      console.log(`${key} : ${users[key]}`);
    }
  });
}

keyValueLoop(person);

//PODSTAWOWE METODY NA TABLICACH:

// 1. Napisz funkcję, która doda element na koniec tablicy używając metody push
const arrayPush = [1, 2, 10];

const pushItem = (item, array) => {
  array.push(item);
  return array;
};

console.log(pushItem(5, arrayPush));

// 2. Napisz funkcję, która usunie ostatni element tablicy używając metody pop
const popItem = (array) => {
  array.pop();
  return array;
};

console.log(popItem(arrayPush));

// 3. Napisz funkcję, która usunie pierwszy element tablicy używając metody shift
const shiftItem = (array) => {
  array.shift();
  return array;
};

console.log(shiftItem(arrayPush));

// 4. Napisz funkcję, która doda element na początek tablicy używając metody unshift
const unshiftItem = (item, array) => {
  array.unshift(item);
  return array;
};

console.log(unshiftItem(15, arrayPush));

// 5. Napisz funkcję, która użyje metody push, aby dodać dwa elementy na koniec tablicy
const pushTwoItems = (item1, item2, array) => {
  array.push(item1, item2);
  return array;
};

console.log(pushTwoItems(20, 30, arrayPush));

// 6. Napisz funkcję, która dwukrotnie użyje metody pop, aby usunąć dwa ostatnie elementy tablicy
const popItemTwice = (array) => {
  array.pop();
  array.pop();
  return array;
};

console.log(popItemTwice(arrayPush));

// 7. Napisz funkcję, która dwukrotnie użyje metody shift, aby usunąć dwa pierwsze elementy tablicy
const shiftTwoItemsTwice = (array) => {
  array.shift();
  array.shift();
  return array;
};

console.log(shiftTwoItemsTwice(arrayPush));

// 8. Napisz funkcję, która dwukrotnie użyje metody unshift, aby dodać dwa elementy na początek tablicy
const unshiftTwoItemsTwice = (item1, item2, array) => {
  array.unshift(item1, item2);
  array.unshift(item1, item2);
  return array;
};

console.log(unshiftTwoItemsTwice(6, 8, arrayPush));
// 9. Napisz funkcję, która użyje metody push do dodania elementu, a następnie metody pop do usunięcia elementu z tablicy
const pushItemPop = (item, array) => {
  array.push(item);
  array.pop();
  return array;
};

console.log(pushItemPop(5, arrayPush));

// 10. Napisz funkcję, która użyje metody unshift do dodania elementu, a następnie metody shift do usunięcia elementu z tablicy
const unshiftItemShift = (item, array) => {
  array.unshift(item);
  array.shift();
  return array;
};

console.log(unshiftItemShift(15, arrayPush));

// 11. Napisz funkcję, która przy użyciu metody map zwiększy każdy element tablicy o 1
const valuesArray = [2, 7, 10, 11, 20, 30, 39];

function increaseValue(valuesArray) {
  const newArray = valuesArray.map((num) => num + 1);
  return newArray;
}

console.log(increaseValue(valuesArray));

// 12. Napisz funkcję, która przy użyciu metody filter zwróci tylko parzyste liczby z tablicy
function findEvenValue(valuesArray) {
  const newFilterArray = valuesArray.filter((num) => num % 2 === 0);
  return newFilterArray;
}

console.log(findEvenValue(valuesArray));

// 13. Napisz funkcję, która przy użyciu metody map podwoi każdy element tablicy
function double(valuesArray) {
  const doubleValue = valuesArray.map((num) => num * 2);
  return doubleValue;
}

console.log(double(valuesArray));

// 14. Napisz funkcję, która przy użyciu metody filter zwróci elementy tablicy większe niż 10
function findBiggerElements(valuesArray) {
  const filterElements = valuesArray.filter((num) => num > 10);
  return filterElements;
}

console.log(findBiggerElements(valuesArray));

// 15. Napisz funkcję, która przy użyciu metody split podzieli podany ciąg znaków na słowa
const splitText = (text) => text.split(" ");

console.log(splitText("Akademia Devstock"));

// 16. Napisz funkcję, która przy użyciu metody map zamieni każdy element tablicy na jego długość
const textArray = ["dog", "monday", "tuesday", "wednesday", "thursday", "cat"];

function checkLenght(textArray) {
  const textLength = textArray.map((text) => text.length);
  return textLength;
}

console.log(checkLenght(textArray));

// 17. Napisz funkcję, która przy użyciu metody filter zwróci tylko nieparzyste liczby z tablicy
const numbersItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function findOdd(numbersItems) {
  const oddItems = numbersItems.filter((num) => num % 2 !== 0);
  return oddItems;
}

console.log(findOdd(numbersItems));

// 18. Napisz funkcję, która przy użyciu metody map zwróci kwadraty każdego elementu tablicy
function doubleItems(numbersItems) {
  const squareItems = numbersItems.map((num) => num * num);
  return squareItems;
}

console.log(doubleItems(numbersItems));

// 19. Napisz funkcję, która przy użyciu metody filter zwróci tylko te słowa z ciągu znaków, które mają więcej niż 3 litery
function longTextChange(textArray) {
  const longText = textArray.filter((text) => text.length > 3);
  return longText;
}

console.log(longTextChange(textArray));

// 20. Napisz funkcję, która przy użyciu metody map zwróci każdy element tablicy zapisany wielkimi literami
function textUpper(textArray) {
  const textUpperCase = textArray.map((text) => text.toUpperCase());

  return textUpperCase;
}

console.log(textUpper(textArray));
