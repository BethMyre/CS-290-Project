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

                //Reset list of languages before each new request
                document.getElementById("langList").innerHTML = "";

                document.getElementById("langsDetected").textContent = "Language(s) detected...";
                var response = JSON.parse(req.responseText);
                console.log(response);
                var detectedLanguages = response.detectedLangs;
                var listItem;
                var textNode;
                var displayText;
                for(let i = 0; i < detectedLanguages.length; i++){
                    listItem = document.createElement("li");
                    document.getElementById("langList").appendChild(listItem);
                    displayText = detectedLanguages[i].lang;
                    displayText += " (";
                    displayText += (100*(detectedLanguages[i].confidence)).toFixed(2);
                    displayText += "% confidence)";
                    textNode = document.createTextNode(displayText);
                    listItem.appendChild(textNode);
                }
            } else {
                console.log("Error in network request: " + req.statusText);
            }});

        req.send(null);
        event.preventDefault();
    });
}