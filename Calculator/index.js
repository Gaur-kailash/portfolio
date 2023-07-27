let screen = document.getElementById('screen');
let screenValue = '';
let num1;
    let buttons = document.querySelectorAll('button');
    for (element of buttons) {
        element.addEventListener('click', (e) => {
            let buttonText = e.target.innerText;
            if (buttonText == "X") {
                if (screenValue == '') {
                    alert("First input operand");
                }
                else {
                    screenValue += '*';
                    screen.value = screenValue;
                }
            }
            else if (buttonText == "/") {
                if (screenValue == '') {
                    alert("First input operand");
                }
                else {
                    screenValue += '/';
                    screen.value = screenValue;
                }
            }
            else if (buttonText == "-") {
                if (screenValue == '') {
                    alert("First input operand");
                }
                else {
                    screenValue += '-';
                    screen.value = screenValue;
                }
            }
            else if (buttonText == "%") {
                if (screenValue == '') {
                    alert("First input operand");
                }
                else {
                    num1 = Number(screenValue);
                    num1 = num1 / 100;
                    screenValue += '%';
                    screen.value = screenValue;
                }
            }
            else if (buttonText == 'CE') {
                screenValue = screenValue.slice(0, -1);
                screen.value = screenValue;
            }
            else if (buttonText == "=") {
                console.log("Enter in environment");
                if (screenValue == '') {
                    alert("First input operand");
                }
                else if (screenValue.includes('%')) {
                    let index = screenValue.indexOf("%");
                    let str = '';
                    console.log("Entered");
                    let i = index + 1;
                    for (i; i < screenValue.length; i++) {
                        str += screenValue[i];
                        console.log("Entered in loop");
                    }
                    let num2 = Number(str);
                    console.log(num1);
                    console.log(num2);
                    let result = num1 * num2;
                    screen.value = result;
                }
                else {
                    // screenValue+='=';
                    screen.value = eval(screenValue);
                }
            }
            else if (buttonText == "AC") {
                // screenValue+='=';
                screenValue = '';
                screen.value = screenValue;
            }

            else {
                screenValue += buttonText;
                screen.value = screenValue;
            }
        })
    }
