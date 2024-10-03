function updateOptions() {
    const technique = document.getElementById("technique").value;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = ""; // Clear existing options

    if (technique === "substitution") {
        optionsDiv.innerHTML = `
            <label for="substitution">Select Substitution Technique:</label>
            <select id="substitution">
                <option value="">--Choose an option--</option>
                <option value="caesar">Caesar Cipher</option>
                <option value="playfair">Playfair Cipher</option>
                <option value="vigenere">Vigenère Cipher</option>
            </select>
            <label for="subString">Enter Text:</label>
            <input type="text" id="subString">
            <label for="operation">Select Operation:</label>
            <select id="operation">
                <option value="encrypt">Encrypt</option>
                <option value="decrypt">Decrypt</option>
            </select>
            <button onclick="performSubstitution()">Execute</button>
        `;
    } else if (technique === "transposition") {
        optionsDiv.innerHTML = `
            <label for="transposition">Select Transposition Technique:</label>
            <select id="transposition">
                <option value="">--Choose an option--</option>
                <option value="railfence">Rail Fence Cipher</option>
                <option value="columnar">Columnar Transposition</option>
            </select>
            <label for="transString">Enter Text:</label>
            <input type="text" id="transString">
            <label for="operation">Select Operation:</label>
            <select id="operation">
                <option value="encrypt">Encrypt</option>
                <option value="decrypt">Decrypt</option>
            </select>
            <button onclick="performTransposition()">Execute</button>
        `;
    }
}

function performSubstitution() {
    const technique = document.getElementById("substitution").value;
    const text = document.getElementById("subString").value;
    const operation = document.getElementById("operation").value;
    let result = "";

    if (technique === "caesar") {
        result = operation === "encrypt" ? caesarCipher(text, 3) : caesarCipher(text, -3);
    } else if (technique === "playfair") {
        result = playfairCipher(text, operation === "encrypt");
    } else if (technique === "vigenere") {
        result = vigenereCipher(text, "KEY", operation === "encrypt");
    }

    document.getElementById("result").innerText = `Result: ${result}`;
}

function performTransposition() {
    const technique = document.getElementById("transposition").value;
    const text = document.getElementById("transString").value;
    const operation = document.getElementById("operation").value;
    let result = "";

    if (technique === "railfence") {
        result = operation === "encrypt" ? railFenceCipher(text, 3) : railFenceCipherDecrypt(text, 3);
    } else if (technique === "columnar") {
        result = operation === "encrypt" ? columnarTranspositionCipher(text, [3, 1, 2]) : columnarTranspositionDecrypt(text, [3, 1, 2]);
    }

    document.getElementById("result").innerText = `Result: ${result}`;
}

// Caesar Cipher
function caesarCipher(text, shift) {
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt();
            const base = char.toUpperCase() === char ? 65 : 97;
            return String.fromCharCode((code - base + shift + 26) % 26 + base);
        }
        return char;
    }).join('');
}

// Playfair Cipher
function generatePlayfairMatrix(key) {
    const matrix = [];
    const used = new Set();
    key = key.toUpperCase().replace(/J/g, 'I'); // Replace J with I
    const keyArr = key.split('').filter(char => {
        if (char.match(/[A-Z]/) && !used.has(char)) {
            used.add(char);
            return true;
        }
        return false;
    });

    for (let char of "ABCDEFGHIKLMNOPQRSTUVWXYZ") {
        if (!used.has(char)) {
            keyArr.push(char);
        }
    }

    for (let i = 0; i < 5; i++) {
        matrix.push(keyArr.slice(i * 5, (i + 1) * 5));
    }

    return matrix;
}

function findPosition(matrix, char) {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (matrix[i][j] === char) {
                return [i, j];
            }
        }
    }
    return [-1, -1];
}

