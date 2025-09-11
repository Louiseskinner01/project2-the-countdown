let randomNumbersCopy = [];
let targetNumber = null;
let activeInput = null; // track which input the keypad is typing into
const workingoutGrid = document.getElementById("working-grid");

function createEquationRow(numbers) {
    if (numbers) randomNumbersCopy = [...numbers];

    const row = document.createElement("div");
    row.classList.add("equation-row");

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "ENTER AN EQUASION";
    input.classList.add("equation-input");
    input.readOnly = "true"; //prevents the mobile device keyboardfrom appearing on the screen


    const output = document.createElement("span");
    output.classList.add("equation-result");

    const undoBtn = document.createElement("button");
    undoBtn.textContent = "Undo";
    undoBtn.classList.add("undo-btn");
    undoBtn.style.display = "none";

    // Track which input is active for the keypad
    input.addEventListener("focus", () => {
        activeInput = input;
    });

    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            handleInputEnter(input, output, undoBtn);
        }
    });

    undoBtn.addEventListener("click", function () {
        undoEquation(output.dataset.result, output.dataset.usedNumbers, row);
    });

    row.appendChild(input);
    row.appendChild(output);
    row.appendChild(undoBtn);

    workingoutGrid.appendChild(row);

    // Focus new row's input
    input.focus();
    activeInput = input;
}

// Create keypad ONCE
function createKeypad() {
    if (document.getElementById("game-keypad")) return;

    const keypad = document.createElement("div");
    keypad.id = "game-keypad";
    keypad.classList.add("keypad-container");
    workingoutGrid.appendChild(keypad); 

    const keys = [
        "7", "8", "9", "+",
        "4", "5", "6", "-",
        "1", "2", "3", "*",
        "0", ".", "(", ")",
        "←", "/", "C", "OK"
    ];

    keys.forEach(key => {
        const btn = document.createElement("button");
        btn.textContent = key;
        btn.classList.add("keypad-btn");
        btn.addEventListener("click", () => {
            if (!activeInput) return; // no active input yet

            if (key === "C") {
                activeInput.value = "";
            } else if (key === "←") {
                activeInput.value = activeInput.value.slice(0, -1);
            } else if (key === "OK") {
                handleInputEnter(activeInput, activeInput.nextSibling, activeInput.parentElement.querySelector(".undo-btn"));
            } else {
                activeInput.value += key;
            }
            activeInput.focus();
        });
        keypad.appendChild(btn);
    });

}

function handleInputEnter(input, output, undoBtn) {
    const value = input.value.trim();
    if (value === "") return;

    if (!/^[0-9+\-*/().\s]+$/.test(value)) {
        output.textContent = "Invalid characters";
        return;
    }

    const usedNums = value.match(/\d+/g)?.map(Number) || [];
    let tempAvailable = [...randomNumbersCopy];

    for (let num of usedNums) {
        const index = tempAvailable.indexOf(num);
        if (index === -1) {
            output.textContent = "Invalid: number not available";
            return;
        }
        tempAvailable.splice(index, 1);
    }

    try {
        let result = eval(value);
        result = Math.round(result * 2) / 2;

        output.textContent = "= " + result;
        output.dataset.result = result;
        output.dataset.usedNumbers = JSON.stringify(usedNums);

        randomNumbersCopy = tempAvailable;
        randomNumbersCopy.push(result);

        input.disabled = true;
        undoBtn.style.display = "inline-block";

        if (result === targetNumber) {
            gamesConsole.innerHTML = `🎉 WINNER! You solved it in ${timeLeft}!`;
        } else {
            createEquationRow();
        }
    } catch {
        output.textContent = "Error in equation";
    }
}

function undoEquation(result, usedNumbersJSON, row) {
    const usedNums = JSON.parse(usedNumbersJSON);
    randomNumbersCopy.push(...usedNums);

    const resIndex = randomNumbersCopy.indexOf(Number(result));
    if (resIndex !== -1) {
        randomNumbersCopy.splice(resIndex, 1);
    }

    row.remove();
}



