document.getElementById("aprovado").onclick = async function () {
    const texto = document.getElementById("tare1");
    const move = document.getElementById("tare1Check");
    const fuera = document.getElementById("tarea1C");
    move.appendChild(texto);
    fuera.remove();
    
}

document.getElementById("aprovado2").onclick = async function () {
    const texto = document.getElementById("tare2");
    const move = document.getElementById("tare2Check");
    const fuera = document.getElementById("tarea2C");
    move.appendChild(texto);
    fuera.remove();
}

document.getElementById("aprovado3").onclick = async function () {
    const texto = document.getElementById("tare3");
    const move = document.getElementById("tare3Check");
    const fuera = document.getElementById("tarea3C");
    move.appendChild(texto);
    fuera.remove();
}