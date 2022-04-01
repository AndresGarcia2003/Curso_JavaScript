const d = document,
 w=window;

export default function speechReader(){
    const $speechSelect=d.getElementById("speech-select"),
    $speechTextarea=d.getElementById("speech-text"),
    $speechButton=d.getElementById("speech-btn"),
    speechMessage=new speechSynthesisUtterance();
    
    let voice = [];

    d.addEventListener("DOM")
}