const d = document,
  w = window;

export default function speechReader() {
  const $speechSelect = d.getElementById("speech-select"),
    $speechTextarea = d.getElementById("speech-text"),
    $speechButton = d.getElementById("speech-btn"),
    speechMessage = new speechSynthesisUtterance();

  let voices = [];

  d.addEventListener("DOMContentLoaded", (e) => {
    //   console.log(w.speechSynthesis.getVoices())

    w.speechSynthesis.addEventListener("voiceschanged", (e) => {
      voices = w.speechSynthesis.getVoices();

      voices.forEach(voice => {
        const $option = d.createElement("option");
        $option.value = voice.name;
        $option.textContent = `${voice.name} *** ${voice.lang}`; 

        $speechSelect.appendChild($option);
      });
    });
  });

  d.addEventListener("click", (e) => {});

  d.addEventListener("click", (e) => {});
}
