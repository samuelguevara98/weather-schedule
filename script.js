$(document).ready(function(){
    
    $("#loader").hide();
    
    $("#searchBtn").on('click', function(event){
        event.preventDefault();
  
        let query = $("#searchquery").val()
        
        let remove_space = query.replace(/ /g,'+');

        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${remove_space}&units=imperial&appid=6b9dd327d5f0228f42ef746e3e9580c7`;
        
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
                let weatherMain = data.list.main;


                for(var x in weatherForecast){
                    output +=`
                    <div class="row">
                    <div class="col s12 m5">
                      <div class="card-panel blue-grey darken-4">
                        <span class="white-text">${weatherForecast[x].main.temp}</span>
                        <br>
                        <span class="white-text">${weatherForecast[x].weather.description}</span>
                        <br>
                        <span class="white-text">${weatherForecast[x].dt}</span>
                      </div>
                    </div>
                    </div>
                    `
                        ;
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
            console.log("Please enter something");
        }
  
  
    });
  });
  
  