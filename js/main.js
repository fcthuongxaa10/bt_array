var array = [];
document.getElementById("btnAdd").onclick = function() {
    var number = document.getElementById("inputNumber").value;
    array.push(number);
    document.getElementById("txtNumber").innerHTML = array;
}

document.getElementById("btn6").onclick = function() {
    var viTri = 0;
    var number1 = document.getElementById("vitri1").value;
    var number2 = document.getElementById("vitri2").value;
    viTri = array[number1];
    array[number1] = array[number2];
    array[number2] = viTri;
    document.getElementById("txtNumber6").innerHTML = array;
}
document.getElementById("btn7").onclick = function() {
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                var max = array[j];
                array[j] = array[j + 1];
                array[j + 1] = max;
            }
        }
    }
    document.getElementById("txtNumber7").innerHTML = array;
}