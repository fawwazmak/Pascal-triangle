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

// Generate default on load
window.onload = generateTriangle;
