function changeToF() {
    var celsius = parseFloat(document.getElementById("text").value);
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("result").innerHTML = fahrenheit + " °F";
}
