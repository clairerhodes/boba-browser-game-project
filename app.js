/* Query Selectors */
const bobaCounter = document.querySelector("#counter"); // defining boba counter
const makeBobaButton = document.querySelector("#boba");
const wlStatement = document.querySelector("#wlstatement"); // statement that shows up if you win/lose
const playButton = document.querySelector("#start"); // select my start button on title screen
const playAgainButton = document.querySelector("#restart");
const dontClickMe = document.querySelector("#combust");

// console.dir(unicornBoba); // checking that i properly selected the unicorn
// console.dir(bobaCounter); // checking that i properly selected the counter

/* Variables */
let totalBoba = 0; // set my boba amount to 0

/* Event Listeners */
if (playButton) {
    playButton.addEventListener('click', () => {
        // link me to my game page
        window.location.href = "./index.html";
    });
};

if (makeBobaButton) {
    playAgainButton.style.visibility = "hidden"; // google'd to find this syntax
    playAgainButton.addEventListener ('click', () => {
        // refresh my page which restarts counter
        location.reload();
    });
    makeBobaButton.addEventListener('click', () => { // does something when i click on my Add Boba button
        totalBoba = totalBoba + 1; // add 1 to my count and replace count with new total
        bobaCounter.textContent = `Total Boba: ${totalBoba}`; // change the boba counter text to show current amount of total boba
    
        if (totalBoba >= 11) { // win condition!
            makeBobaButton.disabled = true;
            wlStatement.innerText = 'You won! Game Over';
            playAgainButton.style.visibility = "visible";
        }
    });
};

if (dontClickMe) { // lose condition!
    dontClickMe.addEventListener('click', () => {
        makeBobaButton.disabled = true;
        wlStatement.innerText = 'I told you not to click me muahahhaaha GGs';
        playAgainButton.style.visibility = "visible";
    });
};






