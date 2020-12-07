//NOTES + TO DO
// find height of wrapper, set image height same as wrapper
// scale for content
// make content height wrapperheight- headerheight
// figure out better name title color/method
// make home page 'About' page
// gallery function for artwork pages - multiple separate galleries for Sequential
// and character design?
// for pricing page, refer to image saved
// format like java with methods and that garbage

//IF POSSIBLE/IF TIME ALLOWS
//See if able to make website actually send an email for inquiries?
//see if you can change format based on device, is there a detect mobile function?
//maybe logo instead of actual name, put name in content area in its own div or something
//If I'm feeling adventurous, make a little animation around logo
//remove other navbar options on other pages 

//ACTUAL CODE, NOT NOTES
//GLOBAL VARIABLES

var element = $("#whatever Div I choose"); //element - make function to find element instead of single variable
var elHeight = element.outerHeight(); //finds height of specific element
var elWidth = element.outerWidth(); //finds width of specific element

//COMMAND AREA










//FUNCTIONS














//call stuff using <script>?
var $el = $("#very-specific-design"); //makes variable this element
var elHeight = $el.outerHeight(); //finds height of specific element
var elWidth = $el.outerWidth(); //finds width of specific element

var $wrapper = $("#scaleable-wrapper");

$wrapper.resizable({ //the little arrow on the bottom right to change element size with mouse
  resize: doResize
});

function doResize(event, ui) {

  var scale, origin;

  scale = Math.min( //math formula to recalculate size
    ui.size.width / elWidth,
    ui.size.height / elHeight
  );

  $el.css({ //no idea what this does
    transform: "translate(-50%, -50%) " + "scale(" + scale + ")"
  });

}

var starterData = {
  size: {
    width: $wrapper.width(),
    height: $wrapper.height()
  }
}
doResize(null, starterData);
