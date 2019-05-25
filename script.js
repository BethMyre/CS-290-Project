var apiKey = "9179121e96f444af261ef0f17493c680";

document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
    document.getElementById("langIDButton").addEventListener('click', function(event){
        var token = "991a606acccf45aeb0b29edd5cb8c521";
        var req = new XMLHttpRequest();

        var textInput = document.getElementById("langIDInput").value;
        req.open("GET", "https://api.dandelion.eu/datatxt/li/v1?text=" + textInput + "&token=" + token,
            true);

        //document.getElementById("textYouEntered").textContent = textInput;

        req.addEventListener('load',function(){
            if(req.status >= 200 && req.status < 400){
                var response = JSON.parse(req.responseText);
                document.getElementById("textYouEntered").textContent = "something happened";
                //document.getElementById('cityID').textContent = response.name;
                //var fTemp = response.main.temp*9/5 - 459.67;
                //fTemp = fTemp.toFixed(2);
                //document.getElementById('tempID').textContent = fTemp;
                //document.getElementById('humidityID').textContent = response.main.humidity;
            } else {
                console.log("Error in network request: " + req.statusText);
            }});

       /*
    document.getElementById("cityButton").addEventListener('click', function(event){

        var req = new XMLHttpRequest();
        var city = document.getElementById("cityInput").value;
        req.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + city + ",us&appid=" + apiKey, true);
        req.addEventListener('load',function(){
            if(req.status >= 200 && req.status < 400){
                var response = JSON.parse(req.responseText);
                document.getElementById('cityID').textContent = response.name;
                var fTemp = response.main.temp*9/5 - 459.67;
                fTemp = fTemp.toFixed(2);
                document.getElementById('tempID').textContent = fTemp;
                document.getElementById('humidityID').textContent = response.main.humidity;
            } else {
                console.log("Error in network request: " + req.statusText);
            }});
        req.send(null);
        event.preventDefault();
    });
        */

        req.send(null);
        event.preventDefault();
    });
}