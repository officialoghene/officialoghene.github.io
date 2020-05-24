// Find the current time in hours
// returns a number between 0 and 23
let timeOfDay = new Date().getHours();

// Find the current time in hours
let year = new Date().getFullYear();

let greeting = ""

// Determine Diego's greeting depending on the time of day
if (timeOfDay < 12) {
  greeting = "Good morning!";
} else if (timeOfDay >= 12 && timeOfDay < 18) {
  greeting = "Good afternoon!"
} else {
  greeting = "Good evening!"
}




// *** You don't need to change anything below this ***
// Find the element for greeting and year
let helloElement = document.getElementById('greet');
let copyrightYear = document.getElementById('year');

// Convert the runtimes into 'mm:ss'
helloElement.innerHTML = greeting
copyrightYear.innerHTML = year;
