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
    function appendConfirmButton(){
        createConfirmBtn();
    }
    appendConfirmButton();
}
//This line assigns the setDifficulty function as a property on the global window object so it can be accessed anywhere
window.setDifficulty = setDifficulty;

//let timeConfirmed = false; //not in use yet

/** 
 * Create a button to generate a random set of numbers
 * Apply a class for styling and assign an ID 
 * Append the button and give it an event listener to call the generateRandomNumbers function
 */
function createRandomNumbersBtn() {
    const randomNumbersBtn = document.createElement("button");
    randomNumbersBtn.classList.add("controller-btn-styling")
    randomNumbersBtn.innerText = "Generate Numbers";
    randomNumbersBtn.id = "generate-random-numbers-btn";
    controllersArea.append(randomNumbersBtn);
    randomNumbersBtn.addEventListener("click", generateRandomNumbers);
}

/**
 * Disable the difficulty buttons which will naturally lock the timer
 * Remove the confirmDifficultyBtn 
 * Call the createRandomNumbersBtn function which will append a button allowing the user to generate random numbers
 */
function disableDifficultyBtns() {
    const difficultyButtons = document.querySelectorAll("#difficulty-btn-area .difficulty-btn");
    difficultyButtons.forEach(button => {
        button.disabled = true;
        button.classList.add("disabled"); 
    });
    confirmDifficultyBtn.remove();
    createRandomNumbersBtn();
}


//Create a button to generate a target number that the user will try to solve
function createGetTargetBtn() {
    const getTargetBtn = document.createElement("button");
    getTargetBtn.classList.add("controller-btn-styling");
    getTargetBtn.innerText = "Get Target Number";
    getTargetBtn.id = "get-target-num-btn";
    controllersArea.append(getTargetBtn);
    generateNumbersBtn.hidden = true;
}




    /*
    function generateTargetNumber(){
    const targetDiv = document.createElement("div");
    gamesConsole.append(targetDiv);
    targetDiv.classList.add("target-div-styling");
    targetDiv.innerText = "helllllllllo bitch!"
    
}

    */





//2 sets of arrays (one for small numbers and one for larger numbers) which be used to for generating random numbers
const smallNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const largeNumbers = [25, 33, 50, 66, 75, 99, 115, 132, 150];

function generateRandomNumbers() {
    // Shuffle copies of the arrays
    const shuffleSmall = shuffle([...smallNumbers]);
    const shuffleLarge = shuffle([...largeNumbers]);

    // Select the first 4 numbers from the small numbers array and the first 2 numbers from the large numbers array
    const selectedSmall = shuffleSmall.slice(0, 4);
    const selectedLarge = shuffleLarge.slice(0, 2);

    /** 
     * Combine selected numbers from each array
     * Place each item into a span element
     * Display into the gamesConsole
     * Using map here to place each item into its own span element for styling
     */  
    const numbers = selectedSmall.concat(selectedLarge);
    gamesConsole.innerHTML = numbers.map(num => `<span class="generated-number">${num}</span>`).join("");
    
    randomNumbersBtn.disabled = true;
    
    createGetTargetBtn();
}



// Fisher–Yates shuffle method
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
    return array;
}



