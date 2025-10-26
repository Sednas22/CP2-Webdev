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








// Atbash:
/*
console.log(cifrarAtbash("OlaMundo")); 
// Esperado: "OñzPfmwl" (Nota: pode variar dependendo da sua implementação de caracteres especiais/ASCII)

// César:

console.log(cifrarCesar("criptografia", 3)); // Esperado: "fulswrjudiia"
console.log(cifrarCesar("fulswrjudiia", -3)); // Esperado: "criptografia"

// Vigenère:

const chaveV = "CHAVE";
const codificadoV = cifrarVigenere("Enigma!", chaveV, 'codificar'); 
console.log(codificadoV); // Ex: "Gñlgnx!"
console.log(cifrarVigenere(codificadoV, chaveV, 'decodificar')); // Esperado: "Enigma!"

// RSA (Usar a função gerarChavesRSA_Didaticas):

const PRIMO_1 = 17;
const PRIMO_2 = 19;
const CHAVES = gerarChavesRSA_Didaticas(PRIMO_1, PRIMO_2); 

const textoOriginal = "OLA"; 

// 1. Cifrar com a Chave Pública
const cifrado = cifrarRSA_Didatico(textoOriginal, CHAVES.publica.E, CHAVES.publica.N);
console.log("RSA Cifrado:", cifrado); // Array de números

// 2. Decifrar com a Chave Privada
const decifrado = decifrarRSA_Didatico(cifrado, CHAVES.privada.D, CHAVES.privada.N);
console.log("RSA Decifrado:", decifrado); // Esperado: "OLA"*/