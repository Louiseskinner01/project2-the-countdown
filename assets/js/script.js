/* jshint esversion: 6 */
/* global timerArea */
/* global createKeypad */
/* global createEquationRow */
/* global playAgain */

window.timeLeft = 0;
window.timerArea = null;
window.timerDisplay = null;


let confirmDifficultyBtn;
let timeLeft;

//let playSpan;
let controllersArea = document.getElementById("controllers-area");
const gamesConsole = document.getElementById("games-console");
const difficultyButtons = document.querySelectorAll(".difficulty-btn");
let availableNumbers = [];  
let targetNum = null;



document.addEventListener("DOMContentLoaded", () => {
    const consolePlay = document.getElementById("console-play");

    consolePlay.addEventListener("click", () => {
        displayControllers();   // start the game
        consolePlay.remove();   // permanently remove PLAY? span
    });
});

//Display buttons to set difficulty level and hide the "PLAY" text
function displayControllers() {
    document.getElementById("difficulty-btn-area").style.display = "flex";
    gamesConsole.classList.add("console-styling");
    gamesConsole.innerText = "Select a difficulty level, this will update the timer. Once you have decided what level to play at, click the confirm level button below. ";
    document.getElementById("console-play").style.display = "none";
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
let selectedDifficulty = 0; // Timer digits are set to 00:00 as default

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

 const buttons = document.querySelectorAll(".difficulty-btn");
  
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      // If this button is already active, unselect it
      if (btn.classList.contains("active")) {
        btn.classList.remove("active");
      } else {
        // Remove active from all buttons
        buttons.forEach(b => b.classList.remove("active"));
        // Add to clicked button
        btn.classList.add("active");
      }
    });
  });



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

    randomNumbersBtn.classList.add("controller-btn-styling");
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

window.timerArea = document.getElementById("timer");
function disableDifficultyBtns() {
        difficultyButtons.forEach(button => {
        button.remove();
        timerArea.style.color = "deeppink";
        timerArea.style.display = "block";

    });
    
    confirmDifficultyBtn.remove();

     // Add controls for the next step
    createRandomNumbersBtn();
}



// Countdown logic
function createStartBtns() {
    const startGameBtn = document.createElement("button");
    startGameBtn.id = "start-game-btn";
    startGameBtn.classList.add("controller-btn-styling");
    startGameBtn.innerText = "Start Game!";

    controllersArea.append(startGameBtn);
    workingoutGrid.style.display = "block";
    workingoutGridTwo.style.display = "block";
       //Creates and apends the built-in keypad.
        createKeypad();

     
    startGameBtn.addEventListener("click", () => {
        startCountdown(selectedDifficulty);

        difficultyButtons.forEach(button => button.remove());
           //Creates and apends the input rows for the user to perform calculations.
           createEquationRow(availableNumbers); 

           timerArea.style.backgroundColor = "var(--calm-color)";
           timerArea.style.color = "var(--main-theme-color)";
           document.getElementById("timer-digits").style.color = "var(--feature-color)";
            
              // 🔹 Select keypad buttons AFTER createKeypad() has run
    const keypadBtns = document.querySelectorAll(".keypad-btn");

    keypadBtns.forEach(key => {
        key.style.backgroundColor = "var(--main-theme-color)";
        key.style.color = "var(--sub-theme-color)"; 
    });
        startGameBtn.remove();
    });
}

function startCountdown(durationInSeconds) {
    clearInterval(countdownInterval);
    timeLeft = durationInSeconds;
    startTime = Date.now();

    //globalising this function so it can be used in the workingout-grid.js
    window.playAgain = function(){
        const startNewGameBtn = document.createElement("button");
        startNewGameBtn.classList.add("controller-btn-styling");
        startNewGameBtn.id = "play-again";
        startNewGameBtn.innerText = "Play again?";
        controllersArea.append(startNewGameBtn);
        workingoutGrid.style.display = "none";
        const equationInput = document.getElementById("equation-input");
        equationInput.remove();
        const undoBtn = document.getElementById("undo-btn");
        undoBtn.remove();
        startNewGameBtn.addEventListener("click", startNewGame);

    };

    function startNewGame() {
        window.location.reload();
      }
      
     
    

    function updateDisplay() {
        timeLeft--;
        updateTimerDisplay(timeLeft);

        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            //alert("Take more practice!");  
            gamesConsole.innerHTML = "Sorry your time has ran out... Countdown suggests that you take more practice!"; 
            playAgain();
        }
    }

    updateDisplay();
    countdownInterval = setInterval(updateDisplay, 1000);
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

function generateTargetNumber() {
    // Clone the array so we don't mess with the original numbers
    let pool = [...availableNumbers];

    // Start with one random number from the pool
    let currentValue = pool.splice(Math.floor(Math.random() * pool.length), 1)[0];

    // Decide how many steps to take (2 to 4 random operations)
    const steps = Math.floor(Math.random() * 3) + 2;

    for (let i = 0; i < steps; i++) {
        if (pool.length === 0) break;

        // Pick another random number
        const nextNumber = pool.splice(Math.floor(Math.random() * pool.length), 1)[0];

        // Randomly select an operator
        const operators = ["+", "-", "*"];
        const operator = operators[Math.floor(Math.random() * operators.length)];

        // Perform the operation
        if (operator === "+") {
            currentValue += nextNumber;
        } else if (operator === "-") {
            // Always keep subtraction positive
            currentValue = Math.abs(currentValue - nextNumber);
        } else if (operator === "*") {
            currentValue *= nextNumber;
        }
    }

    // Ensure target is challenging and valid
    if (currentValue < 122 || currentValue > 1017) {
       // console.warn(`Retrying target generation, invalid value: ${currentValue}`);
        return generateTargetNumber(); // Retry
    }

    // Save and display the final target
    targetNum = currentValue;

    const targetDiv = document.createElement("div");
    targetDiv.id = "target-div";
    targetDiv.classList.add("target-div-styling");
    targetDiv.textContent = `Target: ${targetNum}`;
    gamesConsole.append(targetDiv);

    // Cleanup and proceed to game start
    getTargetBtn.remove();
    createStartBtns();
}


const smallNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
