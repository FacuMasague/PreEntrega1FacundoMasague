/* Simulador interactivo que le permite al usuario calcular su nota del trimestre */

const nombreDeUsuario = prompt("Porfavor, ingrese su nombre")

const opc1 = prompt(`Buen dia ` + nombreDeUsuario + `, eliga una de las siguientes opciones (Escriba su respectivo numero para elegir)
1: Calcular Promedio
2: Parametros de aprobado/desaprobado (Mirar desde la consola)`)



if (opc1 == "1") {
    let suma = 0
    let division = 0
    let calculoSuma = true

    while(calculoSuma) {
        division++
        let sumaNueva = prompt(`Ingrese la nota
        Si ha finalizado ingresando sus notas escriba "Listo"`)

        if (sumaNueva == "Listo") {
            calculoSuma = false
        } else {
            suma = suma + parseInt(sumaNueva)
        }
    }

    let resultado = suma / (division - 1)
    notaFinal(resultado)

    function notaFinal(nota) {
        if (nota >= 7) {
            alert("Su nota es un " + nota + ", usted a aprobado")
        } else if (nota <= 6) {
            alert("Su nota es un " + nota + ", usted no a aprobado")
        }
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
