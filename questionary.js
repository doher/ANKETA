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
    surname = prompt("Enter your surname:").trim();
}

while (!firstName) {
    firstName = prompt("Enter your first name:").trim();
}

while (!fatherName) {
    fatherName = prompt("Enter your father's name:").trim();
}

while (!isFinite(age) || age < 0) {
    age = +prompt("Enter your age:");
}

ageInDays = age * 365;
ageInFuture = age + 5;

genderMale = confirm("Are you male?");

gender = genderMale ? "male" : "female";

if ((gender == "male" && age >= 60) || (gender == "female" && age >= 55)) {
    isRetired = "yes";
} else {
    isRetired = "no";
}

alert("Your full name: " + surname + ' ' + firstName + ' ' + fatherName + 
            "\nYour age: " + age + 
            "\nYour age in days: " + ageInDays +
            "\nIn 5 years you will be: " + ageInFuture +
            "\nYour gender: " + gender +
            "\nAre you retired: " + isRetired);
