//Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. 
//У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, 
//max – максимальне значення цілого числа.сделать проверку на целые числа
function getRandomArray(length, min, max){
    const randonArray = [].filter((item) =>
    Number.isInteger(item));;
    for (let i = min; i < length + 1; i ++){
        randonArray.push(Math.floor(Math.random()*max)+1)
    }
    return randonArray;
}
console.log(getRandomArray(10, 1, 5))

//Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів.
// НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
function getModa(...numbers){
const result = [];
const countNumbers = numbers.reduce( (acc, number) => {
    acc[number] = (acc[number] || 0) + 1 ;
    return acc;
  } , {})
const maxOccurance = Math.max(...Object.values(countNumbers));
const resultPairs = Object.entries(countNumbers);
resultPairs.forEach((item, index) => {
 if(item[1] === maxOccurance){
  result.push(item[0]);}
});
return result; 
}
console.log(getModa(1, 2, 3, 4, 5, 5, 5, 4, 3, 3))

//Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів.
// НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
function getAverage(...numbers){
    const arrIntegerNumber = [...numbers].filter((item) =>
    Number.isInteger(item));
    return arrIntegerNumber.reduce((acc, number) => (acc + number)) / arrIntegerNumber.length;
};
getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)

//4 Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів.
// НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ

function getMedian(...numbers){
const arrSortNumber = [...numbers].filter((item) =>
Number.isInteger(item));

    let mediana = 0;
    arrSortNumber.sort((a, b) => a - b)
    for (let i = 0; i < arrSortNumber.length / 2; i++) {
    if (arrSortNumber.length % 2 !== 0) {
      mediana = arrSortNumber[i];
    } else {
      mediana = (arrSortNumber[i] + arrSortNumber[i + 1]) / 2;
    } 
  }
  return mediana
}
console.log(getMedian(1, 2, 3, 4, 5))

//Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
function filterEvenNumbers(...numbers){
const notEvenNumberArr = [...numbers].filter((item) =>
item % 2 !== 0);
return notEvenNumberArr;
}
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6))

// Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
function countPositiveNumbers(...numbers){
const positiveNumber = [...numbers].filter((item) =>
item > 0)
return positiveNumber.length;
}
console.log(countPositiveNumbers(1, 2, -2, 3, -4, -5, 6))

//Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
function getDividedByFive(...numbers){
const devidedByFive = [...numbers].filter((item) =>
Number.isInteger(item / 5))
return devidedByFive;
}
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));


//Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви. 
//Якщо букв менше трьох – не розбиває. Пробіли завжди видаляються. Рядок приводится до нижнього регістру. 
//Приклад: divideByThree("Commander) -> ["com", "man", "der"] Приклад: divideByThree("live") -> ["liv", "e"]

function divideByThree(word){
    let lettersArray = word.toLowerCase().replace(/ /g, '').split('');
    let wordSyllables = [];
    for (let i = 0; i < lettersArray.length; i = i + 3) {
        wordSyllables.push(lettersArray.slice(i, i + 3).join(""));
      }
    return wordSyllables;
}

console.log(divideByThree("Commander"))





document.writeln(`
1. Mасив випадкових цілих чисел : ${getRandomArray(10, 1, 5)} <br>
2. Мода всіх переданих аргументів : ${getModa(1, 2, 3, 4, 5, 5, 5, 4, 3, 3)} <br>
3. Середнє арифметичне всіх переданих аргументів : ${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)} <br>
4. Медіана всіх переданих аргументів : ${getMedian(1, 2, 3, 4, 5)} <br>
5. Парні числа передані як аргументи функції : ${filterEvenNumbers(1, 2, 3, 4, 5, 6)} <br>
6. Кількість чисел більших 0 : ${countPositiveNumbers(1, 2, -2, 3, -4, -5, 6)} <br>
7. Єлементи масиву які діляться на ціло на 5 : ${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)} <br>
8. Слово розбите на умовні склади по 3 букви. ${divideByThree("Commander")} <br>`);
