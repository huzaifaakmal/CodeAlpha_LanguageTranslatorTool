// Language list
const languages = {
  "en": "English",
  "id": "Indonesian",
  "ur": "Urdu",
  "es": "Spanish",
  "fr": "French",
  "de": "German",
  "it": "Italian",
  "ja": "Japanese",
  "ko": "Korean",
  "zh-CN": "Chinese (Simplified)",
  "ar": "Arabic",
  "ru": "Russian",
  "pt": "Portuguese",
  "tr": "Turkish",
  "nl": "Dutch",
  "hi": "Hindi"
};

// Get references to all necessary elements
const fromLang = document.getElementById("fromLang");
const toLang = document.getElementById("toLang");
const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const translateBtn = document.getElementById("translateBtn");
const copyBtn = document.getElementById("copyBtn");
const speakBtn = document.getElementById("speakBtn");

// Populate language dropdowns dynamically
Object.entries(languages).forEach(([code, name]) => {
  const option1 = document.createElement("option");
  option1.value = code;
  option1.textContent = name;
  fromLang.appendChild(option1);

  const option2 = document.createElement("option");
  option2.value = code;
  option2.textContent = name;
  toLang.appendChild(option2);
});

// Default selection
fromLang.value = "en";
toLang.value = "id";

// Translate Button Logic 
translateBtn.addEventListener("click", async () => {
  const input = inputText.value.trim();
  
  if (!input) {
    outputText.value = "Please enter text to translate.";
    return;
  }
//i use mymemory api for translating because its free 
  try {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
      input
    )}&langpair=${fromLang.value}|${toLang.value}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.responseData?.translatedText) {
      outputText.value = data.responseData.translatedText;
    } else {
      outputText.value = "Error: Translation not available.";
    }
  } catch (err) {
    console.error(err);
    outputText.value = "Translation failed. Please check your connection or CORS.";
  }
});

// Copy Button Logic 
copyBtn.addEventListener("click", () => {
  const textToCopy = outputText.value;
  
  // Do nothing if the output box is empty or has an error message
  if (!textToCopy || textToCopy.startsWith("Error:") || textToCopy.startsWith("Please enter")) {
    return;
  }

  // Use the modern Navigator Clipboard API
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      // Give the user visual feedback
      copyBtn.innerHTML = "✅ Copied!";
      
      // Reset the button text after 2 seconds
      setTimeout(() => {
        copyBtn.innerHTML = "📋 Copy";
      }, 2000);
    })
    .catch(err => {
      console.error("Failed to copy text: ", err);
      alert("Failed to copy text. Your browser might not support this feature.");
    });
});

// Speak Button Logic
speakBtn.addEventListener("click", () => {
  const textToSpeak = outputText.value;
  
  // Do nothing if the output box is empty or has an error message
  if (!textToSpeak || textToSpeak.startsWith("Error:") || textToSpeak.startsWith("Please enter")) {
    return;
  }
  
  // Get the language code from the 'To' dropdown
  const targetLang = toLang.value;

  // Create a new speech synthesis object
  const utterance = new SpeechSynthesisUtterance(textToSpeak);
  
  // Set the language for the speech
  utterance.lang = targetLang;

  // Use the browser's speech API to speak the text
  window.speechSynthesis.speak(utterance);
});