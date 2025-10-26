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