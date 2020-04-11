$(document).ready(function){
    $('#name').keypress(function(event){
        
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            alert('You pressed a "enter" key in textbox');	
        }
        event.stopPropagation();

        let query = $("#keyword").val();

        let remove_space = query.replace(/ /g,'-');

        let url = `api.openweathermap.org/data/2.5/weather?q=${remove_space}&appid={your api key}`;

        if (query !== ""){
            
        }
    });    
};
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