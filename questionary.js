var surname;
var firstName;
var fatherName;
var age;
var genderMale;
var ageInDays;
var ageInFuture;
var gender; 
var isRetired;

while (!surname) {
    surname = prompt("Enter your surname:");
}

while (!firstName) {
    firstName = prompt("Enter your first name:");
}

while (!fatherName) {
    fatherName = prompt("Enter your father's name:");
}

while (!isFinite(age) || age < 0) {
    age = prompt("Enter your age:");
}

ageInDays = age * 365;
ageInFuture = 1*age + 5;

genderMale = confirm("Are you male?");

switch (genderMale) {
    case true:
        gender = "male";
        break;

    case false:
        gender = "female";
        break;        

    default:
        gender = "is not defined";
        break;
}

if (gender == "male") {
    if (age >= 60) {
        isRetired = "yes";
    } else {
        isRetired = "no";
    }
} else if (gender == "female") {
    if (age >= 55) {
        isRetired = "yes";
    } else {
        isRetired = "no";
    }
} else {
    isRetired = "is not defined";
}

alert("Your full name: " + surname + ' ' + firstName + ' ' + fatherName + 
            "\nYour age: " + age + 
            "\nYour age in days: " + ageInDays +
            "\nIn 5 years you will be: " + ageInFuture +
            "\nYour gender: " + gender +
            "\nAre you retired: " + isRetired);
