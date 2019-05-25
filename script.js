var apiKey = "9179121e96f444af261ef0f17493c680";

document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
    document.getElementById("langIDButton").addEventListener('click', function(event){
        var token = "991a606acccf45aeb0b29edd5cb8c521";
        var req = new XMLHttpRequest();

        var textInput = document.getElementById("langIDInput").value;
        req.open("GET", "https://api.dandelion.eu/datatxt/li/v1?text=" + textInput + "&token=" + token,
            true);

        req.addEventListener('load',function(){
            if(req.status >= 200 && req.status < 400){
                document.getElementById("langsDetected").textContent = "Language(s) detected...";

                var response = JSON.parse(req.responseText);
                console.log(response);
                var detectedLanguages = response.detectedLangs;
                console.log(detectedLanguages);

                var langToDisplay;
                var nameOfLanguage;

                for(let i = 0; i < detectedLanguages.length; i++){
                    langToDisplay = document.createElement("li");
                    document.getElementById("langList").appendChild(langToDisplay);
                    nameOfLanguage = document.createTextNode(detectedLanguages[i].lang);
                    langToDisplay.appendChild(nameOfLanguage);
                }




                //document.getElementById('cityID').textContent = response.name;
                //var fTemp = response.main.temp*9/5 - 459.67;
                //fTemp = fTemp.toFixed(2);
                //document.getElementById('tempID').textContent = fTemp;
                //document.getElementById('humidityID').textContent = response.main.humidity;
            } else {
                console.log("Error in network request: " + req.statusText);
            }});

        req.send(null);
        event.preventDefault();
    });
}