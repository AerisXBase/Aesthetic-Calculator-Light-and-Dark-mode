document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('#display');
    const buttons = document.querySelectorAll('button');
    const themeToggleBtn = document.querySelector('.theme-toggler');
    const calculator = document.querySelector('.calculator');
    const toggleIcon = document.querySelector('.toggler-icon');
    let isDark = true;

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const buttonText = button.innerText;

            if (buttonText === 'C') {
                display.innerText = '';
            } else if (buttonText === '<') {
                display.innerText = display.innerText.slice(0, -1);
            } else if (buttonText === '=') {
                try {
                    let expression = display.innerText;
                    expression = expression.replace(/÷/g, '/'); // Replace division symbol with /
                    expression = expression.replace(/×/g, '*'); // Replace multiplication symbol with *
                    console.log('Expression:', expression); // Debugging output
                    const result = typeof math !== 'undefined' ? math.evaluate(expression) : eval(expression);
                    console.log('Result:', result); // Debugging output
                    display.innerText = result;
                } catch (error) {
                    console.error('Evaluation Error:', error); // Debugging output
                    display.innerText = 'Error';
                }
            } else {
                display.innerText += buttonText;
            }
        });
    });

    themeToggleBtn.addEventListener('click', () => {
        calculator.classList.toggle('dark');
        themeToggleBtn.classList.toggle('active');
        isDark = !isDark;
    });
});
