document.addEventListener("DOMContentLoaded", function () {
    const buttonCards = [];
    const numberCards = [];
    const operatorCards = Array.from(document.querySelectorAll('.opButton'));

    for (let i = 0; i <= 9; i++) {
        const numbersContainer = document.querySelector('.numbersContainer');
        let className = 'button' + [i];
        const numberCard = document.createElement('div');
        numberCard.classList.add(className, 'button');
        numbersContainer.appendChild(numberCard);
        const numberElement = document.createElement('h2');
        numberElement.textContent = i;
        numberCard.appendChild(numberElement);
        numberCards.push(numberCard);
    };

    const numbersContainer = document.querySelector('.numbersContainer');
    const commaCard = document.createElement('div');
    commaCard.classList.add('comma');
    commaCard.classList.add('button')
    numbersContainer.appendChild(commaCard);
    const commaElement = document.createElement('h2');
    commaElement.textContent = ',';
    commaElement.dataset.value = '.';
    commaCard.appendChild(commaElement);

    buttonCards.push(commaCard);
    buttonCards.push(...operatorCards, ...numberCards);

    buttonCards.forEach((button) => {
        button.style.userSelect = 'none';
        button.style.cursor = 'default';
        button.style.fontWeight = 'bolder';
        button.addEventListener('click', (event) => {
            button.classList.toggle('isActive');
            setTimeout(() => {
                button.classList.toggle('isActive')
            }, 200);
        });
    });

    const input = document.querySelector('.input');
    input.style.backgroundColor = 'rgb(210, 210, 210)';
    input.style.color = 'black';
    input.style.fontWeight = 'bolder';
    const expressionInput = document.querySelector('.expressionInput');
    const nowOperatingInput = document.querySelector('.nowOperatingInput');
    nowOperatingInput.disabled = true;
    const clearButton = document.querySelector('.clear');
    const clearAllButton = document.querySelector('.clearAll');
    const sumButton = document.querySelector('.sum');
    const deductButton = document.querySelector('.deduct');
    const divideButton = document.querySelector('.divide');
    const multiplyButton = document.querySelector('.multiply');
    const equalsButton = document.querySelector('.equals');

    let crudeValue = '';
    let values = [];
    let inputClear = true;
    let clearAllPressed = false;
    let clearPressed = false;
    let periodUsed = false;
    let numberPressed = false;
    let numberBeforeOperator = false;
    let numberAfterOperator = false;

    let sumPressed = false;
    let deductPressed = false;
    let dividePressed = false;
    let multiplyPressed = false;
    let multiplyClickCount = 1;
    let exponentialEnd = false;
    let equalsPressed = false;

    let sumFirstPress = false;
    if (sumPressed) {
        sumFirstPress = true;
    } else {
        sumFirstPress = false;
    }

    let deductFirstPress = false;
    if (deductPressed) {
        deductFirstPress = true;
    } else {
        deductFirstPress = false;
    }

    let divideFirstPress = false;
    if (dividePressed) {
        divideFirstPress = true;
    } else {
        divideFirstPress = false;
    }

    let multiplyFirstPress = false;
    if (multiplyPressed) {
        multiplyFirstPress = true;
    } else {
        multiplyFirstPress = false;
    }

    numberCards.forEach((number) => {
        number.addEventListener('click', (event) => {
            numberBeforeOperator = true;
            if (periodUsed) {
                periodBeforeNumber = false;
            };

            if (!equalsPressed) {
                numberPressed = true;
                if (sumPressed || deductPressed || dividePressed || multiplyPressed) {
                    numberAfterOperator = true;
                };

                if (clearAllPressed) {
                    input.value += event.target.innerText;
                    expressionInput.value += event.target.innerText;

                    periodUsed = false;
                    sumPressed = false;
                    sumFirstPress = false;
                    deductPressed = false;
                    deductFirstPress = false;
                    dividePressed = false;
                    divideFirstPress = false;
                    multiplyPressed = false;
                    multiplyFirstPress = false;
                    equalsPressed = false;
                    clearPressed = false;
                    inputClear = false;

                } else if (clearPressed) {
                    if (!sumPressed || !deductPressed || !dividePressed || multiplyPressed) {
                        return;
                    } else {
                        if (inputClear) {
                            input.value = event.target.innerText;
                            inputClear = false;
                        } else {
                            input.value += event.target.innerText;
                        };
                        periodUsed = false;
                        sumPressed = false;
                        sumFirstPress = false;
                        deductPressed = false;
                        deductFirstPress = false;
                        dividePressed = false;
                        divideFirstPress = false;
                        multiplyPressed = false;
                        multiplyFirstPress = false;
                        equalsPressed = false;
                        clearAllPressed = false;
                    };

                } else if (sumPressed || sumFirstPress) {
                    if (inputClear) {
                        input.value = event.target.innerText;
                        nowOperatingInput.value = '+ '
                        nowOperatingInput.value += event.target.innerText;
                        inputClear = false;
                    } else {
                        input.value += event.target.innerText;
                        nowOperatingInput.value += event.target.innerText;
                    };
                    periodUsed = false;
                    sumPressed = true;
                    sumFirstPress = true;
                    deductPressed = false;
                    deductFirstPress = false;
                    dividePressed = false;
                    divideFirstPress = false;
                    multiplyPressed = false;
                    multiplyFirstPress = false;
                    equalsPressed = false;
                    clearPressed = false;

                } else if (deductPressed || deductFirstPress) {
                    if (inputClear) {
                        input.value = event.target.innerText;
                        nowOperatingInput.value = '- ';
                        nowOperatingInput.value += event.target.innerText;
                        inputClear = false;
                    } else {
                        input.value += event.target.innerText;
                        nowOperatingInput.value += event.target.innerText;
                    };
                    periodUsed = false;
                    sumPressed = false;
                    sumFirstPress = false;
                    deductPressed = true;
                    deductFirstPress = true;
                    dividePressed = false;
                    divideFirstPress = false;
                    multiplyPressed = false;
                    multiplyFirstPress = false;
                    equalsPressed = false;
                    clearPressed = false;

                } else if (dividePressed || divideFirstPress) {
                    if (inputClear) {
                        input.value = event.target.innerText;
                        nowOperatingInput.value = '/ ';
                        nowOperatingInput.value += event.target.innerText;
                        inputClear = false;
                    } else {
                        input.value += event.target.innerText;
                        nowOperatingInput.value += event.target.innerText;
                    };
                    periodUsed = false;
                    sumPressed = false;
                    sumFirstPress = false;
                    deductPressed = false;
                    deductFirstPress = false;
                    dividePressed = true;
                    divideFirstPress = true;
                    multiplyPressed = false;
                    multiplyFirstPress = false;
                    equalsPressed = false;
                    clearPressed = false;

                } else if (multiplyPressed || multiplyFirstPress) {
                    if (inputClear) {
                        input.value = event.target.innerText;
                        nowOperatingInput.value = '* ';
                        nowOperatingInput.value += event.target.innerText;
                        inputClear = false;
                    } else {
                        input.value += event.target.innerText;
                        nowOperatingInput.value += event.target.innerText;
                    };
                    periodUsed = false;
                    sumPressed = false;
                    sumFirstPress = false;
                    deductPressed = false;
                    deductFirstPress = false;
                    dividePressed = false;
                    divideFirstPress = false;
                    multiplyPressed = true;
                    multiplyFirstPress = true;
                    equalsPressed = false;
                    clearPressed = false;

                } else {
                    input.value += event.target.innerText;
                    expressionInput.value += event.target.innerText;
                    equalsPressed = false;
                    sumPressed = false;
                    deductPressed = false;
                    dividePressed = false;
                    multiplyPressed = false;
                    equalsPressed = false;
                    clearPressed = false;
                };

                console.log('=> NUMBER PRESSED');
                console.log('periodUsed status = ', periodUsed);
                console.log('periodBeforeNumber status = ', periodBeforeNumber);
                console.log('equalsPressed status = ', equalsPressed);
                console.log('sumPressed status = ', sumPressed);
                console.log('sumFirstPress status = ', sumFirstPress);
                console.log('deductPressed status = ', deductPressed);
                console.log('deductFirstPress status = ', deductFirstPress);
                console.log('dividePressed status = ', dividePressed);
                console.log('divideFirstPress status = ', divideFirstPress);
                console.log('multiplyPressed status = ', multiplyPressed);
                console.log('multiplyFirstPress status = ', multiplyFirstPress);
                console.log('multiplyClickCount = ', multiplyClickCount);
                console.log('exponentialEnd status = ', exponentialEnd);
                console.log('numberPressed status = ', numberPressed);
                console.log('numberBeforeOperator status = ', numberBeforeOperator);
                console.log('numberAfterOperator = ', numberAfterOperator);
                console.log('clearPressed = ', clearPressed);
                console.log('clearAllPressed = ', clearAllPressed);
                console.log('inputClear status = ', inputClear);
                console.log('input.value =', input.value);
                console.log('crudeValue = ', crudeValue);
                console.log('values.lenght = ', values.length);
                console.log('valuesarray = ', values);
                console.log('');
            };
        });
    });

    let periodBeforeNumber = false;

    commaCard.addEventListener('click', () => {

        if (!equalsPressed) {

            let value = commaElement.dataset.value;

            if (!periodUsed) {
                if (numberBeforeOperator) {
                    input.value += value;
                    expressionInput.value += value;
                } else {
                    input.value = '0' + value;
                    inputClear = false;
                };

                if (expressionInput.value === '') {
                    expressionInput.value += '0' + value;
                };

                if (sumPressed) {
                    if (numberBeforeOperator) {
                        nowOperatingInput.value = value;
                    } else {
                        nowOperatingInput.value = '+ ' + '0' + value;
                    };
                };

                if (deductPressed) {
                    if (numberBeforeOperator) {
                        nowOperatingInput.value = value;
                    } else {
                        nowOperatingInput.value = '- ' + '0' + value;
                    };
                };

                if (dividePressed) {
                    if (numberBeforeOperator) {
                        nowOperatingInput.value = value;
                    } else {
                        nowOperatingInput.value = '/ ' + '0' + value;
                    };
                };

                if (multiplyPressed) {
                    if (numberBeforeOperator) {
                        nowOperatingInput.value = value;
                    } else {
                        nowOperatingInput.value = '* ' + '0' + value;
                    };
                };

                periodUsed = true;
                periodBeforeNumber = true;
                numberBeforeOperator = false;
            };

            console.log('=> COMMA PRESSED');
            console.log('periodUsed status = ', periodUsed);
            console.log('periodBeforeNumber status = ', periodBeforeNumber);
            console.log('equalsPressed status = ', equalsPressed);
            console.log('sumPressed status = ', sumPressed);
            console.log('sumFirstPress status = ', sumFirstPress);
            console.log('deductPressed status = ', deductPressed);
            console.log('deductFirstPress status = ', deductFirstPress);
            console.log('dividePressed status = ', dividePressed);
            console.log('divideFirstPress status = ', divideFirstPress);
            console.log('multiplyPressed status = ', multiplyPressed);
            console.log('multiplyFirstPress status = ', multiplyFirstPress);
            console.log('multiplyClickCount = ', multiplyClickCount);
            console.log('exponentialEnd status = ', exponentialEnd);
            console.log('numberPressed status = ', numberPressed);
            console.log('numberBeforeOperator status = ', numberBeforeOperator);
            console.log('numberAfterOperator = ', numberAfterOperator);
            console.log('clearPressed = ', clearPressed);
            console.log('clearAllPressed = ', clearAllPressed);
            console.log('inputClear status = ', inputClear);
            console.log('input.value =', input.value);
            console.log('crudeValue = ', crudeValue);
            console.log('values.lenght = ', values.length);
            console.log('valuesarray = ', values);
            console.log('');
        };
    });

    clearButton.addEventListener('click', (event) => {
        clearPressed = true;
        if (!equalsPressed) {
            values.pop();
            let expression = values.join('');
            expressionInput.value = null;
            nowOperatingInput.value = null;
            expressionInput.value = expression;

            input.value = null;
            crudeValue = '';
            periodUsed = false;
            periodBeforeNumber = false;
            sumPressed = false;
            sumFirstPress = false;
            deductPressed = false;
            deductFirstPress = false;
            dividePressed = false;
            divideFirstPress = false;
            multiplyPressed = false;
            multiplyFirstPress = false;
            multiplyClickCount = 1;
            exponentialEnd = false;
            equalsPressed = false;
            clearAllPressed = false;
            numberPressed = false;
            numberBeforeOperator = false;
            inputClear = true;

            console.log('=> CLEAR PRESSED');
            console.log('periodUsed status = ', periodUsed);
            console.log('periodBeforeNumber status = ', periodBeforeNumber);
            console.log('equalsPressed status = ', equalsPressed);
            console.log('sumPressed status = ', sumPressed);
            console.log('sumFirstPress status = ', sumFirstPress);
            console.log('deductPressed status = ', deductPressed);
            console.log('deductFirstPress status = ', deductFirstPress);
            console.log('dividePressed status = ', dividePressed);
            console.log('divideFirstPress status = ', divideFirstPress);
            console.log('multiplyPressed status = ', multiplyPressed);
            console.log('multiplyFirstPress status = ', multiplyFirstPress);
            console.log('multiplyClickCount = ', multiplyClickCount);
            console.log('exponentialEnd status = ', exponentialEnd);
            console.log('numberPressed status = ', numberPressed);
            console.log('numberBeforeOperator status = ', numberBeforeOperator);
            console.log('numberAfterOperator = ', numberAfterOperator);
            console.log('clearPressed = ', clearPressed);
            console.log('clearAllPressed = ', clearAllPressed);
            console.log('inputClear status = ', inputClear);
            console.log('input.value =', input.value);
            console.log('crudeValue = ', crudeValue);
            console.log('values.lenght = ', values.length);
            console.log('valuesarray = ', values);
            console.log('');
        };
    });

    clearAllButton.addEventListener('click', (event) => {
        clearAllPressed = true;
        input.value = null;
        expressionInput.value = null;
        nowOperatingInput.value = null;
        crudeValue = '';
        values = [];
        periodUsed = false;
        periodBeforeNumber = false;
        clearPressed = false;
        sumPressed = false;
        sumFirstPress = false;
        deductPressed = false;
        deductFirstPress = false;
        dividePressed = false;
        divideFirstPress = false;
        multiplyPressed = false;
        multiplyFirstPress = false;
        multiplyClickCount = 1;
        exponentialEnd = false;
        equalsPressed = false;
        numberPressed = false;
        numberBeforeOperator = false;

        console.log('=> CLEAR ALL PRESSED');
        console.log('periodUsed status = ', periodUsed);
        console.log('periodBeforeNumber status = ', periodBeforeNumber);
        console.log('equalsPressed status = ', equalsPressed);
        console.log('sumPressed status = ', sumPressed);
        console.log('sumFirstPress status = ', sumFirstPress);
        console.log('deductPressed status = ', deductPressed);
        console.log('deductFirstPress status = ', deductFirstPress);
        console.log('dividePressed status = ', dividePressed);
        console.log('divideFirstPress status = ', divideFirstPress);
        console.log('multiplyPressed status = ', multiplyPressed);
        console.log('multiplyFirstPress status = ', multiplyFirstPress);
        console.log('multiplyClickCount = ', multiplyClickCount);
        console.log('exponentialEnd status = ', exponentialEnd);
        console.log('numberPressed status = ', numberPressed);
        console.log('numberBeforeOperator status = ', numberBeforeOperator);
        console.log('numberAfterOperator = ', numberAfterOperator);
        console.log('clearPressed = ', clearPressed);
        console.log('clearAllPressed = ', clearAllPressed);
        console.log('inputClear status = ', inputClear);
        console.log('input.value =', input.value);
        console.log('crudeValue = ', crudeValue);
        console.log('values.lenght = ', values.length);
        console.log('valuesarray = ', values);
        console.log('');
    });


    numberCards.forEach((number) => {
        number.addEventListener('click', (event) => {
            repeatedOp = event.target.innerText;
        });
    });

    function sumFunction() {

        sumButton.addEventListener('click', () => {

            if (periodBeforeNumber) {
                return;
            };
            sumPressed = false;

            if (equalsPressed) {
                expressionInput.value += input.value;
                expressionInput.value += '  ||  ';
                nowOperatingInput.value = '+ ';
            };

            if (equalsPressed && clearAllPressed || deductFirstPress || divideFirstPress || multiplyFirstPress) {
                expressionInput.value += input.value;
            };

            crudeValue = input.value.toString();

            if (crudeValue !== '' && !sumFirstPress) {
                values.push(parseFloat(crudeValue));
                values.push(' + ');
                expressionInput.value += ' + ';
                nowOperatingInput.value = '+ ';
                nowOperatingInput.value += input.value;
                crudeValue = '';
                sumFirstPress = true;
                sumPressed = true;

            } else if (values.length >= 1 && !sumFirstPress) {
                values.push(' + ');
                expressionInput.value += ' + ';
                nowOperatingInput.value = '+ ';
                nowOperatingInput.value += input.value;
                crudeValue = '';
                sumFirstPress = true;
                sumPressed = true;

            } else if (crudeValue !== '' && sumFirstPress) {
                values.push(parseFloat(crudeValue));
                values.push(' + ');
                expressionInput.value += parseFloat(crudeValue);
                expressionInput.value += ' + ';
                nowOperatingInput.value = '+ ';
                nowOperatingInput.value += input.value;
                crudeValue = '';
                sumPressed = true;

            } else if (values.length >= 1 && sumFirstPress) {
                values.push(' + ');
                expressionInput.value += ' + ';
                nowOperatingInput.value = '+ ';
                nowOperatingInput.value += input.value;
                crudeValue = '';
                sumPressed = true;

            } else if (clearPressed) {
                expressionInput.value = input.value;

            } else {
                crudeValue = '';
                input.value = null;
                expressionInput.value = null;
                nowOperatingInput.value = null;
            };

            periodUsed = false;
            clearPressed = false;
            clearAllPressed = false;
            deductPressed = false;
            deductFirstPress = false;
            dividePressed = false;
            divideFirstPress = false;
            multiplyPressed = false;
            multiplyFirstPress = false;
            exponentialEnd = true;
            equalsPressed = false;
            numberBeforeOperator = false;
            inputClear = true;

            console.log('=> SUM PRESSED');
            console.log('periodUsed status = ', periodUsed);
            console.log('periodBeforeNumber status = ', periodBeforeNumber);
            console.log('equalsPressed status = ', equalsPressed);
            console.log('sumPressed status = ', sumPressed);
            console.log('sumFirstPress status = ', sumFirstPress);
            console.log('deductPressed status = ', deductPressed);
            console.log('deductFirstPress status = ', deductFirstPress);
            console.log('dividePressed status = ', dividePressed);
            console.log('divideFirstPress status = ', divideFirstPress);
            console.log('multiplyPressed status = ', multiplyPressed);
            console.log('multiplyFirstPress status = ', multiplyFirstPress);
            console.log('multiplyClickCount = ', multiplyClickCount);
            console.log('exponentialEnd status = ', exponentialEnd);
            console.log('numberPressed status = ', numberPressed);
            console.log('numberBeforeOperator status = ', numberBeforeOperator);
            console.log('numberAfterOperator = ', numberAfterOperator);
            console.log('clearPressed = ', clearPressed);
            console.log('clearAllPressed = ', clearAllPressed);
            console.log('inputClear status = ', inputClear);
            console.log('input.value =', input.value);
            console.log('crudeValue = ', crudeValue);
            console.log('values.lenght = ', values.length);
            console.log('valuesarray = ', values);
            console.log('');
        });
    };

    function deductFunction() {

        deductButton.addEventListener('click', () => {
            if (periodBeforeNumber) {
                return;
            }

            deductPressed = false;

            if (equalsPressed) {
                expressionInput.value += input.value;
                expressionInput.value += '  ||  ';
                nowOperatingInput.value = '- ';
            }

            if (equalsPressed && clearAllPressed || sumFirstPress || divideFirstPress || multiplyFirstPress) {
                expressionInput.value += input.value;
            };

            crudeValue = input.value.toString();

            if (crudeValue !== '' && !deductFirstPress) {
                values.push(parseFloat(crudeValue));
                values.push(' - ');
                expressionInput.value += ' - ';
                nowOperatingInput.value = '- ';
                nowOperatingInput.value += input.value;
                crudeValue = '';
                deductFirstPress = true;
                deductPressed = true;

            } else if (values.length >= 1 && !deductFirstPress) {
                values.push(' - ');
                expressionInput.value += ' - ';
                nowOperatingInput.value = '- ';
                nowOperatingInput.value += input.value;
                crudeValue = '';
                deductFirstPress = true;
                deductPressed = true;

            } else if (crudeValue !== '' && deductFirstPress) {
                values.push(parseFloat(crudeValue));
                values.push(' - ');
                expressionInput.value += parseFloat(crudeValue);
                expressionInput.value += ' - ';
                nowOperatingInput.value = '- ';
                nowOperatingInput.value += input.value;
                crudeValue = '';
                deductPressed = true;

            } else if (values.length >= 1 && deductFirstPress) {
                values.push(' - ');
                expressionInput.value += ' - ';
                nowOperatingInput.value = '- ';
                nowOperatingInput.value += input.value;
                crudeValue = '';
                deductPressed = true;

            } else if (clearPressed) {
                expressionInput.value = input.value;

            } else {
                crudeValue = '';
                input.value = null;
                expressionInput.value = null;
                nowOperatingInput.value = null;
            };

            periodUsed = false;
            clearPressed = false;
            clearAllPressed = false;
            sumPressed = false;
            sumFirstPress = false;
            dividePressed = false;
            divideFirstPress = false;
            multiplyPressed = false;
            multiplyFirstPress = false;
            exponentialEnd = true;
            equalsPressed = false;
            numberBeforeOperator = false;
            inputClear = true;

            console.log('=> DEDUCT PRESSED');
            console.log('periodUsed status = ', periodUsed);
            console.log('periodBeforeNumber status = ', periodBeforeNumber);
            console.log('equalsPressed status = ', equalsPressed);
            console.log('sumPressed status = ', sumPressed);
            console.log('sumFirstPress status = ', sumFirstPress);
            console.log('deductPressed status = ', deductPressed);
            console.log('deductFirstPress status = ', deductFirstPress);
            console.log('dividePressed status = ', dividePressed);
            console.log('divideFirstPress status = ', divideFirstPress);
            console.log('multiplyPressed status = ', multiplyPressed);
            console.log('multiplyFirstPress status = ', multiplyFirstPress);
            console.log('multiplyClickCount = ', multiplyClickCount);
            console.log('exponentialEnd status = ', exponentialEnd);
            console.log('numberPressed status = ', numberPressed);
            console.log('numberBeforeOperator status = ', numberBeforeOperator);
            console.log('numberAfterOperator = ', numberAfterOperator);
            console.log('clearPressed = ', clearPressed);
            console.log('clearAllPressed = ', clearAllPressed);
            console.log('inputClear status = ', inputClear);
            console.log('input.value =', input.value);
            console.log('crudeValue = ', crudeValue);
            console.log('values.lenght = ', values.length);
            console.log('valuesarray = ', values);
            console.log('');
        });
    };

    function divideFunction() {

        divideButton.addEventListener('click', () => {
            if (periodBeforeNumber) {
                return;
            }

            dividePressed = false;

            if (equalsPressed) {
                expressionInput.value += input.value;
                expressionInput.value += '  ||  ';
                nowOperatingInput.value = '/ ';
            };

            if (equalsPressed && clearAllPressed || sumFirstPress || deductFirstPress || multiplyFirstPress) {
                expressionInput.value += input.value;
            };

            crudeValue = input.value.toString();

            if (crudeValue !== '' && !divideFirstPress) {
                values.push(parseFloat(crudeValue));
                values.push(' / ');
                expressionInput.value += ' / ';
                nowOperatingInput.value = '/ ';
                nowOperatingInput.value += input.value;
                crudeValue = '';
                divideFirstPress = true;
                dividePressed = true;

            } else if (values.length >= 1 && !divideFirstPress) {
                values.push(' / ');
                expressionInput.value += ' / ';
                nowOperatingInput.value = '/ ';
                nowOperatingInput.value += input.value;
                crudeValue = '';
                divideFirstPress = true;
                dividePressed = true;

            } else if (crudeValue !== '' && divideFirstPress) {
                values.push(parseFloat(crudeValue));
                values.push(' / ');
                expressionInput.value += parseFloat(crudeValue);
                expressionInput.value += ' / ';
                nowOperatingInput.value = '/ ';
                nowOperatingInput.value += input.value;
                crudeValue = '';
                dividePressed = true;

            } else if (values.length >= 1 && divideFirstPress) {
                values.push(' / ');
                expressionInput.value += ' / ';
                nowOperatingInput.value = '/ ';
                nowOperatingInput.value += input.value;
                crudeValue = '';
                dividePressed = true;

            } else if (clearPressed) {
                expressionInput.value = input.value;

            } else {
                crudeValue = '';
                input.value = null;
                expressionInput.value = null;
                nowOperatingInput.value = null;
            };

            periodUsed = false;
            clearPressed = false;
            clearAllPressed = false;
            sumPressed = false;
            sumFirstPress = false;
            deductPressed = false;
            deductFirstPress = false;
            multiplyPressed = false;
            multiplyFirstPress = false;
            exponentialEnd = true;
            equalsPressed = false;
            numberBeforeOperator = false;
            inputClear = true;

            console.log('=> DIVIDE PRESSED');
            console.log('periodUsed status = ', periodUsed);
            console.log('periodBeforeNumber status = ', periodBeforeNumber);
            console.log('equalsPressed status = ', equalsPressed);
            console.log('sumPressed status = ', sumPressed);
            console.log('sumFirstPress status = ', sumFirstPress);
            console.log('deductPressed status = ', deductPressed);
            console.log('deductFirstPress status = ', deductFirstPress);
            console.log('dividePressed status = ', dividePressed);
            console.log('divideFirstPress status = ', divideFirstPress);
            console.log('multiplyPressed status = ', multiplyPressed);
            console.log('multiplyFirstPress status = ', multiplyFirstPress);
            console.log('multiplyClickCount = ', multiplyClickCount);
            console.log('exponentialEnd status = ', exponentialEnd);
            console.log('numberPressed status = ', numberPressed);
            console.log('numberBeforeOperator status = ', numberBeforeOperator);
            console.log('numberAfterOperator = ', numberAfterOperator);
            console.log('clearPressed = ', clearPressed);
            console.log('clearAllPressed = ', clearAllPressed);
            console.log('inputClear status = ', inputClear);
            console.log('input.value =', input.value);
            console.log('crudeValue = ', crudeValue);
            console.log('values.lenght = ', values.length);
            console.log('valuesarray = ', values);
            console.log('');
        });
    };

    function multiplyFunction() {

        multiplyButton.addEventListener('click', () => {
            if (periodBeforeNumber) {
                return;
            }

            multiplyPressed = false;
            multiplyClickCount += 1;
            let exponential = convertToExponential(multiplyClickCount);
            

            if (equalsPressed) {
                expressionInput.value += input.value;
                expressionInput.value += '  ||  ';
                nowOperatingInput.value = '* ';
            };

            if (equalsPressed && clearAllPressed || sumFirstPress || deductFirstPress || divideFirstPress) {
                expressionInput.value += input.value;
            };

            crudeValue = input.value.toString();

            if (crudeValue !== '' && !multiplyFirstPress) {
                values.push(parseFloat(crudeValue));
                values.push(' / ');
                expressionInput.value += ' * ';

                if (!exponentialEnd) {
                    nowOperatingInput.value = input.value + ' ' + exponential;
                } else {
                    nowOperatingInput.value = '* ';
                    nowOperatingInput.value += input.value;
                };

                crudeValue = '';
                multiplyFirstPress = true;
                multiplyPressed = true;

            } else if (values.length >= 1 && !multiplyFirstPress) {
                values.push(' * ');
                expressionInput.value += ' * ';

                if (!exponentialEnd) {
                    nowOperatingInput.value = input.value + ' ' + exponential;
                } else {
                    nowOperatingInput.value = '* ';
                    nowOperatingInput.value += input.value;
                };

                crudeValue = '';
                multiplyFirstPress = true;
                multiplyPressed = true;

            } else if (crudeValue !== '' && multiplyFirstPress) {
                values.push(parseFloat(crudeValue));
                values.push(' * ');
                expressionInput.value += parseFloat(crudeValue);
                expressionInput.value += ' * ';

                if (!exponentialEnd) {
                    nowOperatingInput.value = input.value + ' ' + exponential;
                } else {
                    nowOperatingInput.value = '* ';
                    nowOperatingInput.value += input.value;
                };

                crudeValue = '';
                multiplyPressed = true;

            } else if (values.length >= 1 && multiplyFirstPress) {
                values.push(' * ');
                expressionInput.value += ' * ';

                if (!exponentialEnd) {
                    nowOperatingInput.value = input.value + ' ' + exponential;
                } else {
                    nowOperatingInput.value = '* ';
                    nowOperatingInput.value += input.value;
                };

                crudeValue = '';
                multiplyPressed = true;

            } else if (clearPressed) {
                expressionInput.value = input.value;

            } else {
                crudeValue = '';
                input.value = null;
                expressionInput.value = null;
                nowOperatingInput.value = null;
            };

            periodUsed = false;
            clearPressed = false;
            clearAllPressed = false;
            sumPressed = false;
            sumFirstPress = false;
            deductPressed = false;
            deductFirstPress = false;
            dividePressed = false;
            divideFirstPress = false;
            equalsPressed = false;
            numberBeforeOperator = false;
            inputClear = true;

            console.log('=> MULTIPLY PRESSED');
            console.log('periodUsed status = ', periodUsed);
            console.log('periodBeforeNumber status = ', periodBeforeNumber);
            console.log('equalsPressed status = ', equalsPressed);
            console.log('sumPressed status = ', sumPressed);
            console.log('sumFirstPress status = ', sumFirstPress);
            console.log('deductPressed status = ', deductPressed);
            console.log('deductFirstPress status = ', deductFirstPress);
            console.log('dividePressed status = ', dividePressed);
            console.log('divideFirstPress status = ', divideFirstPress);
            console.log('multiplyPressed status = ', multiplyPressed);
            console.log('multiplyFirstPress status = ', multiplyFirstPress);
            console.log('multiplyClickCount = ', multiplyClickCount);
            console.log('exponential = ', exponential);
            console.log('exponentialEnd status = ', exponentialEnd);
            console.log('numberPressed status = ', numberPressed);
            console.log('numberBeforeOperator status = ', numberBeforeOperator);
            console.log('numberAfterOperator = ', numberAfterOperator);
            console.log('clearPressed = ', clearPressed);
            console.log('clearAllPressed = ', clearAllPressed);
            console.log('inputClear status = ', inputClear);
            console.log('input.value =', input.value);
            console.log('crudeValue = ', crudeValue);
            console.log('values.lenght = ', values.length);
            console.log('valuesarray = ', values);
            console.log('');
        });
    };

    function convertToExponential(number) {
        let digits = Array.from(String(number), Number);
        let superscripts = ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'];
        let convertedNumber = '';

        for (let i = 0; i < digits.length; i++) {
            let digit = digits[i];
            let superScript = superscripts[digit];
            convertedNumber += superScript;
        }
        return convertedNumber;
    };

    function equalsFunction() {

        equalsButton.addEventListener('click', () => {

            if (sumPressed || deductPressed || dividePressed || multiplyPressed) {

                if (!clearPressed && !equalsPressed) {
                    crudeValue = input.value.toString();
                    nowOperatingInput.value = null;
                    equalsPressed = true;

                    if (crudeValue !== '' && numberAfterOperator || sumPressed || deductPressed || dividePressed || multiplyPressed) {
                        values.push(crudeValue);
                        crudeValue = '';
                        let expression = values.join('');
                        let result = eval(expression);
                        values = [];
                        expressionInput.value += input.value;
                        expressionInput.value += ' = ';
                        input.value = result;
                        numberAfterOperator = false;

                        console.log('=> equals pressed');
                        console.log('expression = ', expression);

                    } else if (crudeValue !== '') {
                        values.push(crudeValue);
                        crudeValue = '';
                        let expression = values.join('');
                        let result = eval(expression);
                        values = [];
                        expressionInput.value += ' = ';
                        input.value = result;

                        console.log('=> EQUALS PRESSED');
                        console.log('expression = ', expression);


                    } else {
                        crudeValue = '';
                        input.value = null;

                        console.log('=> EQUALS PRESSED');
                    };
                    
                    periodUsed = false;
                    sumPressed = false;
                    deductPressed = false;
                    dividePressed = false;
                    multiplyPressed = false;
                    multiplyClickCount = 1;
                    exponentialEnd = false;
                    clearPressed = false;
                    numberBeforeOperator = false;
                    inputClear = false;

                    console.log('periodUsed status = ', periodUsed);
                    console.log('periodBeforeNumber status = ', periodBeforeNumber);
                    console.log('equalsPressed status = ', equalsPressed);
                    console.log('sumPressed status = ', sumPressed);
                    console.log('sumFirstPress status = ', sumFirstPress);
                    console.log('deductPressed status = ', deductPressed);
                    console.log('deductFirstPress status = ', deductFirstPress);
                    console.log('dividePressed status = ', dividePressed);
                    console.log('divideFirstPress status = ', divideFirstPress);
                    console.log('multiplyPressed status = ', multiplyPressed);
                    console.log('multiplyFirstPress status = ', multiplyFirstPress);
                    console.log('exponentialEnd status = ', exponentialEnd);
                    console.log('numberPressed status = ', numberPressed);
                    console.log('numberBeforeOperator status = ', numberBeforeOperator);
                    console.log('numberAfterOperator = ', numberAfterOperator);
                    console.log('clearPressed = ', clearPressed);
                    console.log('clearAllPressed = ', clearAllPressed);
                    console.log('inputClear status = ', inputClear);
                    console.log('input.value =', input.value);
                    console.log('crudeValue = ', crudeValue);
                    console.log('values.lenght = ', values.length);
                    console.log('valuesarray = ', values);
                    console.log('');
                };
            } else {
                return;
            };
        });
    };

    sumFunction();
    deductFunction();
    divideFunction();
    multiplyFunction();
    equalsFunction();
    convertToExponential();
});