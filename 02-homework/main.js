
// Отримайте у користувача число(N) від якого ми будемо складати.
// Отримати число можна за допомогою prompt. Пам'ятайте, ЧИСЛО, не РЯДОК!
// Перевірте, чи є передане значення N ЦІЛИМ числом.
let firstNumber = prompt("Please enter a first number", '');0;
while (firstNumber === '' || isNaN(+firstNumber) || !Number.isInteger(+firstNumber)){
    firstNumber = prompt("You enter not a number, please try again")
}
// Отримайте у користувача число(M) до якого ми будемо складати (включно). 
// Отримати число можна за допомогою prompt. Пам'ятайте, ЧИСЛО, не РЯДОК!
// Перевірте, чи є передане значення M ЦІЛИМ числом.
let secondNumber = prompt("Please enter a second number", '');0;
while (secondNumber === '' || isNaN(+secondNumber) || !Number.isInteger(+secondNumber)){
    secondNumber = prompt("You enter not a number, please try again")
}
// Отримайте у користувача булевий параметр(true/false), який підкаже нам чи потрібно пропускати парні числа. 
// TRUE – потрібно, FALSE – не потрібно. Використовуйте функцію confirm
let isEven = confirm("Do you need to skip even numbers?")

let minNumber = Math.min(firstNumber, secondNumber);
let maxNumber = Math.max(firstNumber, secondNumber);
let summ = 0;

// Напишіть цикл, який буде складати числа від раніше отриманих N и M
// В циклі додайте перевірку – чи потрібно пропускати при складанні парні числа.
// (Використовуйте для цього if/else). Якщо парні числа потрібно пропускати не додавайте їх до суми
for(let i = minNumber; i <= maxNumber; i++){
    if (isEven && i%2 == 0){
        continue;
    }
else summ = summ + i;
}
// Виведіть результат
alert(`Summ your number : ${summ}`);