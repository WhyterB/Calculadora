function calcular() {
    var tipo = document.getElementById("tipo").value;
    var a1 = parseFloat(document.getElementById("a1").value);
    var n = parseInt(document.getElementById("n").value);
    var r = parseFloat(document.getElementById("r").value);
    var resultado = document.getElementById("resultado");

    if (tipo === "pa") {
        var termo_pa = calcularPA(a1, n, r);
        resultado.innerHTML = "O " + n + "-ésimo termo da PA é: " + termo_pa;
    } else if (tipo === "pg") {
        var termo_pg = calcularPG(a1, n, r);
        resultado.innerHTML = "O " + n + "-ésimo termo da PG é: " + termo_pg;
    }
}

function calcularPA(a1, n, r) {
    return a1 + (n - 1) * r;
}

function calcularPG(a1, n, r) {
    return a1 * Math.pow(r, n - 1);
}
