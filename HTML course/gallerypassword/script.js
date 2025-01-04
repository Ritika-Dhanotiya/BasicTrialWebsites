function checkPassword() {
    var password = document.getElementById("password").value;

    // Change the password to your desired password
    if (password === "arnav654321") {
        document.getElementById("password-container").style.display = "none";
        document.getElementById("gallery").style.display = "block";
    } else {
        document.getElementById("error-message").innerText = "Incorrect password. Please try again.";
    }
}