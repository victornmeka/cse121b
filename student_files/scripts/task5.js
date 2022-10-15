/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
let date = new Date()


// Step 2: Declare another variable to hold the day of the week
let dayOfTheWeek = null


// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
dayOfTheWeek = date.getDay()
console.log(dayOfTheWeek)


// Step 4: Declare a variable to hold a message that will be displayed
let message = ""

// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if (dayOfTheWeek === (1 || 2 || 3 || 4 || 5)){
    message = 'Hang in there!'
    
} else {
    message = 'Woohoo!  It is the weekend!'
}

// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'


/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let anotherMessage = ""

// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above

/* OUTPUT */
switch(dayOfTheWeek){
    case 0: 
    anotherMessage = "Sunday"
    break;
    case 1:
    anotherMessage = "Monday";
    break;
    case 2:
    anotherMessage = "Tuesday";
    break;
    case 3:
    anotherMessage = "Wednesday";
    break;
    case 4: 
    anotherMessage = "Thursday";
    break;
    case 5:
    anotherMessage = "Friday";
    break;
    case 6:
    anotherMessage = "Saturday";
};
console.log(anotherMessage)
// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1

document.getElementById("message1").textContent = message 

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.getElementById("message2").textContent = anotherMessage 
/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples

let templeList = []

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:

function output(templeList){
    
   templeList.forEach(temple => {
    let articleElement = document.createElement("article")
       
        let h3Element = document.createElement("h3")
        h3Element = temple.templeName
        h3Element.textContent
        

        let h4Element =  document.createElement("h4")
        h4Element.textContent = temple.location
        
        let h4Element2 = document.createElement("h4")
        h4Element2.textContent = temple.dedicated
        
        let imgElement = document.createElement("img")
        imgElement.src = temple.imageUrl
        imgElement.alt = temple.templeName
        
        articleElement.append(h3Element,h4Element,h4Element2,imgElement)
        let templesElement = document.getElementById("temples")
        templesElement.append(articleElement)

        
    })

}


// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples
 async function getTemples(){
    const url = 'https://byui-cse.github.io/cse121b-course/week05/temples.json'
    const response = await fetch(url)
    const data = await response.json()
    
    templeList = data

    output(templeList)
    
}

getTemples() 


// Step 3: Create another function called getTemples. Make it an async function.
// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
function reset(){
    const templesElement = document.getElementById("temples").innerHTML = ""
    return templesElement
    
};

function sortBy(e) {
    // - Calls the reset function
    reset();
  
    // - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
    
    if (e.target.value === 'templeNameAscending') {
      let sorted = templeList.sort(function(temple1,temple2) {return temple1.templeName > temple2.templeName ? 1 : -1});
      
      return output(sorted);
  
    }else if (e.target.value === 'templeNameDescending') {
      let sorted = templeList.sort(function(temple1,temple2) {return temple2.templeName > temple1.templeName ? 1 : -1});
      
      return output(sorted);
    };
    
  };
  
  // Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
  document.getElementById('sortBy').addEventListener('change', sortBy);

      
// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function

/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
