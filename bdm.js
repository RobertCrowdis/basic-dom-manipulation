// Example 1 - reversing text
document.getElementById('e1-btn').addEventListener('click', reverseText);
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