// Example 1 - reversing text
document.getElementById('e1-btn').addEventListener('click', reverseText);

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