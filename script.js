document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
    document.getElementById("langIDButton").addEventListener('click', function(event){

        var token = "991a606acccf45aeb0b29edd5cb8c521";
        var req = new XMLHttpRequest();

        var textInput = document.getElementById("langIDInput").value;
        if (textInput == ""){

            //Reset list of languages displayed before each new request
            document.getElementById("langList").innerHTML = "";

            document.getElementById("langsDetected").textContent = "";

            var listItem;
            var textNode;
            var displayText;
            listItem = document.createElement("li");
            document.getElementById("langList").appendChild(listItem);
            displayText = "Input field must not be empty";
            textNode = document.createTextNode(displayText);
            listItem.appendChild(textNode);
        }
        else{
            req.open("GET", "https://api.dandelion.eu/datatxt/li/v1?text=" + textInput + "&token=" + token,
                true);

            req.addEventListener('load',function(){
                if(req.status >= 200 && req.status < 400){

                    //Reset list of languages displayed before each new request
                    document.getElementById("langList").innerHTML = "";

                    document.getElementById("langsDetected").textContent = "Language(s) detected...";
                    var response = JSON.parse(req.responseText);
                    var detectedLanguages = response.detectedLangs;
                    var listItem;
                    var textNode;
                    var displayText;
                    if (detectedLanguages.length == 0) {
                        listItem = document.createElement("li");
                        document.getElementById("langList").appendChild(listItem);
                        displayText = "Language unknown.";
                        textNode = document.createTextNode(displayText);
                        listItem.appendChild(textNode);
                    }
                    else {
                        for(let i = 0; i < detectedLanguages.length; i++){
                            listItem = document.createElement("li");
                            document.getElementById("langList").appendChild(listItem);
                            displayText = languageLookup(detectedLanguages[i].lang);
                            displayText += " (";
                            displayText += (100*(detectedLanguages[i].confidence)).toFixed(2);
                            displayText += "% confidence)";
                            textNode = document.createTextNode(displayText);
                            listItem.appendChild(textNode);
                        }
                    }
                } else {
                    console.log("Error in network request: " + req.statusText);
                }});

            req.send(null);
        }

        event.preventDefault();
    });
}

//Function idea from https://codepen.io/allison_voshell/pen/GqBPYQ
function languageLookup(val) {
    var result = "";

    var lookup = {
        "af": "Afrikaans",
        "sq": "Albanian",
        "am": "Amharic",
        "ar": "Arabic",
        "hy": "Armenian",
        "as": "Assamese",
        "az": "Azerbaijani",
        "bm": "Bambara",
        "eu": "Basque",
        "be": "Belarusian",
        "bn": "Bengali",
        "bi": "Bislama",
        "bs": "Bosnian",
        "bg": "Bulgarian",
        "my": "Burmese",
        "zh": "Chinese",
        "kw": "Cornish",
        "co": "Corsican",
        "cr": "Cree",
        "hr": "Croatian",
        "cs": "Czech",
        "da": "Danish",
        "nl": "Dutch, Flemish",
        "en": "English",
        "eo": "Esperanto",
        "et": "Estonian",
        "ee": "Ewe",
        "fo": "Faroese",
        "fj": "Fijian",
        "fi": "Finnish",
        "fr": "French",
        "ff": "Fulah",
        "gl": "Galician",
        "ka": "Georgian",
        "de": "German",
        "el": "Modern Greek",
        "gu": "Gujarati",
        "ht": "Haitian Creole",
        "ha": "Hausa",
        "he": "Hebrew",
        "hi": "Hindi",
        "hu": "Hungarian",
        "id": "Indonesian",
        "ga": "Irish",
        "ig": "Igbo",
        "ik": "Inupiaq",
        "io": "Ido",
        "is": "Icelandic",
        "it": "Italian",
        "iu": "Inuktitut",
        "ja": "Japanese",
        "jv": "Javanese",
        "kn": "Kannada",
        "ks": "Kashmiri",
        "kk": "Kazakh",
        "ky": "Kyrgyz",
        "kv": "Komi",
        "kg": "Kongo",
        "ko": "Korean",
        "ku": "Kurdish",
        "la": "Latin",
        "lb": "Luxembourgish",
        "ln": "Lingala",
        "lo": "Lao",
        "lt": "Lithuanian",
        "lv": "Latvian",
        "mk": "Macedonian",
        "mg": "Malagasy",
        "ms": "Malay",
        "ml": "Malayalam",
        "mt": "Maltese",
        "mi": "Maori",
        "mr": "Marathi",
        "mn": "Mongolian",
        "nv": "Navajo",
        "ne": "Nepali",
        "nb": "Norwegian Bokmal",
        "nn": "Norwegian Nynorsk",
        "no": "Norwegian",
        "oc": "Occitan",
        "oj": "Ojibwa",
        "cu": "Old Church Slavonic",
        "or": "Oriya",
        "os": "Ossetian",
        "pa": "Punjabi",
        "fa": "Persian",
        "pl": "Polish",
        "ps": "Pashto",
        "pt": "Portuguese",
        "qu": "Quechua",
        "rm": "Romansh",
        "ro": "Romanian, Moldavian, Moldovan",
        "ru": "Russian",
        "sa": "Sanskrit",
        "sc": "Sardinian",
        "sd": "Sindhi",
        "se": "Northern Sami",
        "sm": "Samoan",
        "sr": "Serbian",
        "gd": "Gaelic, Scottish Gaelic",
        "si": "Sinhala, Sinhalese",
        "sk": "Slovak",
        "sl": "Slovenian",
        "so": "Somali",
        "st": "Southern Sotho",
        "es": "Spanish",
        "su": "Sundanese",
        "sw": "Swahili",
        "ss": "Swati",
        "sv": "Swedish",
        "ta": "Tamil",
        "te": "Telugu",
        "tg": "Tajik",
        "th": "Thai",
        "ti": "Tigrinya",
        "bo": "Tibetan",
        "tk": "Turkmen",
        "tl": "Tagalog",
        "tn": "Tswana",
        "to": "Tonga",
        "tr": "Turkish",
        "ts": "Tsonga",
        "tw": "Twi",
        "ty": "Tahitian",
        "ug": "Uighur",
        "uk": "Ukrainian",
        "ur": "Urdu",
        "uz": "Uzbek",
        "vi": "Vietnamese",
        "cy": "Welsh",
        "wo": "Wolof",
        "xh": "Xhosa",
        "yi": "Yiddish",
        "yo": "Yoruba",
        "zu": "Zulu"
};

    result = lookup[val];

    return result;
}
