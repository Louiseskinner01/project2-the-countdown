

// workingout-grid.js
let randomNumbersCopy = [];
let arrayOfResults = [];

let activeInput = null; // Track active input for keypad

const workingoutGrid = document.getElementById("working-grid-1");
const workingoutGridTwo = document.getElementById("working-grid-2");
const outputDiv = document.createElement("div"); // Single output for console

// Create one input row
function createEquationRow(numbers) {
    if (numbers) randomNumbersCopy = [...numbers];

    // Clear previous row if exists
    workingoutGridTwo.innerHTML = "";

    const row = document.createElement("div");
    row.classList.add("workingGrid");

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "ENTER AN EQUATION";
    input.classList.add("equation-input");
    input.readOnly = true;

    const undoBtn = document.createElement("button");
    undoBtn.textContent = "Undo";
    undoBtn.classList.add("undo-btn");
    undoBtn.style.display = "none";

    // Append the outputDiv to console
    outputDiv.id = "output-div";
    outputDiv.classList.add("output-div-styling");
    outputDiv.textContent = "";
    gamesConsole.appendChild(outputDiv);

    // Focus tracking
    input.addEventListener("focus", () => activeInput = input);

    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            handleInputEnter(input, undoBtn);
        }
    });

    undoBtn.addEventListener("click", function () {
        undoEquation(outputDiv.dataset.result, outputDiv.dataset.usedNumbers, input);
    });

    row.appendChild(input);
    row.appendChild(undoBtn);
    workingoutGridTwo.appendChild(row);

    input.focus();
    activeInput = input;
}

// Keypad creation (use your simplified keypad)
function createKeypad() {
    if (document.getElementById("game-keypad")) return;

    const keypad = document.getElementById("keyPad-area");
    keypad.id = "game-keypad";
    keypad.classList.add("keypad-container");
    workingoutGrid.appendChild(keypad);

    const keys = [
        "7","8","9","+",
        "4","5","6","-",
        "1","2","3","*",
        "0","←","OK","/"
    ];

    keys.forEach(key => {
        const btn = document.createElement("button");
        btn.textContent = key;
        btn.classList.add("keypad-btn");

        btn.addEventListener("click", () => {
            if (!activeInput) return;

            if (key === "←") {
                activeInput.value = activeInput.value.slice(0, -1);
            } else if (key === "OK") {
                handleInputEnter(activeInput, activeInput.parentElement.querySelector(".undo-btn"));
                activeInput.value = "";
            } else {
                activeInput.value += key;
            }
            activeInput.focus();
            
        });

        keypad.appendChild(btn);
    });
}

// Handle equation input
function handleInputEnter(input, undoBtn) {
    const value = input.value.trim();
    if (!value) return;

    const usedNums = value.match(/\d+/g)?.map(Number) || [];
    let tempAvailable = [...randomNumbersCopy];

    // Validate numbers
    for (let num of usedNums) {
        const index = tempAvailable.indexOf(num);
        if (index === -1) {
            outputDiv.textContent = "Invalid: number not available";
            return;
        }
        tempAvailable.splice(index, 1);
    }

    try {
        let result = eval(value);
        result = Math.round(result * 2) / 2;

        // Update console
 // Store this result
 arrayOfResults.push(result);

 // Re-render all results into the console
 outputDiv.innerHTML = arrayOfResults
     .map((res, index) => `<div class="result-item">  ${res} </div>`)
     .join("");

 gamesConsole.append(outputDiv);

        outputDiv.dataset.result = result;
        outputDiv.dataset.usedNumbers = JSON.stringify(usedNums);

        randomNumbersCopy = tempAvailable;
        randomNumbersCopy.push(result);

        input.disabled = true;
        undoBtn.style.display = "block";

        if (Number(result) === Number(targetNum)) {
            timeLeft = Math.floor(timeLeft); // whole seconds
            clearInterval(countdownInterval);
            gamesConsole.innerHTML = `🎉 WINNER! You solved The Countdown. Result: ${result}. Time left: ${timeLeft} seconds!`;
            workingoutGrid.style.display = "none";
            workingoutGridTwo.style.display = "none";
            window.playAgain();
        }

    } catch {
        outputDiv.textContent = "Error in equation";
    }
}

// Undo function
function undoEquation(result, usedNumbersJSON, input) {
    const usedNums = JSON.parse(usedNumbersJSON);
    randomNumbersCopy.push(...usedNums);

    const resIndex = randomNumbersCopy.indexOf(Number(result));
    if (resIndex !== -1) randomNumbersCopy.splice(resIndex, 1);

    input.disabled = false;
    input.value = "";
    activeInput = input;
    outputDiv.textContent = "";
}
