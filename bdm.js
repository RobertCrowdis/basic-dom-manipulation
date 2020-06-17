// Example 1 - reversing text
document.getElementById('e1-btn').addEventListener('click', reverseText);


// Example 4 - using binding for scope
document.querySelector('#e4-btn').addEventListener('click', swapSquareColor)

const squares = document.getElementsByClassName('e2-square');
for (const square of squares) {
  square.addEventListener('click', blockColorChanger(square.classList[1]))
}

// Reverse the text of a input value and replace it.
function reverseText() {
  let inputElem = document.getElementById('e1-input');
  let inputText = inputElem.value;
  let reversed = '';
  for (let i = inputText.length; i > 0; i--) {
    reversed = reversed + inputText[i - 1];
  }
  inputElem.value = reversed;
}

function blockColorChanger(color) {
  return () => {
    const e2Text = document.getElementById('e2-text');
    e2Text.style.color = color;
  }
}

// Example 4 - Queryselector to swap color of a square.
function swapSquareColor() {
  const COLORCYCLE = { 'red': 'blue', 'blue': 'green', 'green': 'yellow', 'yellow': 'purple', 'purple': 'red' }

  // Get required elements.
  const e4Color = document.querySelector('.e4-color');
  const currentColor = e4Color.textContent.toLowerCase();
  let nextColor = COLORCYCLE[currentColor];
  
  const e4Square = document.querySelector('#e4-square');

  // Set required elements.
  e4Square.className = `${currentColor}`;
  e4Color.innerText = nextColor.charAt(0).toUpperCase() + nextColor.slice(1);

}