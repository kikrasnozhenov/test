var factorial = function faktorial (a) {
    var n = parseInt(a);
    return (n < 0 || a != n) ? 'не бывает' :
    (n == 0 ? 1 : n * faktorial(n-1));
}

console.log(factorial ('dasdas'));