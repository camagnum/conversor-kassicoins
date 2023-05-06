// Declarações
const realInput = document.getElementById("input-real");
const kassiInput = document.getElementById("input-kassi");

// Escutadores
realInput.addEventListener("keyup", function () {
	convertRealToKassi(realInput.value);
});

kassiInput.addEventListener("keyup", function () {
	convertKassiToReal(kassiInput.value);
});

// Funções de conversão
function convertRealToKassi(realText) {
	var realValue = parseFloat(realText);

	if ((typeof realValue != "number") || (realValue == "")) {
		kassiInput.value = "";
		return null;
	}

	let kassi = realValue / 60;

    kassiInput.value = kassi;
	return kassi;
}

function convertKassiToReal(kassiText) {
    var kassiValue = parseFloat(kassiText);

    if (typeof kassiValue != "number") {
		realInput.value = "";
		return null;
	}

    let real = kassiValue * 60;

    realInput.value = real;
    return real;

}
