var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "/", "{", "}"];
var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var passGenArr = [];
var passMult = [];
var password = [];
var passMult = [];
var result = "";

document.addEventListener("click", function (event) {
    event.preventDefault;
    passGenArr = [];
    passMult = [];
    password = [];

    //Fisher-Yates Shuffle algorithm
    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
     
    if (event.target.value === "passGen") {
        var passLength = prompt("Please enter desired password length (between 8 - 128 characters):");

        if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
            return alert("Please choose a numeric value between 8 and 128");
        } else {
            var passNumbers = confirm("Would you like to include numbers in your password?");
            var passLowerCase = confirm("Would you like to include lowercase letters in your password?");
            var passUpperCase = confirm("Would you like to include uppercase letters in your password?");
            var passSpecial = confirm("Would you like to include special characters in your password?");
        }
        if (passNumbers == false && passLowerCase == false && passUpperCase == false && passSpecial == false) {
            return alert("You must have at least one parameter selected to generate password");
        }
        if (passNumbers == true) {
            numChar.forEach(function(number) {
                for(var i = 0; i < passLength; i++) {
                    passGenArr.push(number);
                }
            })
        }
        if (passLowerCase == true) {
            lowerChar.forEach(function (lower) {
                for(var i = 0; i < passLength; i++) {
                    passGenArr.push(lower);
                }
            })
        }
        if (passUpperCase == true) {
            upperChar.forEach(function (upper) {
                for(var i = 0; i < passLength; i++) {
                    passGenArr.push(upper);
                }
            })
        }
        if (passSpecial == true) {
            specialChar.forEach(function (special) {
                for(var i = 0; i < passLength; i++) {
                    passGenArr.push(special);
                }
            })
        }

        shuffle(passGenArr);
        console.log(passGenArr);
        for (var i = 0; i < passLength; i++) {
            password.push(passGenArr[i]);
        };
        console.log(password.join(""));
        document.getElementById("showPassword").innerHTML = password.join("");
    } else if (event.target.value === "reset") {
        window.location.reload();
    }
});

