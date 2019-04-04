var x = document.getElementById('sideA').value;
var y = document.getElementById('sideB').value;
var z = document.getElementById('sideC').value;

function triangle(x, y, z) {
    x = parseInt(document.getElementById('sideA').value);
    y = parseInt(document.getElementById('sideB').value);
    z = parseInt(document.getElementById('sideC').value);

    let arr = [x,y,z];
    function compareNumeric(m, n) {
        if (m > n) return 1;
        if (m < n) return -1;
    }
    arr.sort(compareNumeric);
    let a = arr[0];
    let b = arr[1];
    let c = arr[2];
    let sum = Math.pow(a,2)+ Math.pow(b,2);
    let big = Math.pow(c, 2);
    if(((a+b)<=c)||((a+c)<=b)||((b+c)<=a)) {
        console.log('Треугольник не существует')
    } else {
        if (sum === big) {
            console.log('Треугольник прямоугольный')
        } else if (sum < big) {
            console.log('Треугольник тупоугольный')
        } else if (sum > big) {
            console.log('Треугольник остроугольный')
        }
    }
}
