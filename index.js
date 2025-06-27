/**
     * Generates Pascal's Triangle up to a given number of rows.
     * @param {number} rowNumber - Number of rows to generate.
     * @returns {number[][]} - Pascal's Triangle as an array of arrays.
     */
    
function getPascalsTriangle(rowNumber) {
    if (rowNumber <= 0) return [];
    const triangle = [[1]];
    for (let row = 1; row < rowNumber; row++) {
    const prev = triangle[row - 1];
    const newRow = [1];
    for (let i = 1; i < row; i++) {
        newRow.push(prev[i - 1] + prev[i]);
    }
    newRow.push(1);
    triangle.push(newRow);
    }
    return triangle;
}

function generateTriangle() {
    const rowNumber = parseInt(document.getElementById('rowNumber').value, 10);
    const output = document.getElementById('output');
    output.innerHTML = '';

    if (isNaN(rowNumber) || rowNumber < 1) {
    output.textContent = 'Please enter a positive integer.';
    return;
    }

    const triangle = getPascalsTriangle(rowNumber);
    triangle.forEach(row => {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'row';
    rowDiv.textContent = row.join(' ');
    output.appendChild(rowDiv);
    });
}

window.onload = generateTriangle;



const romanMap = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
];

const arabicInput = document.getElementById('arabic');
const romanInput = document.getElementById('roman');
const arabicError = document.getElementById('arabicError');
const romanError = document.getElementById('romanError');

// Converts Arabic to Roman
function toRoman(num) {
    let result = '';
    for (const { value, numeral } of romanMap) {
    while (num >= value) {
        result += numeral;
        num -= value;
    }
    }
    return result;
}

// Converts Roman to Arabic
function fromRoman(roman) {
    roman = roman.toUpperCase();
    let i = 0;
    let num = 0;

    while (i < roman.length) {
    const two = roman.substr(i, 2);
    const one = roman.substr(i, 1);
    const twoVal = romanMap.find(r => r.numeral === two);
    const oneVal = romanMap.find(r => r.numeral === one);

    if (twoVal) {
        num += twoVal.value;
        i += 2;
    } else if (oneVal) {
        num += oneVal.value;
        i += 1;
    } else {
        return NaN; // invalid character
    }
    }

    // Re-encode to verify correctness
    const reEncoded = toRoman(num);
    if (reEncoded !== roman) {
    return NaN;
    }

    return num;
}

// Event: Arabic Input
arabicInput.addEventListener('input', () => {
    arabicError.textContent = '';
    romanError.textContent = '';

    const val = parseInt(arabicInput.value, 10);
    if (isNaN(val) || val < 1 || val > 1000) {
    arabicError.textContent = 'Please enter a number between 1 and 1000.';
    romanInput.value = '';
    return;
    }

    romanInput.value = toRoman(val);
});

// Event: Roman Input
romanInput.addEventListener('input', () => {
    arabicError.textContent = '';
    romanError.textContent = '';

    const val = romanInput.value.trim().toUpperCase();
    if (!val) {
    arabicInput.value = '';
    return;
    }

    const arabic = fromRoman(val);
    if (isNaN(arabic) || arabic < 1 || arabic > 1000) {
    romanError.textContent = 'Please enter a valid Roman numeral (I–M, up to 1000).';
    arabicInput.value = '';
    return;
    }

    arabicInput.value = arabic;
});