
const circle = document.getElementsByClassName("circle");
const modal = document.getElementById("modal");
const color = document.getElementsByClassName("color");
const feedbackCircle = document.getElementsByClassName("feedback-circle");
const currentUser = localStorage.getItem("currentUser");

let userColors = [];

let colors = ['red', 'blue', 'greenyellow', 'yellow', 'teal', 'orange'];
let flagColors = [false, false, false, false, false, false];
const random = [];

for (let i = 0; i < 100; i++) {
    const index = Math.floor(Math.random() * colors.length);
    if (flagColors[index] === false) {
        random.push(colors[index]);
        flagColors[index] = true;
    }
    if (random.length === 4) {
        console.log(random);
        break;
    }
}

let currentCircle;
let count = 0;
let currentLine = 0;
let arrRow = [];
let win = localStorage.getItem(`${currentUser}_win`) ;
let lost = localStorage.getItem(`${currentUser}_lost`);
for (let i = 0; i < circle.length; i++) {
    circle[i].addEventListener("click", () => {
        count++;
        currentCircle = circle[i];
        if (i / 4 >= currentLine && i / 4 <= currentLine + 1) {
            openColor();
            chooseColor();
        }
    })
}

const openColor = () => {
    modal.style.display = "block";
    modal.style.width = '240px';
    modal.style.height = '150px';
}

const chooseColor = () => {
    for (let j = 0; j < color.length; j++) {
        color[j].addEventListener("click", (e) => {
            currentCircle.style.backgroundColor = color[j].id;
            modal.style.display = "none";
            arrRow[count] = currentCircle.style.backgroundColor;
            if (count == 4) {
                currentLine++;
                boolAndPgiaa();
                count = 0;
                arrRow = [];
                arrRow[0] = "";
            }
        })
    }
}

let countPgiaa = 0;
let countBool = 0;
let countFeedbackCircle = 0;
let countWin = 0;

const boolAndPgiaa = () => {
    for (let i = 0; i < 4; i++) {
        if (random[i] === arrRow[i + 1]) {
            countBool++;
        }
        else {
            for (let j = 0; j < 4; j++) {
                if (random[i] === arrRow[j + 1])
                    countPgiaa++;
            }
        }
    }

    let countWin = 0;
    let countEmpty = 4 - countPgiaa - countBool;

    while (countBool > 0) {
        let feedback = feedbackCircle[countFeedbackCircle++];
        feedback.style.backgroundColor = "red";
        countBool--;
        countWin++;
    }

    if (countWin === 4) {
        win++;
        localStorage.setItem(`${currentUser}_win`, win);
        window.location.href = "../img/unnamed (15).gif";
    }

    while (countPgiaa > 0) {
        let feedback = feedbackCircle[countFeedbackCircle++];
        feedback.style.backgroundColor = "black";
        countPgiaa--;
    }

    countFeedbackCircle += countEmpty;
    
    if (currentCircle === circle[39] || currentLine === 10) {
        lost++;
        localStorage.setItem(`${currentUser}_lost`, lost);
        window.location.href = "../img/unnamed (12).gif";
    }
}