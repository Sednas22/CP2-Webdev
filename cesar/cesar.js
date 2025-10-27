function cifrarCesar(mensagem, chave) {
    let resultado = "";

    for (let i=0; i<mensagem.length; i++) {
        let codigo = mensagem.charCodeAt(i);

        if (codigo >= 65 && codigo <= 90) {
            resultado += String.fromCharCode(((codigo - 65 + chave)%26)+65)
        }
        else if (codigo >= 97 && codigo <= 122){
            resultado += String.fromCharCode(((codigo - 97 + chave)%26)+97)
        }
        else {
            resultado += mensagem[i]
        }
    }
    return resultado;
}
//lógica por Cainã Sandes Batista