var calcSum=0;
var calcResidual=0;
var calcMultiply=0;
var calcSegment=0;
var calcPoint=0;

function numberZero() {
    document.getElementById('display').value += document.getElementById('zero').value;
}

function numberOne() {
    document.getElementById('display').value += document.getElementById('one').value;
}

function numberTwo() {
    document.getElementById('display').value += document.getElementById('two').value;
}

function numberThree() {
    document.getElementById('display').value += document.getElementById('three').value;
}

function numberFour() {
    document.getElementById('display').value += document.getElementById('four').value;
}

function numberFive() {
    document.getElementById('display').value += document.getElementById('five').value;
}

function numberSix() {
    document.getElementById('display').value += document.getElementById('six').value;
}

function numberSeven() {
    document.getElementById('display').value += document.getElementById('seven').value;
}

function numberEight() {
    document.getElementById('display').value += document.getElementById('eight').value;
}

function numberNine() {
    document.getElementById('display').value += document.getElementById('nine').value;
}

function numberSum() {
    calcSum++;
    calcResidual++;
    calcMultiply++;
    calcSegment++;
    calcPoint=0;
    if (calcSum === 1) {
        document.getElementById('display').value += document.getElementById('sum').value;
    }
}

function numberResidual() {
    calcSum++;
    calcResidual++;
    calcMultiply++;
    calcSegment++;
    calcPoint=0;
    if (calcSum === 1) {
        document.getElementById('display').value += document.getElementById('residual').value;
    }
}

function numberMultiply() {
    calcSum++;
    calcResidual++;
    calcMultiply++;
    calcSegment++;
    calcPoint=0;
    if (calcSum === 1) {
        document.getElementById('display').value += document.getElementById('multiply').value;
    }
}

function numberSegment() {
    calcSum++;
    calcResidual++;
    calcMultiply++;
    calcSegment++;
    calcPoint=0;
    if (calcSum === 1) {
        document.getElementById('display').value += document.getElementById('segment').value;
    }
}

function numberPoint() {
    calcPoint++;
    if (calcPoint === 1) {
        document.getElementById('display').value += document.getElementById('point').value;
    }

}

function numberResult() {
    calcSum=0;
    calcResidual=0;
    calcMultiply=0;
    calcSegment=0;
    calcPoint=0;
    document.getElementById('display').value = eval(document.getElementById('display').value)
}

function numberClear() {
    calcSum=0;
    calcResidual=0;
    calcMultiply=0;
    calcSegment=0;
    calcPoint=0;
    document.getElementById('display').value = '';
}

function numberSave() {
    localStorage.setItem('Результат последнего вычисления равен:', document.getElementById('display').value)
}







