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
