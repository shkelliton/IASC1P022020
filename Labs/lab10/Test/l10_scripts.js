function equaType(sym) {

    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;

    let num1 = parseInt(input1)
    let num2 = parseInt(input2)

    switch (sym) {
        case "plus":
            document.getElementById("output").innerHTML = num1 + num2;
            break;
        case "minus":
            document.getElementById("output").innerHTML = num1 - num2;
            break;
        case "multiply":
            document.getElementById("output").innerHTML = num1 * num2;
            break;
        case "divide":
            document.getElementById("output").innerHTML = num1 / num2;
            break;

        default:
            document.getElementById("output").innerHTML = "How did you get this?";
            break;
    }



}