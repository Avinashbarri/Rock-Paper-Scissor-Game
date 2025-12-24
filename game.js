let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".img");
const msg = document.querySelector("#msg");
const userscore_content = document.querySelector("#user-score");
const compscore_content = document.querySelector("#comp-score");
const gencompchoice = () => {
    //rock,paper,sciccors
    const options = ["Rock", "Paper", "Scissors"]
    const randindx = Math.floor(Math.random() * 3)
    return options[randindx];
}
const showWinner = (userWin, userChoice, comChoice) => {
    if (userWin) {
        console.log("you win!");
        msg.innerText = `you win! your ${userChoice} beats Computer's ${comChoice}`;
        msg.style.backgroundColor = "green"
        userscore++;
        console.log(userscore)
        userscore_content.innerText = userscore;
    } else {
        console.log("you lose")
        msg.innerText = `you loose.Compuetr's ${comChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red"
        compscore++;
        compscore_content.innerText = compscore
    }
}
const playGame = (userChoice) => {
    console.log("userchoice was:", userChoice)
    //Generate computer choice
    const comChoice = gencompchoice();
    console.log("Computer choice was:", comChoice)
    if (userChoice === comChoice) {
        console.log("Game was draw")
        msg.innerText = "Game was Draw.Play Again";
        msg.style.backgroundColor = "#081b31"
    }
    else {
        let userWin = true;
        if (userChoice === "Rock") {
            //scissors,paper
            userWin = comChoice === "Paper" ? false : true;
        } else if (userChoice === "Paper") {
            //rock,scissors
            userWin = comChoice === "Scissors" ? false : true;
        }
        else {
            //comp-rock,paper
            userWin = comChoice === "Rock" ? false : true;
        }
        showWinner(userWin, userChoice, comChoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});