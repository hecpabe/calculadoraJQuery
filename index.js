

/*
    Título: Index
    Name: Héctor Paredes Benavides
    Descripción: Lógica de la calculadora
    Fecha: 27/9/2022
*/

/* Declaraciones Globales */
var borrarResultado = false;

/* Event Listeners (Lógica de la Calculadora) */
$(function () {

    // Event Listener General
    $("button").click(function () {

        // Con esto hacemos que cuando la calculadora de un resultado, al pulsar otra tecla, antes de añadir texto, se borre el
        // resultado anterior
        if (borrarResultado){

            borrarResultado = false;
            $(".display").text("");

        }

    });

    // Botones normales
    $(".calc-btn").click(function () {

        // Añadimos el carácter a la pantalla
        $(".display").append($(this).text());

    });

    // Boton CE
    $(".clear1-btn").click(function () {

        // Limpiamos por completo la pantalla
        $(".display").text("");

    });

    // Boton C
    $(".clear-btn").click(function () {

        // Borramos el último carácter de la pantalla
        $(".display").text($(".display").text().substring(0, $(".display").text().length - 1));

    });

    // Calculate
    $(".calculate-btn").click(function () {

        // Recogemos lo que hay en el display
        formula = $(".display").text();
        formulaFormateada = ""

        // Lo formateamos, transformando los símbolos de multiplicación y división a un formato "compilable"
        for(i = 0; i < formula.length; i++){

            caracterActual = formula.charAt(i);

            if (caracterActual == 'x')
                formulaFormateada += "*";
            else if (caracterActual == '÷')
                formulaFormateada += "/";
            else
                formulaFormateada += caracterActual;

        }

        // Intentamos realizar la operación
        try {

            // "Compilamos" la fórmula y mostramos el resultado por la pantalla
            $(".display").text(eval(formulaFormateada))

        }
        catch (exception) {

            // Si ha habido algún error lo mostramos por la pantalla y por la consola
            $(".display").text("Syntax Error");
            console.log(exception);

        }

        // Marcamos que la próxima vez que se pulse una tecla se borre el resultado mostrado en la pantalla
        borrarResultado = true;

    });

});