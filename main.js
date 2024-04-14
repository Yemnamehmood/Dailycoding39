"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//DAY 39
//TASK 1 (Using function and switch statment which will show day of the week 1-7)
function logdayofWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid Day Number");
            break;
    }
}
logdayofWeek(3);
//It shows simply "Tuesday" because we've used switch statement and it means,
//`switch`: Evaluate expression, execute code based on cases
//another 
logdayofWeek(7); //Saturday
//TASK 2 (Using function and logs the season)
function logSeason(month) {
    switch (month) {
        case 12:
        case 1:
        case 2:
            console.log("Winters");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Spring");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Summers");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Autumn");
            break;
        default:
            console.log("Invalid month");
            break;
    }
}
logSeason(4); //Result "Spring"
logSeason(8); //Result "Summers"
logSeason(10); //Result "Autumn"
//TASK 3 (Using function and evaluates grade and log the remarks)
function evaluatesGrade(grade) {
    switch (grade) {
        case "A":
            console.log("Excellent");
            break;
        case "B":
            console.log("Good");
            break;
        case "C":
            console.log("Fair");
            break;
        case "D":
            console.log("Poor");
            break;
        case "F":
            console.log("Fail");
            break;
        default:
            console.log("Invalid Grade");
            break;
    }
}
evaluatesGrade("C"); //Result Fair
evaluatesGrade("E"); //Result Invalid Grade 
//It simply shows the result using switch statement accoridng to cases when we put.
