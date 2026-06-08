let userScore = 0; // stores user score
let compScore = 0; // stores computer score

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscoreBoard = document.querySelector("#user-score");
const compscoreBoard = document.querySelector("#comp-score");

const genCompChoice = () => {
    const choices = ["rock", "paper", "scissor"];
    const ranindex = Math.floor(Math.random() * 3); // random index from 0 to 2
    return choices[ranindex];
};

const drawGame = () => {
    msg.innerText = "Woww! It's a Draw!";
    msg.style.backgroundColor = "#facc15";
    msg.style.color = "#111827";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userscoreBoard.innerText = userScore;
        msg.innerText = `Yahhh! ${userChoice} beats ${compChoice}`; // win message
        msg.style.backgroundColor = "#22c55e";
        msg.style.color = "#111827";
    } else {
        compScore++;
        compscoreBoard.innerText = compScore;
        msg.innerText = `Ohh noo! ${compChoice} beats ${userChoice}`; // lose message
        msg.style.backgroundColor = "#ef4444";
        msg.style.color = "#111827";
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;

        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});