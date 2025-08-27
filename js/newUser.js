const form = document.getElementById("form");
const userName = document.getElementById("name");
const password = document.getElementById("password");
const checkPassword = document.getElementById("checkPassword");

checkPassword.addEventListener("blur", () => {
    if (password.value != checkPassword.value) {
        checkPassword.value = ""
        alert("ארעה שגיאה בעת הכנסת הסיסמא😔")
    }
})

const users = []
const addNewUser = () => {
    const theName = userName.value;
    const thePassword = password.value;
    const obj = {
        name: theName,
        password: thePassword
    }
    users.push(obj);
    saveUsersInLocalStorage();
    const currentUser = userName.value;
    localStorage.setItem("currentUser", currentUser);
    userName.value = "";
    password.value = "";
    checkPassword.value = "";
    window.location.href = "../html/games.html";
}

const saveUsersInLocalStorage = () => {
    localStorage.setItem("users", JSON.stringify(users));
}