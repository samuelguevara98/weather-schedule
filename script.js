var input = document.getElementById("name")

$(document).ready(function(){
    $("#name").keypress(function(e)
    {
        if(e.which ===  13) {
            alert('You pressed enter!');
        }
        event.preventDefault();
    });
  });
  
/*
var mode = "light";

var color = "ghostWhite";
var image = "/img/light-icon.png";
var label = "Light Mode";

if (mode === "dark") {
    color = "darkSlateBlue";
    image = "/img/dark-icon.png";
    label = "Dark Mode";
   } else if (mode === "light") {
    color = " ";
    image = "/img/ ";
    label = " ";
   } else {
    
   }
*/