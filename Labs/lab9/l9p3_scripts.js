function addMe(){
  var first = document.getElementById("num1").value;
  var second = document.getElementById("num2").value;
  console.log(first+second);

  document.getElementById("output").innerHTML = parseInt(first)+parseInt(second);
}
