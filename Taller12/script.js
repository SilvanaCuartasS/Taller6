const num1 = parseInt (prompt ("Ingrese el primer numero"));
const num2 = parseInt (prompt ("Ingrese el segundo numero"));
const num3 = parseInt (prompt ("Ingrese el tercero numero"));
const parrafo = document.querySelector("#parrafo");

if (num1 > num2 && num1 > num3){
    parrafo.innerHTML = "Él numero más grande es " + num1;
} else if (num2 > num1 && num2 > num3){
    parrafo.innerHTML = "Él numero más grande es " + num2;
}else {
    parrafo.innerHTML = "Él numero más grande es " + num3;
}