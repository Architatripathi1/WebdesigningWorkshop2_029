function checkArmstrong() {
    let num = document.getElementById("number").value;

    if (num === "") {
        document.getElementById("result").innerHTML =
            "Please enter a number.";
        return;
    }

    let digits = num.length;
    let temp = parseInt(num);
    let original = temp;
    let sum = 0;

    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, digits);
        temp = Math.floor(temp / 10);
    }

    if (sum === original) {
        document.getElementById("result").innerHTML =
            original + " is an Armstrong Number ✅";
    } else {
        document.getElementById("result").innerHTML =
            original + " is NOT an Armstrong Number ❌";
    }
}