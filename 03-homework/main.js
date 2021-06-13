// Створити функцію getMaxDigit(number).
//яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. 
function getMaxDigit(number){
maxDigit = 0;
while(number != 0){
    if((number % 10) > maxDigit)
    maxDigit = (number % 10);
    number = number / 10;
  }
  return maxDigit.toString()[0];
}

//Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **
function getPow(number, pow){
 let result = 1;
 for (let i = 1; i <= Math.abs(pow); i ++){
     if(pow >= 0)
      result = number * result;   
      else result = result * (1 / number);
    } return result;
}

//Створити функцію, яка форматує ім'я, роблячи першу букву великою.
let getUpperLetter = (nameHuman) => nameHuman[0].toUpperCase() + nameHuman.slice(1).toLocaleLowerCase(); 

//Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати.
function getNetSalary(salary){
    while(isNaN (+salary) || !Number.isInteger(+salary)) { 
    return false;
    }
    const tax = 19.5;
    const netSalary = (salary - tax * salary / 100).toFixed(2);
    return Number(netSalary);
}

//Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.
function getRandomNumber(N, M){
    let minNumber = Math.min(N, M);
    let maxNumber = Math.max (N, M);
    minNumber = Math.ceil(minNumber);
    maxNumber = Math.floor(maxNumber);
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

//Створити функцію, яка рахує скільки разів певна буква повторюється в слові. 
function countLetter(latterRepeat, worldInput){
    return worldInput.split(new RegExp(latterRepeat, "gi" )).length-1;
}

//Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку.
function currencyСonversion(currencyInput){
const dollar = 27;
currencyInput = currencyInput.toUpperCase();
const monyeNumber = Number(currencyInput.replace(/[$, uah]/gi, ''));
if(currencyInput.includes("UAH")){
    return `${currencyInput} is ${monyeNumber / dollar} $`;
} else if (currencyInput.includes("$")){
    return `${currencyInput} is ${monyeNumber * dollar} UAH`;
}
else return false;
}

//Створіть функцію генерації випадкового паролю (тільки числа),
// довжина встановлюється користувачем або по замовчуванню = 8 символам.
function getRandomPassword(lenPassword = 8){
    if(lenPassword > 10) lenPassword = 8;
    lenPassword = lenPassword * (-1);
    return Math.random().toString().slice(lenPassword);
}

//Створіть функцію, яка видаляє всі букви з речення.
let deleteLetters = (deleteLatter, str) => str.replace(new RegExp(deleteLatter, "gi" ), '');

//Створіть функцію, яка перевіряє, чи є слово паліндромом.
function isPalyndrom (phraseInput){
    let replaceSymbol = [" ", "!", "?", ",", ".", ":"];
    let filteredPhrase = '';
    for (let i = 0; i < phraseInput.length; i++) {
    if(!replaceSymbol.includes(phraseInput[i])) {
    filteredPhrase += phraseInput[i];
   }
   }
   filteredPhrase = filteredPhrase.toLocaleLowerCase();
   return filteredPhrase === filteredPhrase.split("").reverse().join("");
}


//Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу. 
function deleteDuplicateLetter(sentenceInput){
sentenceInput = sentenceInput.toLocaleLowerCase().replace(/ /g,"").split("");
const arrayDeleteDuplicateLetter = sentenceInput.filter((function(event) {
    return sentenceInput.indexOf(event) == sentenceInput.lastIndexOf(event);
    }));
    return arrayDeleteDuplicateLetter.join("");
 }

document.writeln(`
Функція №1: ${getMaxDigit(1236)} <br>
Функція №2: ${getPow(5, -3)} <br>
Функція №3: ${getUpperLetter("вЛАД")} <br>
Функція №4: ${getNetSalary(1000)} <br>
Функція №5: ${getRandomNumber(1, 10)} <br>
Функція №6: ${countLetter("а", "Асталавіста")} <br>
Функція №7: ${currencyСonversion("100$")} <br>
Функція №8: ${getRandomPassword(5)} <br>
Функція №9: ${deleteLetters('a', "blablabla")} <br>
Функція №10: ${isPalyndrom("Я несу гусеня")} <br>
Функція №11: ${deleteDuplicateLetter("Бісквіт був дуже ніжним")}`)