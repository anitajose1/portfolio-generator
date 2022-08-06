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

// This array holds the user command-line arguments
// const profileDataArgs = process.argv.slice(2)
// const [name, gitHub] = profileDataArgs

// imports inquirer
const inquirer = require("inquirer")
// check if inquirer got imported
// console.log(inquirer);

// function for user-related prompts
const promptUser = () => {
    return inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your name!");
                    return false
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "Enter your GitHub username (Required)",
            validate: githubName => {
                if (githubName) {
                    return true
                } else {
                    console.log("Please enter your GitHub username!");
                    return false
                }
            }
        },
        {
            type: "input",
            name: "about",
            message: "Provide some information about yourself:"
        }
    ])
}

// function for project-related prompts
const promptProject = portfolioData => {
    // If there's no 'projects' array property, create one
    if (!portfolioData.projects) {
        portfolioData.projects = []
    }

    console.log(`
        =================
        Add a New project
        =================
        `);

        return inquirer
        .prompt ([
            {
                type: "input",
                name: "name",
                message: "What is the name of your project?",
                validate: projectName => {
                    if (projectName) {
                        return true
                    } else {
                        console.log("Please enter the name of the project!");
                        return false
                    }
                } 
            },
            {
                type: "input",
                name: "description",
                message: "Provide a description of the project (Required)",
                validate: projectDescription => {
                    if (projectDescription) {
                        return true
                    } else {
                        console.log("Please enter a description for the project!");
                        return false
                    }
                }
            },
            {
                type: "checkbox",
                name: "languages",
                message: "What did you build this project with? (Check all that apply)",
                choices: ["JavaScript", "HTML", "CSS", "ES6", "jQuery", "Bootstrap", "Node"]
            },
            {
                type: "input",
                name: "link",
                message: "Enter the GitHub link to your project. (Required)",
                validate: projectLink => {
                    if (projectLink) {
                        return true
                    } else {
                        console.log("Please enter the project url!");
                        return false
                    }
                }
            },
            {
                type: 'confirm',
                name: 'feature',
                message: 'Would you like to feature this project?',
                default: false
              },
              {
                type: 'confirm',
                name: 'confirmAddProject',
                message: 'Would you like to enter another project?',
                default: false
              }
        ]).then(projectData => {
            portfolioData.projects.push(projectData)

            if (projectData.confirmAddProject) {
                return promptProject(portfolioData)
            } else {
                return portfolioData
            }
        })
}

// chain both functions together & call them
promptUser()
.then(promptProject)
.then(portfolioData => {
    console.log(portfolioData);
})


// imports the fs module in to the app and puts it in a variable
// const fs = require("fs")
// imports the generatePage function from the page-template.js file
// const generatePage = require("./src/page-template.js")

// const pageHTML = generatePage(name, gitHub)

// creates the actual html file using the template created and arguments passed through terminal
// fs.writeFile("./index.html", pageHTML, err => {
//     if (err) throw new Error(err);

//     console.log("Portfolio complete! Check out index.html to see the output!");
// })

// creates src folder
// fs.mkdir("./src", (err) => {
//     if (err) throw err
// })

// // created page-template file in src folder
// fs.writeFile("./src/page-template.js", err => {
//     if (err) throw err
// })

// // create .gitignore file
// fs.writeFile("./.gitignore", "node_modules", (err) => {
//     if (err) throw err;
//     console.log(".gitignore file created!");
// })