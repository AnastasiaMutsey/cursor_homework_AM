const getUpperLetter = (nameHuman) => nameHuman[0].toUpperCase() + nameHuman.slice(1).toLocaleLowerCase(); 
//-------------------------------------------------------------------------------------------------------\\


const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];


//1 Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] 
// - яка повертає список предметів для конкретного студента. 
//Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл        

function getSubject(studentNumber){
    return Object.keys(students[studentNumber].subjects).map(subjectName =>
        getUpperLetter(subjectName).replace("_", " "));
}
console.log(getSubject(0))

//2 Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку 
//по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ. Оцінку округліть до 2ого знаку.
// Можна використовувати функції, написані у попередніх домашніх завданнях :)

function getAverageMark(studentIndex){
    
    let marksStudent = Object.values(students[studentIndex].subjects);
    const allMarksStudent  = marksStudent.flat(1);
    const averageMark = ((allMarksStudent.reduce(function(acc, number) {
        return acc + number}))/allMarksStudent.length).toFixed(2);
    return Number(averageMark);
}

console.log(getAverageMark(0));

//3 Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} 
//– яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання).
// ПОвинна бути виведена інформація: курс, ім'я, середня оцінка.

function getStudentInfo(studentNumber){
    const result = {
        course: students[studentNumber].course,
        name: students[studentNumber].name,
        averageMark: getAverageMark(studentNumber)
    }
    return result;
}
console.log(getStudentInfo(0));


// 4 Ствроіть функцію getStudentsNames(students) --> 
//["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку.
function getStudentsNames(students){
    arrayStudentsName = students.map( student => student.name).sort();
    return arrayStudentsName;
}
console.log(getStudentsNames(students))

// 5 Створіть функцію getBestStudent(students) -->
// "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки. 
function getBestStudent(students){
const averages = students.map( (student, index) => getAverageMark(index));
const maxMarkOfStudent = Math.max(...averages);
const bestStudent = students[averages.indexOf(maxMarkOfStudent)].name;
return bestStudent;

}
console.log(getBestStudent(students));

// 6 Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } 
//– яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.

function calculateWordLetters(world){
const arrayWorld = world.split("");
let objectWorld = {};
for (let i = 0; i < arrayWorld.length; i++){
  objectWorld[i] = arrayWorld[i];
}
let objectWithArrayValue = Object.entries(objectWorld).reduce((acc, [ k, v ]) => ((acc[v] = acc[v] || []).push(k), acc), {})
for (const [key, value] of Object.entries(objectWithArrayValue)) {
     console.log(`${key}  :  ${value.length}`)
};
}

calculateWordLetters("тест");