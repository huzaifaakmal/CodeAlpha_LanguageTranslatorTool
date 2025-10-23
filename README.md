# 💬 Language Translation Tool

A simple and clean web-based language translation tool built with HTML, CSS, and vanilla JavaScript. This tool allows users to translate text between various languages, copy the translation to their clipboard, and listen to the translated text using the browser's built-in speech synthesis.

<img width="1236" height="820" alt="image" src="https://github.com/user-attachments/assets/018c0266-8d1f-4f0c-ad04-4c9021ca32b3" />




---

## Features

* **Multi-Language Support**: Translates between 16 common languages, including English, Indonesian, Urdu, Spanish, Hindi, and more.
* **Dynamic Language Lists**: The 'From' and 'To' language dropdowns are populated dynamically using JavaScript.
* **API-Based Translation**: Uses the free [MyMemory Translation API](https://mymemory.translated.net/doc/spec.php) to perform translations.
* **Copy to Clipboard**: Easily copy the translated text with a single click. The button provides visual feedback ("✅ Copied!").
* **Text-to-Speech**: Listen to the translated text in its native language and accent using the browser's `SpeechSynthesis` API.
* **Responsive Design**: The layout adapts for a clean and usable experience on both desktop and mobile devices.

---

## Technologies Used

* **HTML5**: For the basic structure of the web page.
* **CSS3**: For styling, layout (flexbox), and responsiveness (media queries).
* **Vanilla JavaScript**: For all functionality, including:
    * DOM Manipulation
    * Handling `click` events
    * Dynamic content generation (populating `<select>` options)
    * `fetch` API for asynchronous requests to the MyMemory API
    * `Navigator.clipboard` API for the "Copy" feature
    * `Window.speechSynthesis` API for the "Speak" feature

---

## How to Use

This is a front-end-only project and does not require a special server or build step.

1.  **Download the files:**
    * `index.html`
    * `style.css`
    * `script.js`
2.  **Place them in the same directory:**
    ```
    /language-translator
        ├── index.html
        ├── style.css
        ├── script.js
    ```
3.  **Open the application:**
    Simply open the `index.html` file in any modern web browser (like Chrome, Firefox, or Edge).

**Note:** You must have an active internet connection for the translation feature to work, as it needs to contact the MyMemory API.

---

## Credits

* **Author**: [Huzaifa Akmal]https://github.com/huzaifaakmal/CodeAlpha_LanguageTranslatorTool
* **Translation API**: [MyMemory](https://mymemory.translated.net)
