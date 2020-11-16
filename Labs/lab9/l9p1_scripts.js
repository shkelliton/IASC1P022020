
var start = new Date();
console.log(start.getSeconds())

function stopTime(){

  var stop = new Date();
  console.log("newstart"+start.getSeconds())
  console.log(stop.getSeconds())
  var timeDif = stop.getTime()-start.getTime()
  alert("You have been on this website for:"+ (timeDif/600)+"seconds");
}
