function cifrarVigenere(mensagem, palavraChave, modo = 'codificar') {
    let resultado = "";
    let chaveIndex = 0;

    for (let i = 0; i < mensagem.length; i++) {
        let letra = mensagem[i];
        let codigo = letra.charCodeAt(0);

        let letraChave = palavraChave[chaveIndex % palavraChave.length];
        let codigoChave;

        if (letraChave >= 'A' && letraChave <= 'Z') {
            codigoChave = letraChave.charCodeAt(0) - 65;
        } else if (letraChave >= 'a' && letraChave <= 'z') {
            codigoChave = letraChave.charCodeAt(0) - 97;
        } else {
            codigoChave = 0;
        }

        if (modo === 'decodificar') {
            codigoChave = -codigoChave;
        }

        if (codigo >= 65 && codigo <= 90) {
            resultado += String.fromCharCode(((codigo - 65 + codigoChave + 26) % 26) + 65);
            chaveIndex++;
        } else if (codigo >= 97 && codigo <= 122) {
            resultado += String.fromCharCode(((codigo - 97 + codigoChave + 26) % 26) + 97);
            chaveIndex++;
        } else {
            resultado += letra;
        }
    }

    return resultado;
}
//lógica por Cainã Sandes Batista