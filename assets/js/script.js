let confirmDifficultyBtn;
let difficultyBtns;
let timerDisplay;
let playSpan;
let controllersArea = document.getElementById("controllers-area");
const gamesConsole = document.getElementById("games-console");
const difficultyButtons = document.querySelectorAll(".difficulty-btn");

// Store available numbers for validation in workingout-grid.js
let availableNumbers = [];
let targetNum = null;

//Display buttons to set difficulty level and hide the "PLAY" text
function displayControllers() {
    document.getElementById("difficulty-btn-area").style.visibility = "visible";
    document.getElementById("timer-area").style.visibility = "visible";
    document.getElementById("console-play").style.visibility = "hidden";
    gamesConsole.classList.add("console-styling");
    gamesConsole.innerText = "Select a difficulty level, this will update the timer. Once you have decided what level to play at, click the confirm level button below. ";
}

/** 
 * Create a DOM element to allow the user to confirm level. 
 * Add an event listener to call the dissableDifficultyBtns function when the button is clicked.
 */
function createConfirmBtn() {
    // Check if the confirm button already exists
    if (document.getElementById("confirm-difficulty-btn")) {
        return; // If it exists, don't create another
    }
    confirmDifficultyBtn = document.createElement("button");
    confirmDifficultyBtn.classList.add("controller-btn-styling");
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
    function appendConfirmButton() {
        createConfirmBtn();
    }
    appendConfirmButton();
}
window.setDifficulty = setDifficulty;

/** 
 * Create a button to generate a random set of numbers
 * Apply a class for styling and assign an ID 
 * Append the button and give it an event listener to call the generateRandomNumbers function
 */
const randomNumbersBtn = document.createElement("button");
function createRandomNumbersBtn() {
    if (document.getElementById("generate-random-numbers-btn")) {
        return;
    }

    randomNumbersBtn.classList.add("controller-btn-styling")
    randomNumbersBtn.innerText = "Generate Numbers";
    randomNumbersBtn.id = "generate-random-numbers-btn";
    controllersArea.append(randomNumbersBtn);

    randomNumbersBtn.addEventListener("click", generateRandomNumbers);
}

/**
 * Replace the difficulty buttons with a built-in keypad.
 *  This method (or disabling the buttons natually locks the timer "time confirmed")
 * Remove the confirmDifficultyBtn 
 * Call the createRandomNumbersBtn function which will append a button allowing the user to generate random numbers
 */
function disableDifficultyBtns() {
   // const difficultyButtons = document.querySelectorAll("#difficulty-btn-area .difficulty-btn");
    difficultyButtons.forEach(button => {
        button.disabled = true;
        button.classList.add("disabled");
       document.getElementById("timer-area").style.color = "deeppink";
       
    });
    confirmDifficultyBtn.remove();
    createRandomNumbersBtn();
}

// Countdown logic
function createStartBtns() {
    const startGameBtn = document.createElement("button");
    startGameBtn.id = "start-game-btn";
    startGameBtn.classList.add("controller-btn-styling");
    startGameBtn.innerText = "Start Game!"

    controllersArea.append(startGameBtn);

    startGameBtn.addEventListener("click", () => {
        startCountdown(selectedDifficulty);
        createEquationRow(); // Start the working grid when game starts
        difficultyButtons.forEach(button => {
        button.remove();
    });
        workingoutGrid.style.visibility = "visible";
        createKeypad();
        startGameBtn.remove();
    });
}

function startCountdown(durationInSeconds) {
    clearInterval(countdownInterval);
    let timeLeft = durationInSeconds;
    startTime = Date.now();

    function updateDisplay() {
        updateTimerDisplay(timeLeft);

        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            //alert("Take more practice!");  
            gamesConsole.innerHTML = "Sorry your time has ran out... Countdown suggests that you take more practice!"
            gamesConsole.style.fontSize = "36px";
        }
        timeLeft--;
    }

     // NEW: Start the working grid
     createEquationRow(availableNumbers, targetNum);

    updateDisplay();
    countdownInterval = setInterval(updateDisplay, 1000);
}



function generateTargetNumber() {
    let max = 1000;
    let min = 131;
    targetNum = Math.floor(Math.random() * (max - min)) + min;

    const targetDiv = document.createElement("div");
    targetDiv.id = "target-div";
    gamesConsole.append(targetDiv);
    targetDiv.classList.add("target-div-styling");
    targetDiv.append(targetNum);
    

    getTargetBtn.addEventListener("click", createStartBtns);
    if (document.getElementById("target-div")) {
       // randomNumbersBtn.remove();
        getTargetBtn.remove();
        createStartBtns();
    }
}

const getTargetBtn = document.createElement("button");
function createGetTargetBtn() {
    if (document.getElementById("get-target-num-btn")) {
        return;
    }
    getTargetBtn.classList.add("controller-btn-styling");
    getTargetBtn.innerText = "Get Target Number";
    getTargetBtn.id = "get-target-num-btn";
    controllersArea.append(getTargetBtn);
    getTargetBtn.addEventListener("click", generateTargetNumber);
}

const smallNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const largeNumbers = [25, 33, 51, 66, 75, 84, 87, 91];

function generateRandomNumbers() {
    const shuffleSmall = shuffle([...smallNumbers]);
    const shuffleLarge = shuffle([...largeNumbers]);
    const selectedSmall = shuffleSmall.slice(0, 4);
    const selectedLarge = shuffleLarge.slice(0, 2);

    availableNumbers = selectedSmall.concat(selectedLarge); // store for workingout-grid.js

    gamesConsole.innerHTML = availableNumbers.map(num => `<span class="generated-number">${num}</span>`).join("");

    createGetTargetBtn();
    randomNumbersBtn.remove();
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
