function cifrarAtbash(mensagem) {
    let resultado = '';
    const alfabetoNormalMaiusculo = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alfabetoNormalMinusculo = 'abcdefghijklmnopqrstuvwxyz';
    const alfabetoInvertidoMaiusculo = 'ZYXWVUTSRQPONMLKJIHGFEDCBA';
    const alfabetoInvertidoMinusculo = 'zyxwvutsrqponmlkjihgfedcba';
    for (let i = 0; i < mensagem.length; i++) {
        const caractere = mensagem[i];
         if (alfabetoNormalMaiusculo.includes(caractere)) {
            const indice = alfabetoNormalMaiusculo.indexOf(caractere);
            resultado += alfabetoInvertidoMaiusculo[indice];
         } else if (alfabetoNormalMinusculo.includes(caractere)) {
            const indice = alfabetoNormalMinusculo.indexOf(caractere);
            resultado += alfabetoInvertidoMinusculo[indice];
         }
         else {
        resultado += caractere;
         }
    } 
    return resultado;
}
//lógica por Gustavo Oliveira Francischini