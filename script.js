function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const error = document.getElementById('error');

    const correctUser = "Carl Quest";
    const correctPasswords = ["Steven Quest", "Anna Quest"];

    if (username !== correctUser) {
        error.textContent = "帳號錯誤";
    } else if (!correctPasswords.includes(password)) {
        error.textContent = "密碼錯誤";
    } else {
        window.location.href = "page2.html";
    }
}