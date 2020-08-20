var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "`", "{", "}", "[", "]", "|", ";", ":", "<", ">", "/", "?", ",", "."];
var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var passGenArr = [];

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#showPassword");

    passwordText.innerHTML = password;
};

function generatePassword() {
    passGenArr = [];

    var passLength = prompt("Please enter desired password length (between 8 - 128 characters):");

    if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
        return alert("Please choose a numeric value between 8 and 128");
    } else {
        var passNumbers = confirm("Would you like to include numbers in your password?");
        var passLowerCase = confirm("Would you like to include lowercase letters in your password?");
        var passUpperCase = confirm("Would you like to include uppercase letters in your password?");
        var passSpecial = confirm("Would you like to include special characters in your password?");
    }
    if (!passNumbers && !passLowerCase && !passUpperCase && !passSpecial) {
        return alert("You must have at least one parameter selected to generate password");
    }
    if (passNumbers) {
        passGenArr.push(...numChar);
    }
    if (passLowerCase) {
        passGenArr.push(...lowerChar);
    }
    if (passUpperCase) {
        passGenArr.push(...upperChar);
    }
    if (passSpecial) {
        passGenArr.push(...specialChar);
    }

    return newPassword(passLength);
};

document.addEventListener("click", function (event) {
    if (event.target.value === "passGen") {
        writePassword();
    } else if (event.target.value === "reset") {
        location.reload();
    }
});

function newPassword(length) {
    var mixedNumbers = "";
    for (var i = 0; i < length; i++) {
        mixedNumbers += passGenArr[Math.floor(Math.random() * passGenArr.length)];
    }
    
    return mixedNumbers;
};


