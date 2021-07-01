const ukraine = {
    tax: 0.195,
    middleSalary: 1789, 
    vacancies: 11476 
};
const latvia = { 
    tax: 0.25, 
    middleSalary: 1586, 
    vacancies: 3921 
};
const litva = { 
    tax: 0.15, 
    middleSalary: 1509, 
    vacancies: 1114 
};

//1 Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите 
//як IT-спеціаліст в якійсь з країн. Функція повинна викликатись через call та працювати з даними через this
function getMyTaxes(salary){
    const taxInCountry =  Number((this.tax * salary).toFixed(2));
    return taxInCountry;
}
console.log(getMyTaxes.call(ukraine, 1500));


//2 Створіть функцію getMiddleTaxes.call(country) -> number; 
//– яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary).
// Функція повинна викликатись через call та працювати з даними через this

function getMiddleTaxes(country){
    const middleTaxInCountry = Number((this.tax * this.middleSalary).toFixed(2));
    return middleTaxInCountry;
}

console.log(getMiddleTaxes.call(ukraine));

//3 Створіть функцію getTotalTaxes.call(country) -> number;
// – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies).
// Функція повинна викликатись через call та працювати з даними через this

function getTotalTaxes(country){
    const allTaxInCoutry = Number((this.tax * this.middleSalary * this.vacancies).toFixed(2));
    return allTaxInCoutry;
}

console.log(getTotalTaxes.call(ukraine));

//4 Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: 
//{ salary: number, taxes: number, profit: number } кожні 10 секунд. 
//Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності
// від вибраної країни та значення salary. profit = salary - taxes;

function  getMySalary(country){
    const randomSalary =   Number((Math.random() * (2001 - 1500) + 1500).toFixed(2));
    const taxOfRandomSalary = Number((this.tax * randomSalary).toFixed(2));
    const netSalary =  Number((randomSalary - taxOfRandomSalary).toFixed(2));

    const result = {
      salary: randomSalary,
      taxes: taxOfRandomSalary,
      profit: netSalary 
    }
    return result;
}

let timerId = setInterval(() => console.log(getMySalary.call(ukraine)), 10000);

