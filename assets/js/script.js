let confirmDifficultyBtn;
let difficultyBtns;
let timerDisplay;
let playSpan;

let controllersArea = document.getElementById("controllers-area");
const gamesConsole = document.getElementById("games-console");

//Display buttons to set difficulty level and hide the "PLAY" text
function displayControllers() {
    document.getElementById("difficulty-btn-area").style.visibility = "visible";
    document.getElementById("timer-area").style.visibility = "visible";
    document.getElementById("console-play").style.visibility = "hidden";
    gamesConsole.classList.add("console-styling-class");
    gamesConsole.innerText = "Select a difficulty level, this will update the timer. Once you have decided what level to play at, click the confirm level button below. ";
    
}

/** 
 * Create a DOM element to allow the user to confirm level. 
 * Add an event listener to call the dissableDifficultyBtns function when the button is clicked.
 */
 
function createConfirmBtn() {
    confirmDifficultyBtn = document.createElement("button");
    confirmDifficultyBtn.innerText = "Confirm difficulty level";
    confirmDifficultyBtn.id = "confirm-difficulty-btn";
    confirmDifficultyBtn.addEventListener("click", disableDifficultyBtns);
    controllersArea.append(confirmDifficultyBtn);
    
}

/**
 * This two functions below allow the user to select a difficulty level.
 * The first function (updateTimerDisplay(seconds)) takes seconds as it value and siaplys the value in 00:00 format
 * The second function updates the timer and confirm the level.
 */

let countdownInterval;
let startTime;
let selectedDifficulty = 00; // Timer digits are set to 00:00 as default

// Displays seconds on the timer element
function updateTimerDisplay(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    document.getElementById("timer-digits").textContent =
        `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

// Set the difficulty level and update timer display
function setDifficulty(seconds) {
    selectedDifficulty = seconds;
    updateTimerDisplay(seconds);
    function appendConfirmButton(){
        createConfirmBtn();
    }
    appendConfirmButton();
}
//This line assigns the setDifficulty function as a property on the global window object so it can be accessed anywhere
window.setDifficulty = setDifficulty;