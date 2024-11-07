// switches
// lot of if else statements

// let day = 2;

// kell a break, mert akkor az összes kód lefut

// switch(day) {
//     case 1:
//         console.log('Its monday');
//         break;
//     case 2:
//         console.log('Its tuesday');
//         break;
//     case 3:
//         console.log('Its wednesday');
//         break;
//     case 4:
//         console.log('Its thursday');
//         break;
//     case 5:
//         console.log('Its friday');
//         break;
//     case 6:
//         console.log('Its saturday');
//         break;
//     case 7:
//         console.log('Its sunday');
//         break;
//     default:
//         console.log(`${day} is not a day`);
//         break;
    
// }



let testScore = 10;
let letterGrade;


switch(true) {
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    default:
        letterGrade = "F"
        break;
}

console.log(letterGrade)
