const inputText = document.getElementById('inputText');
const encryptButton = document.getElementById('encryptButton');
const outputText = document.getElementById('outputText');


encryptButton.addEventListener('click', () => {
    const text = inputText.value;
    const wordArray = text.split(' ');

    console.log(`Input Text:`,wordArray);
    const encrypted = colsarEncrypt(text);
    outputText.textContent = `Encrypted Text: ${encrypted}`;
});

function colsarEncrypt(text) {
    const shift = 3; // Simple Caesar cipher shift
    return text.split('').map(char => {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) { // Uppercase letters
            return String.fromCharCode(((code - 65 + shift) % 26) + 65);
        } else if (code >= 97 && code <= 122) { // Lowercase letters
            return String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
        return char; // Non-alphabetic characters remain unchanged
    }).join('');
}