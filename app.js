// Function that displays the value
function dis(val) {
    document.getElementById("result").value += val;
}

// Function that evaluates the digit and returns the result
function solve() {
    try {
        let x = document.getElementById("result").value;
        let y = eval(x); // Evaluates the expression
        document.getElementById("result").value = y;
    } catch (err) {
        alert("Invalid expression");
    }
}

// Function that clears the display
function clr() {
    document.getElementById("result").value = "";
}

// Adding keyup event to the calculator for 'Enter' key
var cal = document.getElementById("calcu");
cal.onkeyup = function(event) {
    if (event.keyCode === 13) {
        console.log("Enter");
        solve();
    }
}
