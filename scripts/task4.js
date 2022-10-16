/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let myInformation = {};

// Step 2: Inside of the object, add a property named name with a value of your name as a string
myInformation["name"] = "Victor Chisom Nmeka"
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
const myPic = "images/mypicture.jpg"
myInformation.photo = myPic 
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
myInformation.favoriteFoods = ["Beans", " Chicken", " Fish ", " Salad ","Okra","Pounded yam","Egusi"]
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
myInformation.hobbies = ["travelling","listening to music","reading"]

// Step 6: Add another property named placesLived with a value of an empty array
myInformation.placeLived = []

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
myInformation.placeLived = [
    {
        place: "Olodi-Apapa,Lagos State, Nigeria",
        length: 18, 
    },
    {
        place: "Yaba,Lagos State, Nigeria",
        length: 2, 
    },
]
// Step 8: For each property, add appropriate values as strings



// Step 9: Add additional objects with the same properties for each place you've lived

let addObj ={}
addObj.place = "Imo State"
addObj["length"] = "1 year"
myInformation.placeLived.push(addObj)

let anotherObj = {}
anotherObj.place = "Imo State"
anotherObj["length"] = "1 year"
myInformation.placeLived.push(anotherObj)


/* OUTPUT */ 

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.getElementById("name").textContent = myInformation.name
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").src = myInformation.photo
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").alt = myInformation.name
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element


for(let i = 0; i < myInformation.favoriteFoods.length; i++){
    let liElement = document.createElement("li")
    liElement.textContent = myInformation.favoriteFoods[i]
    let favoriteFoodsElement = document.getElementById("favorite-foods")
    favoriteFoodsElement.append(liElement)   
}
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
 
// Step 6: Repeat Step 4 for each hobby in the hobbies property
for (let i = 0; i < myInformation.hobbies.length; i++){
    let liElement = document.createElement("li")
    liElement.textContent = myInformation.hobbies[i]
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

    let hobbiesElement = document.getElementById("hobbies")
    hobbiesElement.append(liElement)
}


// Step 8: For each object in the <em>placesLived</em> property:

// // - Create an HTML <dt> element and put its place property in the <dt> element
// // - Create an HTML <dd> element and put its length property in the <dd> element


// // Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived

let placesLivedElement = document.getElementById("places-lived")
// accessing the first object in the placesLived array
let placeLivedObj1 = myInformation.placeLived[0]


let dtElementForObj1 = document.createElement("dt")
let ddElementForObj1 = document.createElement("dd")

dtElementForObj1.textContent = placeLivedObj1.place 
ddElementForObj1.textContent = placeLivedObj1["length"]

placesLivedElement.append(dtElementForObj1, ddElementForObj1)

// accessing the second object in the placesLived array
let placeLivedObj2 = myInformation.placeLived[1]
let dtElementForObj2 = document.createElement("dt")
let ddElementForObj2 = document.createElement("dd")

dtElementForObj2.textContent = placeLivedObj2.place
ddElementForObj2.textContent = placeLivedObj2["length"]

placesLivedElement.append(dtElementForObj2, ddElementForObj2)

// accessing the third object in the placesLived array
let placeLivedObj3 = myInformation.placeLived[2]


let dtElementForObj3 = document.createElement("dt")
let ddElementForObj3 = document.createElement("dd")

dtElementForObj3.textContent = placeLivedObj3.place
ddElementForObj3.textContent = placeLivedObj3["length"]

placesLivedElement.append(dtElementForObj3, ddElementForObj3)















