const inputText = document.getElementById('inputText');
const encryptButton = document.getElementById('encryptButton');
const outputText = document.getElementById('outputText');


encryptButton.addEventListener('click', () => {
    const text = inputText.value;
    const wordArray = text.split(' ');

    console.log(`Input Text:`,wordArray);

    const shiftedWordArr = wordArray.map((word,index) => {
        console.log(`Word:`,word);
        return colsarEncrypt(word,index);
    });

    console.log(`Shifted Word Array:`,shiftedWordArr);

    const encrypted = colsarEncrypt(text);
    outputText.textContent = `Encrypted Text: ${encrypted}`;
});

function colsarEncrypt(text, shift = 3) {
    return text.split('').map(char => {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) { // Uppercase letters
            
        } else if (code >= 97 && code <= 122) { // Lowercase letters
            return String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
        return char; // Non-alphabetic characters remain unchanged
    }).join('');
}