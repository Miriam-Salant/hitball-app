const name = document.getElementById("name");
const password = document.getElementById("password");

const submit = document.getElementById('submit');

const checkUser = () => {
    const users = JSON.parse(localStorage.getItem("users"));
    console.log(users);
    if (!users) {
        window.location.href = "../html/newUser.html";
        alert("המשתמש לא מזוהה במערכת-- 😞");
        return;
    }
    const find = users.find(person => {
        return person.name === name.value && person.password === password.value;
    })
    if (!find) {
        alert("המשתמש לא מזוהה במערכת-- 😞");
        window.location.href = "../html/newUser.html";
    }
    else{
        window.location.href = "../html/games.html";
        name.value = "";
        password.value = "";
    }
}
