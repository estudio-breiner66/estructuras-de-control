//Crea un programa que lea un número entero del usuario y lo clasifique como positivo, negativo o cero. Utiliza una sentencia if-else .
const numero = parseInt(prompt("ingrese un numero entero: "))
if (numero > 0) {
    console.log("el numero es positivo")
    } else if (numero=== 0) {
        console.log("el numero es cero")
     } else {
       console.log("el numero es negativo")
}