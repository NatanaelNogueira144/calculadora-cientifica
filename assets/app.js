let input = '';

function press(val) {
    input += val;
    document.getElementById('display').value = input;
}

function clearDisplay() {
    input = '';
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        let expr = input
            .replace(/√/g, 'Math.sqrt')
            .replace(/sin\(/g, 'Math.sin(')
            .replace(/cos\(/g, 'Math.cos(')
            .replace(/tan\(/g, 'Math.tan(')
            .replace(/log\(/g, 'Math.log10(')
            .replace(/\^/g, '**')
            .replace(/sqrt\(/g, 'Math.sqrt(');
        let result = Function(`'use strict'; return (${expr})`)();
        document.getElementById('display').value = result !== undefined ? result : '';
        input = result !== undefined ? String(result) : '';
    } catch (e) {
        document.getElementById('display').value = "Erro";
        input = '';
    }
}