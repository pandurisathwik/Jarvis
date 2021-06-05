const speechRecognition= 
window.webkitSpeechRecognition /*Chrome*/ ||
window.SpeechRecognition; /*Fire Fox...*/

function startListening(){
    const recog = new speechRecognition();
     recog.start();
     recog.onstart = console.log("Started Listening...");

     recog.onresult = function (data){
        handleResults(data);
     }
     //Data comes from 'onresult'
}


function handleResults(data){
    let text = data.results[0][0].transcript;
    text = text.toLowerCase();
    console.log(text);
    ProcessCommand(text);
}

function ProcessCommand(UserText){
    if (UserText.includes ("youtube")){
    Speak("opening youtube")
    window.open("https://www.youtube.com/")
}
if (UserText.includes('discord')){
   Speak("opening discord")
    window.open("https://discord.com/channels/@me")
}

}

function Speak(TEXT){
    const utter = new SpeechSynthesisUtterance();
    utter.text = TEXT;
    window.speechSynthesis.speak(utter)
}


//call fucntion onload

microphoneButton.addEventListener("click", startListening);