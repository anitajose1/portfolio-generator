const profileDataArgs = process.argv.slice(2, process.argv.length)
// console.log(profileDataArgs);

// Note: arrow functions that have only 1 parameter don't need "()". It also doesn't need "{}" if it performs only 1 action. 
const printProfileData = profileDataArr => {
    // This...
    for (let i = 0; i < profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }
    
    console.log('========');
    
    // Is the the same as this...
    profileDataArr.forEach(profileItem => console.log(profileItem))
    /* .forEach() is a newer type of method that accepts a function as an argument and
     executes that function on each element of the array, using the value of the element at that iteration as its argument. */
}

printProfileData(profileDataArgs)