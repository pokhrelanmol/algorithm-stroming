function fib(number) {
    if (number <= 1) {
        return number;
    } else {
        return fib(number - 1) + fib(number - 2);
    }
}
console.log(fib(2));
function factorial(n) {
    let fact;
    if (n <= 1) {
        return 1;
    } else {
        fact = n * factorial(n - 1);
    }
    return fact;
}
console.log(factorial(1));
