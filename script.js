var apiKey = "9179121e96f444af261ef0f17493c680";

document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
    document.getElementById("langIDButton").addEventListener('click', function(event){
        var req = new XMLHttpRequest();

        var testInput;

        var payload = {textEntered:null};
        payload.textEntered = document.getElementById("langIDInput").value;

        testInput = payload.textEntered;
        document.getElementById("textYouEntered").textContent = testInput;

        /*
        var req = new XMLHttpRequest();
        var payload = {animal:null};
        payload.animal = document.getElementById("animalInput").value;
        req.open("POST", "http://httpbin.org/post", true);
        req.setRequestHeader('Content-Type', 'application/json');
        req.addEventListener('load',function(){
            if(req.status >= 200 && req.status < 400){
                var response = JSON.parse(req.responseText);
                document.getElementById('animalID').textContent = response.json.animal;
            } else {
                console.log("Error in network request: " + req.statusText);
            }});
        req.send(JSON.stringify(payload));
        */

        event.preventDefault();
    });
}