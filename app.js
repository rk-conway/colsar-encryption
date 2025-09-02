const inputText = document.getElementById('inputText');
const encryptButton = document.getElementById('encryptButton');
const decryptButton = document.getElementById('decryptButton');
const outputText = document.getElementById('outputText');
const resultContainer = document.getElementById('result-container');


encryptButton.addEventListener('click', () => {
    const text = inputText.value || '';
    const wordArray = text.split(' ');
    
    if (!text) {
        outputText.textContent = 'Please enter text to encrypt/decrypt.';
        return;
    }
    
    console.log(`Input Text:`,wordArray);
    
    const shiftedWordArr = wordArray.map((word,index) => {
        console.log(`Word:`,word, colatzCount(index + wordArray.length));
        return colsarEncrypt(word,colatzCount(index + wordArray.length));
    });
    
    console.log(`Shifted Word Array:`,shiftedWordArr);
    
    const encrypted = shiftedWordArr.join(' ');
    outputText.textContent = `${encrypted}`;
    resultContainer.classList.add('show');
});


function colsarEncrypt(text, shift = 3) {
    return text.split('').map(char => {
        const code = char.charCodeAt(0);
        console.log(`Char:`,char, code);
        if (code >= 65 && code <= 90) { // Uppercase letters
            return String.fromCharCode(((code - 65 + shift) % 26) + 65);
        } else if (code >= 97 && code <= 122) { // Lowercase letters
            return String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
        return char; // Non-alphabetic characters remain unchanged
    }).join('');
}


function colatzCount(seed){
    let count = 0;
    
    if(seed < 1) return 0;
    
    while(seed != 1){
        if(seed % 2 == 0){
            seed = seed / 2;
        } else {
            seed = 3 * seed + 1;
        }
        count++;
    }
    return count;
}

decryptButton.addEventListener('click', () => {
    const text = inputText.value || '';
    const wordArray = text.split(' ');
    
    if (!text) {
        outputText.textContent = 'Please enter text to encrypt/decrypt.';
        return;
    }
    
    console.log(`Input Text:`,wordArray);
    
    const shiftedWordArr = wordArray.map((word,index) => {
        console.log(`Word:`,word, colatzCount(index + wordArray.length));
        return colsarDecrypt(word,colatzCount(index + wordArray.length));
    });
    
    console.log(`Shifted Word Array:`,shiftedWordArr);
    
    const encrypted = shiftedWordArr.join(' ');
    outputText.textContent = `${encrypted}`;
    resultContainer.classList.add('show');
    
});

function colsarDecrypt(text, shift = 3) {
    return text.split('').map(char => {
        const code = char.charCodeAt(0);
        console.log(`Char:`,char, code);
        if (code >= 65 && code <= 90) { // Uppercase letters
            return String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
        } else if (code >= 97 && code <= 122) { // Lowercase letters
            return String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
        }
        return char; // Non-alphabetic characters remain unchanged
    }).join('');
}