function playfairCipher(text, encrypt) {
    const key = "KEY".toUpperCase(); // Use a fixed key or allow user input
    const matrix = generatePlayfairMatrix(key);
    text = text.toUpperCase().replace(/J/g, 'I').replace(/[^A-Z]/g, '');
    
    let result = '';
    for (let i = 0; i < text.length; i += 2) {
        let a = text[i];
        let b = text[i + 1] || 'X';

        if (a === b) {
            b = 'X';
        }

        const [row1, col1] = findPosition(matrix, a);
        const [row2, col2] = findPosition(matrix, b);

        if (row1 === row2) {
            result += encrypt
                ? matrix[row1][(col1 + 1) % 5] + matrix[row2][(col2 + 1) % 5]
                : matrix[row1][(col1 - 1 + 5) % 5] + matrix[row2][(col2 - 1 + 5) % 5];
        } else if (col1 === col2) {
            result += encrypt
                ? matrix[(row1 + 1) % 5][col1] + matrix[(row2 + 1) % 5][col2]
                : matrix[(row1 - 1 + 5) % 5][col1] + matrix[(row2 - 1 + 5) % 5][col2];
        } else {
            result += matrix[row1][col2] + matrix[row2][col1];
        }
    }

    return result;
}

// Vigenère Cipher
function vigenereCipher(text, keyword, encrypt) {
    const key = keyword.toUpperCase().repeat(Math.ceil(text.length / keyword.length)).slice(0, text.length);
    return text.split('').map((char, i) => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt();
            const base = char.toUpperCase() === char ? 65 : 97;
            const keyCode = key[i].charCodeAt() - 65;
            return String.fromCharCode((code - base + (encrypt ? keyCode : -keyCode) + 26) % 26 + base);
        }
        return char;
    }).join('');
}

// Rail Fence Cipher Encryption
function railFenceCipher(text, rails) {
    if (rails <= 1) return text;

    const fence = Array.from({ length: rails }, () => []);
    let direction = 1;
    let row = 0;

    for (const char of text) {
        fence[row].push(char);
        row += direction;
        if (row === 0 || row === rails - 1) direction *= -1;
    }

    return fence.flat().join('');
}

// Rail Fence Cipher Decryption
function railFenceCipherDecrypt(ciphertext, rails) {
    if (rails <= 1) return ciphertext;

    const fence = Array.from({ length: rails }, () => []);
    let direction = 1;
    let row = 0;

    for (let i = 0; i < ciphertext.length; i++) {
        fence[row].push('*');
        row += direction;
        if (row === 0 || row === rails - 1) direction *= -1;
    }

    let index = 0;
    for (let r = 0; r < rails; r++) {
        for (let c = 0; c < ciphertext.length; c++) {
            if (fence[r][c] === '*') {
                fence[r][c] = ciphertext[index++];
            }
        }
    }

    let result = '';
    row = 0;
    direction = 1;

    for (let i = 0; i < ciphertext.length; i++) {
        result += fence[row][i];
        row += direction;
        if (row === 0 || row === rails - 1) direction *= -1;
    }

    return result;
}

// Columnar Transposition Encryption
function columnarTranspositionCipher(text, key) {
    const numCols = key.length;
    const numRows = Math.ceil(text.length / numCols);
    const grid = Array.from({ length: numRows }, () => Array(numCols).fill(' '));
    const sortedKey = [...key].sort((a, b) => a - b);
    const keyOrder = key.map(k => sortedKey.indexOf(k));

    let index = 0;
    for (let r = 0; r < numRows; r++) {
        for (let c = 0; c < numCols; c++) {
            if (index < text.length) {
                grid[r][c] = text[index++];
            }
        }
    }

    return keyOrder.map(col => grid.map(row => row[col]).join('')).join('');
}

// Columnar Transposition Decryption
function columnarTranspositionDecrypt(text, key) {
    const numCols = key.length;
    const numRows = Math.ceil(text.length / numCols);
    const grid = Array.from({ length: numRows }, () => Array(numCols).fill(' '));
    const sortedKey = [...key].sort((a, b) => a - b);
    const keyOrder = key.map(k => sortedKey.indexOf(k));

    let index = 0;
    keyOrder.forEach(col => {
        for (let row = 0; row < numRows; row++) {
            if (index < text.length) {
                grid[row][col] = text[index++];
            }
        }
    });

    let result = '';
    let row = 0;
    let direction = 1;

    for (let i = 0; i < text.length; i++) {
        result += grid[row][i % numCols];
        row += direction;
        if (row === 0 || row === numRows - 1) direction *= -1;
    }

    return result.replace(/ /g, '');
}