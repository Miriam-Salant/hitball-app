const hitBall = document.getElementById("hitBall")
const games = document.querySelectorAll(".game");
const currentUser = localStorage.getItem("currentUser");
const win = localStorage.getItem(`${currentUser}_win`) || 0;
const lost = localStorage.getItem(`${currentUser}_lost`) || 0;

document.getElementById("userName").textContent = currentUser;
document.getElementById("winCount").textContent = win;
document.getElementById("lostCount").textContent = lost;

hitBall.addEventListener("click", () => window.location.href = "../html/hitBall.html");

games.forEach(game => {
    game.addEventListener("click", () => {
        window.location.href = "../html/notAvailable.html";
    })
})