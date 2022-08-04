// Note: arrow functions that have only 1 parameter don't need "()". It also doesn't need "{}" if it performs only 1 action. 
// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }
    
//     console.log('========');
    
    // Is the the same as this...
    // profileDataArr.forEach(profileItem => console.log(profileItem))
    /* .forEach() is a newer type of method that accepts a function as an argument and
     executes that function on each element of the array, using the value of the element at that iteration as its argument. */
// }


// imports the fs module in to the app and puts it in a variable
const fs = require("fs")

// imports the generatePage function from the page-template.js file
const generatePage = require("./src/page-template.js")

// This array holds the user command-line arguments
const profileDataArgs = process.argv.slice(2)
const [name, gitHub] = profileDataArgs

const pageHTML = generatePage(name, gitHub)

// creates the actual html file using the template created and arguments passed through terminal
fs.writeFile("./index.html", pageHTML, err => {
    if (err) throw new Error(err)
    console.log("Portfolio complete! Check out index.html to see the output!");
})

// creates src folder
// fs.mkdir("./src", (err) => {
//     if (err) throw err
// })

// // created page-template file in src folder
// fs.writeFile("./src/page-template.js", err => {
//     if (err) throw err
// })