let displayString = "";

function getFirstOperation(toParse) {
  let plus = toParse.lastIndexOf("+");
  let minus = toParse.lastIndexOf("-");
  let times = toParse.lastIndexOf("*");
  let div = toParse.lastIndexOf("/");

  if (plus > -1 && plus > minus) {
    return plus;
  } else if (minus > -1 && minus > plus) {
    return minus;
  } else if (times > -1 && times > div) {
    return times;
  } else if (div > -1 && div > times) {
    return div;
  } else {
    return -1;
  }
}

function parseEquation(toParse) {
  let indexOperation = getFirstOperation(toParse);
  if (indexOperation == -1) {
    console.log(`no operation. Return: ${toParse}`);
    return applyOperation(toParse);
  } else {
    let number1 = parseEquation(toParse.slice(0, indexOperation));
    let number2 = parseEquation(
      toParse.slice(indexOperation + 1, toParse.length)
    );
    let operation = toParse.slice(indexOperation, indexOperation + 1);
    return applyOperation(number1, number2, operation);
  }
}

function applyOperation(number1, number2 = 0, operation = "none") {
  let solution = Number(number1);
  if (operation == "+") {
    solution += Number(number2);
  }
  if (operation == "-") {
    solution -= Number(number2);
  }
  if (operation == "*") {
    solution *= Number(number2);
  }
  if (operation == "/") {
    solution /= Number(number2);
  }
  return solution;
}

function submit() {
  console.log(`Submition: ${displayString}`);
  alert(parseEquation(displayString));
  clearDisplay();
}

function type(key) {
  updateDisplay(displayString + key);
}

function clearDisplay() {
  updateDisplay("");
}

function updateDisplay(update) {
  displayString = update;
  document.getElementById("display").innerHTML = displayString;
}
