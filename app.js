/* Query Selectors */
// const unicornBoba = document.querySelector("#unicorn"); // select unicorn picture
const bobaCounter = document.querySelector("#counter"); // defining boba counter
const makeBobaButton = document.querySelector("#boba");
const wlStatement = document.querySelector("#wlstatement"); // statement that shows up if you win/lose
const playButton = document.querySelector("#start"); // select my start button on title screen
const playAgainButton = document.querySelector("#restart");
const dontClickMe = document.querySelector("#combust");
const machineButton = document.querySelector("#machine");

// console.dir(unicornBoba); // checking that i properly selected the unicorn
// console.dir(bobaCounter); // checking that i properly selected the counter





/* Variables */
let totalBoba = 0; // set my boba amount to 0

const winLogic = () => {
    if (totalBoba >= 111) {
        makeBobaButton.disabled = true;
        machineButton.disabled = true;
        wlStatement.innerText = 'You won! Game Over';
        playAgainButton.style.visibility = "visible";
    }
};






/* Event Listeners */
if (playButton) { // only run this if its an element on my current page
    playButton.addEventListener('click', () => {
        // link me to my game page
        window.location.href = "./index.html";
    });
};

if (makeBobaButton) {
    playAgainButton.style.visibility = "hidden"; // google'd to find this syntax
    playAgainButton.addEventListener('click', () => {
        // refresh my page which restarts counter
        location.reload();
    });
    
    machineButton.style.visibility = "hidden";
    makeBobaButton.addEventListener('click', () => { // create function that does something when i click on my Add Boba button
        totalBoba = totalBoba + 1; // add 1 to my count and replace count with new total
        bobaCounter.textContent = `Total Boba: ${totalBoba}`; // change the boba counter text to show current amount of total boba

        if (totalBoba >= 22) {
            machineButton.style.visibility = "visible";
            wlStatement.innerText = 'You have unlocked a boba machine! Click Use Boba Machine! to make boba drinks faster.';
    
            machineButton.addEventListener('click', () => {
                totalBoba = totalBoba + 2;
                bobaCounter.textContent = `Total Boba: ${totalBoba}`;
                winLogic();
            });
        };

        winLogic();
    });
};

if (dontClickMe) {
    dontClickMe.addEventListener('click', () => {
        makeBobaButton.disabled = true;
        machineButton.disabled = true;
        wlStatement.innerText = 'I told you not to click me muahahhaaha game over! GGs';
        playAgainButton.style.visibility = "visible";
    });
};












/* click event for */
// const clickCounter = (event) => {
//     console.dir(event.target.id);
//     if (event.target.id === 'unicorn') {
//         totalBoba = totalBoba + 1; // add 1 to boba total number
//         console.log(totalBoba); // store boba total number
//         bobaCounter.textContent = `Total Boba: ${totalBoba}`; // change the text of my boba counter from Total Boba: 0 to current count of boba
//     }
// }

// unicornBoba.addEventListener('click', clickCounter); // run this function on the click
