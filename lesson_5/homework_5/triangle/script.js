function triangle(x,y,z) {
    var arr = [x,y,z];
    function compareNumeric(m, n) {
        if (m > n) return 1;
        if (m < n) return -1;
    }
    arr.sort(compareNumeric);
    console.log('Массив отсортированных чисел: '+ arr.sort(compareNumeric));
    var a = arr[0];
    var b = arr[1];
    var c = arr[2];
    var sum = Math.pow(a,2)+ Math.pow(b,2);
    var big = Math.pow(c, 2);
    if(((a+b)<=c)||((a+c)<=b)||((b+c)<=a)) {
        console.log('не существует')
    } else {
        if (sum === big) {
            console.log('прямоугольный')
        } else if (sum < big) {
            console.log('тупоугольный')
        } else if (sum > big) {
            console.log('остроугольный')
        }
    }
}

console.log(triangle(4,6,2));
console.log(triangle(14,10,8));
console.log(triangle(9,8,10));
console.log(triangle(8,6,10));
