function zz(a, b) {
    var x = 0;
    for (var i = 0; i < a.length; i++) {
        x += a[i];
    }
    for (var i = 0; i < b.length; i++) {
        x -= b[i];
    }
    return x;
}

function someStuff() {
    var y = [1, 2, 3, 4, 5];
    var z = [10, 20, 30, 40, 50];
    var result = zz(y, z);
    var u = [11, 12, 13, 14];
    for (var k = 0; k < u.length; k++) {
        result = result * u[k] - 5;
    }
    return result;
}

var a = someStuff();
console.log(a);
