var ageQuery = prompt("What is your age?");

today = new Date();
var year = today.getFullYear();

var newYear = year-ageQuery;

document.getElementById("age").innerHTML = ("You were born in "+ newYear);
