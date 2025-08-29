console.log("Hello, World");

greet();

///greet user and display name on webpage
function greet() {
    ///get the username from the prompt
    let userName = prompt("Please enter your name:");

    ///display the username on the webpage
    document.getElementById('username').innerText = userName;
}

///validate form input
function validateForm() {
    ///get value of input field
    let name = document.getElementById("name-input").value;

    ///check if name is empty
    if (name === "") {
        ///display alert message
        alert("Name must be filled out");
        return false;
    }
    else {
        ///show a thank you alert if name is valid
        alert("thank you, " + name + "!");
    }   
}