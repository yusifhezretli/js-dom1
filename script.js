function hesabla(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    
    switch (operation) {
        case '+':
            result = num1 + num2;
            alert(`${num1} + ${num2} = ${result}`);
            break;
        case '-':
            result = num1 - num2;
            alert(`${num1} - ${num2} = ${result}`);
            break;
        case '*':
            result = num1 * num2;
            alert(`${num1} * ${num2} = ${result}`);
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
                alert(`${num1} / ${num2} = ${result}`);
            } else {
                alert("0-a bolme yoxdu");
            }
            break;
        default:
            alert("xəta");
            break;
    }
}


function tersinesoz() {
    const input = document.getElementById('inputString').value;

    let reversedString = '';

    for (let i = input.length - 1; i >= 0; i--) {
        reversedString += input[i];
    }

    alert(reversedString);
}


function changeDivStyle() {
    let width = document.getElementById('width').value + 'px';
    let height = document.getElementById('height').value + 'px';
    let borderWidth = document.getElementById('borderWidth').value + 'px';
    let borderStyle = document.getElementById('borderStyle').value;
    let borderColor = document.getElementById('borderColor').value;
    let backgroundColor = document.getElementById('backgroundColor').vallet
    let div = document.getElementById('customDiv');
    
    div.style.width = width;
    div.style.height = height;
    div.style.borderWidth = borderWidth;
    div.style.borderStyle = borderStyle;
    div.style.borderColor = borderColor;
    div.style.backgroundColor = backgroundColor;
}


function updateWidth() {
    let widthInput = document.getElementById('widthInput').value + 'px';
    let heightInput = document.getElementById('heightInput').value + 'px';
    let borderWidthInput = document.getElementById('borderWidthInput').value + 'px';

    myDiv.style.width = widthInput;
    myDiv.style.height = heightInput;
    myDiv.style.borderWidth = borderWidthInput;
}


// canculator

let display = document.getElementById('display');
// İstifadəçinin hazırda daxil etdiyi nömrə
let currentInput = '';
// operatora daxil olduqdan sonra nömrə
let previousInput = '';
// operatorlar
let operator = '';


// silme funkisası
function clearDisplay() {
    display.innerText = '0';
    currentInput = '';
    previousInput = '';
    operator = '';
}

function appendNumber(number) {
    // İkiqat nöqtələrin qarşısını alır
    if (currentInput.includes('.') && number === '.') return;

    currentInput += number;
    //  elementinin icini guncelleyir
    display.innerText = currentInput;
}

function appendOperator(op) {
    // Bu sətir previousInput dəyişəninin boş olub olmadığını yoxlayır.
    if (previousInput !== '') {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result;
    operator = '';
    previousInput = '';
    display.innerText = result;
}

let modal = document.querySelector('.modal'),
            openModalButtons = document.querySelectorAll('.open-modal'),
            closeModalButtons = document.querySelectorAll('.close-modall'),
            closeProjectButton = document.querySelector('.close-modal');

        let openModal = function () {
            modal.classList.add('active-modal');
        };

        let closeModal = function () {
            modal.classList.remove('active-modal');
        };

        openModalButtons.forEach(modalBtn => {
            modalBtn.addEventListener('click', (event) => {
                event.preventDefault();
                openModal();
            });
        });

        closeModalButtons.forEach(el => {
            el.addEventListener('click', () => {
                closeModal();
            });
        });

        closeProjectButton.addEventListener('click', () => {
            closeModal();
        });

        document.addEventListener('click', (event) => {
            if (modal.classList.contains('active-modal') && !event.target.closest('.modal-content') && !event.target.closest('.open-modal')) {
                closeModal();
            }
        });


        let acc = document.querySelectorAll('.accordion');

        for (let i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
               let panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.display = "block";
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }