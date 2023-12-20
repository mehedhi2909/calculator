let display = document.getElementById('display');
let buttons = document.querySelector('.buttons');

function calculate(event) {
  const buttonText = event.target.innerText;

  if (buttonText === 'C') {
    display.value = '';
  } else if (buttonText === '=') {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Error';
    }
  } else {
    display.value += buttonText;
  }
}
