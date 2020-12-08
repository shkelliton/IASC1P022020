//GLOBAL VARIABLES
var start = new Date();
//COMMAND AREA

//FUNCTIONS

function stopTime(){

  var stop = new Date();
  console.log("newstart"+start.getSeconds())
  console.log(stop.getSeconds())
  var timeDif = stop.getTime()-start.getTime()
  alert("You have been on this website for:"+ (timeDif/600)+"seconds");
}

function doZoom(imgs){
  var bigIMG = document.getElementById('bigIMG');
  bigIMG.src = imgs.src;
  bigIMG.parentElement.style.display = "block";
}
function infoGather(imgs){
  var infoTransfer = document.getElementById("imgDescrip");
  infoTransfer.innerHTML = imgs.alt;
}
