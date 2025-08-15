let randomNumbersCopy = [];
let targetNumber = null;
const workingoutGrid = document.getElementById("working-grid");

function createEquationRow(numbers) {
    if (numbers) randomNumbersCopy = [...numbers];
    // if (target) targetNumber = target; this line adds no value and can be removed (i have already moved the target from the function arguement) 

    const container = document.getElementById("working-grid");

    const row = document.createElement("div");
    row.classList.add("equation-row");

    /*
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter equation (e.g. 25 + 50)";
    input.classList.add("equation-input");
*/

const input = document.createElement("input");

// Mobile-friendly numeric + operators input
input.type = "tel"; // triggers numeric keypad on most devices
input.inputMode = "numeric"; // hints to show numeric keypad
input.pattern = "[0-9+\\-*/(). ]*"; // allow digits, + - * / ( ) and spaces
input.placeholder = "Enter equation (e.g. 25 + 50)";

input.classList.add("equation-input");


    const output = document.createElement("span");
    output.classList.add("equation-result");

    const undoBtn = document.createElement("button");
    undoBtn.textContent = "Undo";
    undoBtn.classList.add("undo-btn");
    undoBtn.style.display = "none";

    input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            handleInputEnter(input, output, undoBtn);
        }
    });

    undoBtn.addEventListener("click", function() {
        undoEquation(output.dataset.result, output.dataset.usedNumbers, row);
        undoBtn.classList.add("controller-btn-styling");
    });

    row.appendChild(input);
    row.appendChild(output);
    row.appendChild(undoBtn);
    container.appendChild(row);

    input.focus();
}


function handleInputEnter(input, output, undoBtn) {
    const value = input.value.trim(); //removing all white space except for in between numbers
    if (value === "") return;

    if (!/^[0-9+\-*/().\s]+$/.test(value)) { //prevents invalid characters so the user can only enter numbers. Basic security and logic guard
        output.textContent = "Invalid characters"; 
        return;
    }

    const usedNums = value.match(/\d+/g)?.map(Number) || []; //this line needs more clarity
    let tempAvailable = [...randomNumbersCopy];

    for (let num of usedNums) {
        const index = tempAvailable.indexOf(num);
        if (index === -1) {
            output.textContent = "Invalid: number not available";
            output.classList.add("output-styling");
            return;
        }
        tempAvailable.splice(index, 1);
    }

    try {
        let result = eval(value);
    
        // Round to nearest 0.5
        result = Math.round(result * 2) / 2;
    
        output.textContent = "= " + result;
        output.style.color = "black";
        output.dataset.result = result;
        output.dataset.usedNumbers = JSON.stringify(usedNums);
    
        randomNumbersCopy = tempAvailable;
        randomNumbersCopy.push(result); // allow result as new usable number
    
        updateRunningTotal(result); //possbile rename to check if user has won
        input.disabled = true;
        undoBtn.style.display = "inline-block";
        createEquationRow();
    } catch {
        output.textContent = "Error in equation";
        //output.style.color = "red";
    }
}

function updateRunningTotal(result) {
         if (result === targetNumber) {
         gamesConsole.innerHTML = `🎉 🎉 🎉 WINNER WINNER CHICKEN DINNER!!! You solved that equation in ${timeLeft} time!`
     }
 }


function undoEquation(result, usedNumbersJSON, row) {
    const usedNums = JSON.parse(usedNumbersJSON); //convert from string back to array of numbers
    randomNumbersCopy.push(...usedNums);

    const resIndex = randomNumbersCopy.indexOf(Number(result));
    if (resIndex !== -1) {
        randomNumbersCopy.splice(resIndex, 1); // remove that result from list
    }

    result -= Number(result);
    //document.getElementById("running-total").textContent = `Total: ${totalSum}`;
    row.remove();
}