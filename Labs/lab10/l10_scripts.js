
function equaType(sym){

  var num1 = document.getElementById("input1").value;
  var num2 = document.getElementById("input2").value;

  let num1 = parseInt(input1);
  let num2 = parseInt(input2);

  if (sym = "plus" ){
      document.getElementById("output").innerHTML = num1 + num2;

  } else if (sym = "minus") {
      document.getElementById("output").innerHTML = num1 + num2;

  } else if (sym = "multiply") {
      document.getElementById("output").innerHTML = num1 + num2;

  } else if (sym = "divide") {
      document.getElementById("output").innerHTML = num1 + num2;

  } else {
      document.getElementById("output").innerHTML = "How did you get this?";
  }
}
