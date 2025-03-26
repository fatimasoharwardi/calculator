function appendValue(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        const expression = document.getElementById('display').value;
        const result = eval(expression);
        document.getElementById('display').value = result;
    } catch (e) {
        alert('Invalid Expression');
    }
}

// Add backspace function
function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Add keyboard support
document.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9' || ['+', '-', '*', '/', '.'].includes(e.key)) {
        appendValue(e.key);
    } else if (e.key === 'Enter') {
        calculateResult();
    } else if (e.key === 'Escape') {
        clearDisplay();
    } else if (e.key === 'Backspace') {
        const display = document.getElementById('display');
        display.value = display.value.slice(0, -1);
    }
});