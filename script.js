$(document).ready(function(){
    
    $("#loader").hide();
    
    let searchRslts = [];

    $("#searchBtn").on('click', function(event){
        event.preventDefault();
  
        let query = $("#searchquery").val()
        
        let remove_space = query.replace(/ /g,'')

        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${remove_space}&units=imperial&cnt=6&appid=6b9dd327d5f0228f42ef746e3e9580c7`;
        
        function getDate(){
            var months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
            
            var days = new Array(7);
            days[0] = "Sun";
            days[1] = "Mon";
            days[2] = "Tues";
            days[3] = "Wed";
            days[4] = "Thurs";
            days[5] = "Fri";
            days[6] = "Sat";

            var today = new Date();
            var dd    = String(today.getDate()).padStart(2, '0');
            var nd    = days[today.getDay()];
            var mm    = months[today.getMonth()];
            var yyyy  = today.getFullYear();;

            today = nd;
            return today;
          }

        function tomorrowsDate(){
          var today = new Date();
          var tomorrowsDate = (my_date .getDate()+1)
          return tomorrowsDate;
        }
        
        if (remove_space !== ""){
  
            $.ajax({
                url: url,
                method: "GET",
                dataType: "json",

                beforeSend: function(){
                    $("#loader").show();
                  },
                  complete: function(){
                    $("#loader").hide();
                },

                success: function(data){
                let output = "";
                let weatherForecast = data.list;

                
                
                for(var x in weatherForecast){
                    output +=`
                    <div class="row">
                    <div class="column left">
                        <p>${getDate()}</p>
                        <h6>${data.city.name}, ${data.city.country}</h6>
                        <p id="weatherTemp"><strong>${weatherForecast[x].main.temp}<sup>o</sup>F</strong></p>
                        <p><img src="http://openweathermap.org/img/wn/${weatherForecast[0].weather[0].icon}@2x.png" alt="weather icon"></p>
                        <p>Humidity: ${weatherForecast[x].main.humidity}</p>
                        <p>Wind Speed: ${weatherForecast[0].wind.speed}</p>
                        <p>UV Index</p>
                    </div>
                    <div class="column right cgrey last-column">
                        <p class="dow">Thur</p>
                        <p>${weatherForecast[5].main.temp}<sup>o</sup>F</p>
                        <p><img src="http://openweathermap.org/img/wn/${weatherForecast[5].weather[0].icon}@2x.png" alt="weather icon"></p>
                        <p>${weatherForecast[5].weather[0].main}</p>
                        <p>Humidity</p>
                      </div>
                      <div class="column right">
                        <p class="dow">Wed</p>
                        <p>${weatherForecast[4].main.temp}<sup>o</sup>F</p>
                        <p><img src="http://openweathermap.org/img/wn/${weatherForecast[4].weather[0].icon}@2x.png" alt="weather icon"></p>
                        <p>${weatherForecast[4].weather[0].main}</p>
                        <p>Humidity</p>
                      </div>
                      <div class="column right cgrey">
                        <p class="dow">Tue</p>
                        <p>${weatherForecast[3].main.temp}<sup>o</sup>F</p>
                        <p><img src="http://openweathermap.org/img/wn/${weatherForecast[3].weather[0].icon}@2x.png" alt="weather icon"></p>
                        <p>${weatherForecast[3].weather[0].main}</p>
                        <p>Humidity</p>
                      </div>
                      <div class="column right">
                        <p class="dow">Mon</p>
                        <p>${weatherForecast[2].main.temp}<sup>o</sup>F</p>
                        <p><img src="http://openweathermap.org/img/wn/${weatherForecast[2].weather[0].icon}@2x.png" alt="weather icon"></p>
                        <p>${weatherForecast[2].weather[0].main}</p>
                        <p>Humidity</p>
                      </div>
                      <div class="column right cgrey">
                        <p class="dow">Sat</p>
                        <p>${weatherForecast[1].main.temp}<sup>o</sup>F</p>
                        <p><img src="http://openweathermap.org/img/wn/${weatherForecast[1].weather[0].icon}@2x.png" alt="weather icon"></p>
                        <p>${weatherForecast[1].weather[0].main}</p>
                        <p>Humidity</p>
                      </div>
                    `;
                    }
                    if(output !== ""){
                        $("#weatherResults").html(output);
  
                    }else{

                        $("#weatherResults").html("<div style='font-size:40px; text-align:center;'><font color='red'>No results were found for - "+query+" -</font></div><br><br>");

                    }
                },
                error: function(){
                    $("#weatherResults").html("<div style='font-size:40px; text-align:center; background-color: black; border-radius: 25px;'><font color='white'>No results were found for ' "+query+" '</font></div><br><br>");
                }
            })
  
        }else{
            M.toast({html: 'Please Enter Something', classes: 'N/A transparent'});
        }
  
  
    });
  });
  
$("#weatherResults").contents().each(function (){
    
})

