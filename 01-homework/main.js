//Створіть 3 змінних з наступими значеннями: 15.678, 123.965, 90.2345.
//  Ці змінні зберігають ціни на товари. Придумайте їм назви (товар можна придумати будь-який) 
const spritePrice = 15.678;
const burgerPrice = 123.965;
const salatPrice = 90.2345;

// Використовуючи вбудований об'єкт Math – виведіть максимальне число
const maxPrice = Math.max(spritePrice, burgerPrice, salatPrice);
console.log ("Max price - " + maxPrice);

// Використовуючи вбудований об'єкт Math – виведіть мінімальне число
const minPrice =  Math.min(spritePrice, burgerPrice, salatPrice);
console.log ("Min price - " + minPrice);

// Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
const totalSummOfDishes= spritePrice + burgerPrice + salatPrice;
console.log (`Total price - ${totalSummOfDishes}`);

// Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою.
// Округлення використовувати в МЕНЬШУ сторону.
const totalSummInteger = Math.floor(spritePrice) + Math.floor(burgerPrice) + Math.floor(salatPrice);
console.log(`The sum of all goods - ${totalSummInteger}`);

// Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
const roundedSummDishes = Math.round(totalSummInteger/100)*100;
console.log(roundedSummDishes);

// Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
const pairedNumber = Math.floor(totalSummInteger) % 2;
console.log(totalSummInteger == 0);

// Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
const customerPay = 500;
console.log(`Rest - ${customerPay - totalSummOfDishes}`);

// Виведіть середнє значення цін, округлене до другого знаку після коми
const meanPrice = Number((totalSummOfDishes / 3).toFixed(2));
console.log(`Mean Price ${meanPrice}`);

// (Більш складне) Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).
// Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
// Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?
const randomDiscount = Math.trunc(Math.random() * 100);
const summDiscont = Number(totalSummOfDishes * (randomDiscount / 100)).toFixed(2);
const summToPay = Number(totalSummOfDishes - summDiscont).toFixed(2)
const netProfit = Number((totalSummOfDishes / 2) - summDiscont).toFixed(2)
console.log(`Net profit ${netProfit}`)

// Advanced
// Створіть шаблонний рядок та виведіть всі обчислення вчинені в Base частині домашнього завдання у вигляді одного рядка наступного вигляду:
document.writeln(`
1. Максимальна ціна:  ${maxPrice}; <br> 
2. Мінімальна ціна:  ${minPrice}; <br> 
3. Сума всіх товарів:  ${totalSummOfDishes}; <br> 
4. Сума всіх товарів без копійок:  ${totalSummInteger}; <br>
5. Сума товарів округлена до сотен:  ${roundedSummDishes}; <br> 
6. Чи є сума парним числом?  ${totalSummInteger == 0}; <br>
7. Решта с 500:  ${customerPay - totalSummOfDishes}; <br>
8. Середнє значення цін: ${meanPrice}; <br>
9. Чистий прибуток: ${netProfit} `)