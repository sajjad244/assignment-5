//? function for get input value

function getInputFieldValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputValueNumber = parseFloat(inputValue);
  return inputValueNumber;
}

//? function for get textField innerText

function getTextFieldValueById(id) {
  const textValue = document.getElementById(id).innerText;
  const textValueNumber = parseFloat(textValue);
  return textValueNumber;
}

//? function for get textField innerText

function getInnerTextId(id) {
  const textInner = document.getElementById(id).innerText;
  return textInner;
}
