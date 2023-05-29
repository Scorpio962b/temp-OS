function celsiustofahrenheit(celsius){
   let fahr = ((celsius * 9/5) + 32 );
   return fahr
}
function fahrenheittocelsius(fahrenheit){
   let celc = ((fahrenheit - 32) * 5/9);
   return celc
}

let temperature = parseFloat(prompt('Enter the Temperature'));
let conversionType = prompt("Choose the conversion type: (C to F or F to C)");


if (conversionType.toLowerCase() === "c to f") {
      document.getElementById("answer").textContent =
       celsiustofahrenheit(temperature);

} else if (conversionType.toLowerCase() === " f to c"){
   document.getElementById("answer").textContent =
    fahrenheittocelsius(temperature);

} else{
    alert("invalid conversion type.");
}


