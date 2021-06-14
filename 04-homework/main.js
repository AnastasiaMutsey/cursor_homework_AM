const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана",];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const pairOfStudents = [];
//1
function getPair (){
    pairOfStudents.push([students[0], students[2]]);
    pairOfStudents.push([students[1], students[3]]);
    pairOfStudents.push([students[4], students[5]]);
    return pairOfStudents;
}

const pair = getPair(students);
console.log(pair);

//2 
const themesPair = [];

function getThemesPair (){
    themesPair.push([pair[0], themes[1]]);
    themesPair.push([pair[1], themes[1]]);
    themesPair.push([pair[2], themes[2]]);

    return themesPair;
}

console.log(getThemesPair(pair, themes));
