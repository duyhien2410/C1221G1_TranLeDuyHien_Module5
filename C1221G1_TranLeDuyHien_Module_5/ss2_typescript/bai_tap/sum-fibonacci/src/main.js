var a = 0, b = 0, c = 0, sum = 0;
var fibonacci = "";
for (var i = 1; i <= 20; i++) {
    if (i == 1) {
        a = 1;
        c = 1;
        fibonacci += a + ", ";
        sum += a;
    }
    else {
        a = b + c;
        b = c;
        c = a;
        fibonacci += a + ", ";
        sum += a;
    }
}
console.log(fibonacci);
console.log("Tổng dãy fibonacci = " + sum);
