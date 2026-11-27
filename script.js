document.getElementById("form").onsubmit = function(e) {
    e.preventDefault();

    let pass = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    if (pass !== confirm) {
        alert("Passwords do not match!");
    } else {
        alert("Registration Successful!");
    }
};
