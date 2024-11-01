/* Query Selectors */
const unicornBoba = document.querySelector("#unicorn"); // select unicorn picture
const bobaCounter = document.querySelector("#counter"); // defining boba counter
const makeBobaButton = document.querySelector("#button");
const wlStatement = document.querySelector("#wlstatement"); // statement that shows up if you win/lose

// console.dir(unicornBoba); // checking that i properly selected the unicorn
// console.dir(bobaCounter); // checking that i properly selected the counter

let totalBoba = 0; // set my boba amount to 0

// add in a win scenario
makeBobaButton.addEventListener('click', () => { // create function that does something when i click on my Add Boba button
    totalBoba = totalBoba + 1; // add 1 to my count and replace count with new total
    bobaCounter.textContent = `Total Boba: ${totalBoba}`; // change the boba counter text to show current amount of total boba

    if (totalBoba >= 11) { // win condition! if reach 11 total boba then 
        makeBobaButton.disabled = true;
        wlStatement.innerText = 'You won! Game Over'
    // } else if (/* timer runs out*/) {
    //     makeBobaButton.disabled = true;
    //     wlStatement.innerText = 'You didnt make enough boba before time ran out. Game Over'
    }
});

