$(document).ready(function(){
    
    $("#loader").hide();
    
    $("#searchBtn").on('click', function(event){
        event.preventDefault();
  
        let query = $("#searchquery").val()
        
        let url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid=6b9dd327d5f0228f42ef746e3e9580c7";
        
        if (query !== ""){
  
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

                success: function(main){
                let output = "";
                let weatherForecast = main;
  
                for(var x in weatherForecast){
                    output +=`
                    <div class="row">
                    <div class="col s12 m5">
                      <div class="card-panel teal">
                        <span class="white-text">I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
                        </span>
                      </div>
                    </div>
                  </div>
                    `
                        ;
                    }
                    if(output !== ""){
                        $("#weatherResults").html(output);
  
                    }else{

                        let NoResults = "Sorry, there seems to be no results for - "+query+" -.";
                        $("#weatherResults").html(NoResults);
                    }
                },
                error: function(){
                    console.log("error");
                }
            })
  
        }else{
            console.log("Please enter something");
        }
  
  
    });
  });
  