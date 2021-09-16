document.getElementById('temas').addEventListener("change", temaSeleccionado);

//Función para inicializar variables y limpiar articulos, y mostrar cajas
function temaSeleccionado() {
    document.getElementById("numero").value = null;
    document.getElementById("color").value = null;
    document.getElementById("resultado").innerHTML = "¡Resultados! <br>";
    document.getElementById("resultado2").innerHTML = "¡Resultados! <br>";

    //getElementsByTagName convierte en arreglo porque guarda más de un elemento
    capas = document.getElementsByTagName("article");

    //Ocultar varios elementos
    for (i = 0; i < capas.length; i++) {
        capas[i].style.display = "none";
    }

    //Almacenar el dato de la opción del usuario
    var articulo = document.getElementById("temas").value;
    document.getElementById(articulo).style.display = "block";
}

function mostrarCajas() {
    var numero = parseInt(document.getElementById("numero").value);
    var color = document.getElementById("color").value;
    var borde = document.getElementById("borde").value;
    for (i = 0; i < numero; i++) {
        var caja = document.createElement("p");
        caja.style.height = "60px";
        caja.style.width = "60px";
        caja.style.display = "inline-block";
        caja.style.margin = "15px";
        caja.style.border = color + " " + borde;
        resultado.appendChild(caja);
    }
}

function mostrarEncuesta() {
    var lugar = document.getElementById("lugar").value;
    var estudiar = document.getElementById("estudiar").value;
    var aprender = document.getElementById("aprender").value;
    var vivir = document.getElementById("vivir").value;
    var profesión = document.getElementById("profesión").value;
    datos = "¡Resultados!<br><b>¿Qué lugar te gustaría visitar algún día?</b> <br>R= " + lugar +
        "<br><b>¿Qué has querido estudiar hace tiempo?</b> <br>R= " + estudiar +
        "<br><b>¿Qué siempre has querido aprender?</b> <br>R= " + aprender +
        "<br><b>¿Dónde es tu lugar ideal para vivir?</b> <br>R= " + vivir +
        "<br><b>¿Qué profesión te gustaría ejercer?</b> <br>R= " + profesión;
    document.getElementById("resultado2").innerHTML = datos;
}