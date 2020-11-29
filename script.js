// select all the buttons
const buttons = document.querySelectorAll('.row');
// select the <input type="text" class="display" disabled> element
const display = document.querySelector('.display');

// add eventListener to each button
buttons.forEach(function(button) {
  button.addEventListener('click', calculate);
});

// calculate function
function calculate(event) {
  // current clicked buttons value
  const clickedButtonValue = event.target.value;

  if (clickedButtonValue === '=') {
    // check if the display is not empty then only do the calculation
    if (display.value !== '') {
      // calculate and show the answer to display
      display.value = eval(display.value);
    }
  } else if (clickedButtonValue === 'C') {
    // clear everything on display
    display.value = '';
  } else if (clickedButtonValue === '/100') {
    // display value as percentage
    display.value = display.value / 100;
    display.value = eval(display.value);
  } else if (clickedButtonValue === 'b') {
    // apply backspace
    display.value = display.value.slice(0, -1);
  } else {
    // otherwise concatenate it to the display
    display.value += clickedButtonValue;
  }
}