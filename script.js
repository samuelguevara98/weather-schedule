$(document).ready(function(){
    $("form").on('submit', function(event){
        event.preventDefault();
        
        var keycode = (event.keyCode ? event.keyCode : event.which);

        let query = $("#keyword").val();

        let remove_space = query.replace(/ /g,'-');

        let url = `api.openweathermap.org/data/2.5/weather?q=${remove_space}&appid={your api key}`;

        if (query !== ""){
            $.ajax({
                url: url,
                method: "GET",
                dataType: "json",

                succes: function(weather){
                    let output = "";
                    let weatherForecast = obj;
                    
                    for(var x in weatherForecast){
                        output +=`
                        <div class="card s12 m7">
                        <div class="card-image waves-effect waves-block waves-light">
                          <img class="activator" src="${weatherForecast[x].urlToImage}">
                          </div>
                          <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4"><center>${weatherForecast[x].weather.description} <br> (Click for more info)</center><i class="material-icons right">more_vert</i></span>
                            <p><a href="${weatherForecast[x].url}" target="_blank"><center>${weatherForecast[x].url}</center> </a></p>
                          </div>
                          <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                            <p>${weatherForecast[x].description}</p>
                          </div>
                        </div>
                        <br>
                        `;
                    }
                    if(output !== ""){
                        $("#results").html(output);
                }else{
                    /* ADD newsResults to search_form.html */;
                    $("#place-cards").html(`<div style='font-size:40px; text-align:center;'><font color='red'>No news results were found for - ${query} - </font></div><br><br>`);
                }
            }
        }
    )};    
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