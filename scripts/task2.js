/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name

const name = 'Victor Nmeka'
// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').innerHTML = name;

// Step 3: declare and instantiate a variable to hold the current year

const currentYear = new Date().getFullYear()
// Step 4: place the value of the current year variable into the HTML file

document.querySelector('#year').innerHTML = currentYear;
// Step 5: declare and instantiate a variable to hold the name of your picture

let image = "images/mypicture.jpg"
// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())

document.querySelector('img').setAttribute("src",image);


/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods

let favFood =['Beans', ' Chicken', ' Fish ', ' Salad '];
// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').innerHTML = favFood;

// Step 3: declare and instantiate a variable to hold another favorite food
let otherFavFood = ['Okra ', 'Pounded yam ','Egusi', ' Eggs']

// Step 4: add the variable holding another favorite food to the favorite food array

let allFavFood = favFood.concat(otherFavFood);
// Step 5: repeat Step 2
document.querySelector('#food').innerHTML = allFavFood;

// Step 6: remove the first element in the favorite foods array

const firstElement = allFavFood.shift();
// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = allFavFood;

// Step 8: remove the last element in the favorite foods array

const lastelement = allFavFood.pop();
// Step 7: repeat Step 2

document.querySelector('#food').innerHTML = allFavFood

