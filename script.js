$(document).ready(function(){

    $("#loader").hide();

    $("form").on('submit', function(event){
        event.preventDefault();
  
        let query = $("#keyword").val()
        
        let url = "api.openweathermap.org/data/2.5/forecast?q="+query+"&appid=6b9dd327d5f0228f42ef746e3e9580c7";
    });
  });
  