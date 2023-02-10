/* Simulador interactivo que le permite al usuario calcular su nota del trimestre
Pasos que sigue el simulador:
1= Le pide el nombre al usuario
2= Le hace elegir al usuario si quiere ver que notas son aprobado y que notas son desaprobado o si quiere calcular su nota
3= Le pide al usuario entre cuantas notas debe ser el calculo
4= Utilizando condicionales, toma la cantidad de notas que informa el usuario y hace un calculo a base de eso */

let nombreDeUsuario = prompt("Porfavor, ingrese su nombre")

let opc1 = prompt(`Buen dia ` + nombreDeUsuario + `, eliga una de las siguientes opciones (Escriba su respectivo numero para elegir)
1: Calcular Promedio
2: Parametros de aprobado/desaprobado (Mirar desde la consola)`)



if (opc1 == "1") {
    function notaFinal(nota) {
        if (nota >= 7) {
            alert("Su nota es un " + nota + ", usted a aprobado")
        } else if (nota <= 6) {
            alert("Su nota es un " + nota + ", usted no a aprobado")
        }
    }
    let opc2 = prompt(`Ha elegido calcular su nota del trimestre, porfavor escriba cuantas notas tuvo en el trimestre para realizar el calculo (Maximo 10)`)

    if (opc2 == "2") {
        let num1 = Number(prompt("Escriba su primer nota"))
        let num2 = Number(prompt("Escriba su segunda nota"))

        let resultado = (num1+num2)/2
        notaFinal(resultado)
    } else if (opc2 == "3") {
        let num1 = Number(prompt("Escriba su primer nota"))
        let num2 = Number(prompt("Escriba su segunda nota"))
        let num3 = Number(prompt("Escriba su tercer nota"))

        let resultado = (num1+num2+num3)/3
        notaFinal(resultado)
    } else if (opc2 == "4") {
        let num1 = Number(prompt("Escriba su primer nota"))
        let num2 = Number(prompt("Escriba su segunda nota"))
        let num3 = Number(prompt("Escriba su tercer nota"))
        let num4 = Number(prompt("Escriba su cuarta nota"))

        let resultado = (num1+num2+num3+num4)/4
        notaFinal(resultado)
    } else if (opc2 == "5") {
        let num1 = Number(prompt("Escriba su primer nota"))
        let num2 = Number(prompt("Escriba su segunda nota"))
        let num3 = Number(prompt("Escriba su tercer nota"))
        let num4 = Number(prompt("Escriba su cuarta nota"))
        let num5 = Number(prompt("Escriba su quinta nota"))

        let resultado = (num1+num2+num3+num4+num5)/5
        notaFinal(resultado)
    } else if (opc2 == "6") {
        let num1 = Number(prompt("Escriba su primer nota"))
        let num2 = Number(prompt("Escriba su segunda nota"))
        let num3 = Number(prompt("Escriba su tercer nota"))
        let num4 = Number(prompt("Escriba su cuarta nota"))
        let num5 = Number(prompt("Escriba su quinta nota"))
        let num6 = Number(prompt("Escriba su sexta nota"))

        let resultado = (num1+num2+num3+num4+num5+num6)/6
        notaFinal(resultado)
    } else if (opc2 == "7") {
        let num1 = Number(prompt("Escriba su primer nota"))
        let num2 = Number(prompt("Escriba su segunda nota"))
        let num3 = Number(prompt("Escriba su tercer nota"))
        let num4 = Number(prompt("Escriba su cuarta nota"))
        let num5 = Number(prompt("Escriba su quinta nota"))
        let num6 = Number(prompt("Escriba su sexta nota"))
        let num7 = Number(prompt("Escriba su septima nota"))

        let resultado = (num1+num2+num3+num4+num5+num6+num7)/7
        notaFinal(resultado)
    } else if (opc2 == "8") {
        let num1 = Number(prompt("Escriba su primer nota"))
        let num2 = Number(prompt("Escriba su segunda nota"))
        let num3 = Number(prompt("Escriba su tercer nota"))
        let num4 = Number(prompt("Escriba su cuarta nota"))
        let num5 = Number(prompt("Escriba su quinta nota"))
        let num6 = Number(prompt("Escriba su sexta nota"))
        let num7 = Number(prompt("Escriba su septima nota"))
        let num8 = Number(prompt("Escriba su octava nota"))

        let resultado = (num1+num2+num3+num4+num5+num6+num7+num8)/8
        notaFinal(resultado)
    } else if (opc2 == "9") {
        let num1 = Number(prompt("Escriba su primer nota"))
        let num2 = Number(prompt("Escriba su segunda nota"))
        let num3 = Number(prompt("Escriba su tercer nota"))
        let num4 = Number(prompt("Escriba su cuarta nota"))
        let num5 = Number(prompt("Escriba su quinta nota"))
        let num6 = Number(prompt("Escriba su sexta nota"))
        let num7 = Number(prompt("Escriba su septima nota"))
        let num8 = Number(prompt("Escriba su octava nota"))
        let num9 = Number(prompt("Escriba su novena nota"))

        let resultado = (num1+num2+num3+num4+num5+num6+num7+num8+num9)/9
        notaFinal(resultado)
    } else if (opc2 == "10") {
        let num1 = Number(prompt("Escriba su primer nota"))
        let num2 = Number(prompt("Escriba su segunda nota"))
        let num3 = Number(prompt("Escriba su tercer nota"))
        let num4 = Number(prompt("Escriba su cuarta nota"))
        let num5 = Number(prompt("Escriba su quinta nota"))
        let num6 = Number(prompt("Escriba su sexta nota"))
        let num7 = Number(prompt("Escriba su septima nota"))
        let num8 = Number(prompt("Escriba su octava nota"))
        let num9 = Number(prompt("Escriba su novena nota"))
        let num10 = Number(prompt("Escriba su decima nota"))

        let resultado = (num1+num2+num3+num4+num5+num6+num7+num8+num9+num10)/10
        notaFinal(resultado)
    } else {
        alert("Esa cantidad de notas no es valida, asegurese de que sea entre dos y diez notas")
    }
} else if (opc1 == "2") {
    let rangoNotas = 0
    for(rangoNotas ; rangoNotas <= 10 ; rangoNotas++) {
        if (rangoNotas <= 6) {
            console.log(rangoNotas + " -----> Desaprobado")
        } else {
            console.log(rangoNotas + " -----> Aprobado")
        }
    }
} else {
    alert("Tu opcion no es valida, la respuesta debe ser 1 o 2")
}