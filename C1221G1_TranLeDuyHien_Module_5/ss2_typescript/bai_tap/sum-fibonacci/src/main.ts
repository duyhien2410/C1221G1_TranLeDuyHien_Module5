function sumFibonacci(number : number) {
    let a = 0, b = 0, c = 0, sum = 0;
    for (let i = 1; i <= number; i++) {
        if (i == 1) {
            a = 1
            c = 1
            sum += a
        } else {
            a = b + c
            b = c
            c = a
            sum += a
        }
    }
    return sum;
}

function fibonacci(number : number) {
    let a = 0, b = 0, c = 0;
    let fibo = "";
    for (let i = 1; i <= number; i++) {
        if (i == 1) {
            a = 1
            c = 1
            fibo += a + ", "
        } else {
            a = b + c
            b = c
            c = a
            fibo += a + ", "
        }
    }
    return fibo;
}

let num: number = 20;
console.log(fibonacci(num))
console.log("Tổng dãy fibonacci = "+sumFibonacci(num));
