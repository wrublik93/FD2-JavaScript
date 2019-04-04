var b = 0;

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
    document.getElementById('display').value += document.getElementById('sum').value;
    b=b+parseInt(document.getElementById('display').value,10);
    document.getElementById('display').value = b;
}

function numberResidual() {
    document.getElementById('display').value += document.getElementById('residual').value;
}

function numberMultiply() {
    document.getElementById('display').value += document.getElementById('multiply').value;
}

function numberSegment() {
    document.getElementById('display').value += document.getElementById('segment').value;
}

function numberPoint() {
    document.getElementById('display').value += document.getElementById('point').value;
}

function numberResult() {

}

function numberClear() {
    document.getElementById('display').value = '';
    b=0;

}

function numberSave() {
    localStorage.setItem('Последнее полученное значение:', document.getElementById('display').value)
}


