/* * FUNÇÃO FORNECIDA - NÃO É NECESSÁRIO MODIFICAR. */
function gerarChavesRSA_Didaticas(p, q) {
    if (p <= 1 || q <= 1) return null; 
    
    const N = p * q;
    const phi_N = (p - 1) * (q - 1);
    
    let E = 3;
    while (E < phi_N) {
        // Encontrar o primeiro E que é coprimo de phi_N
        if ((phi_N % E !== 0) && ((p - 1) % E !== 0) && ((q - 1) % E !== 0)) {
             // Otimização: A verificação (p-1)%E e (q-1)%E não é rigorosamente a do RSA, 
             // mas é didática e evita fatores óbvios para primos pequenos.
            break;
        }
        E++;
    }

    let D = 1;
    while (D < phi_N) {
        // Encontrar D tal que (D * E) % phi_N === 1
        if ((D * E) % phi_N === 1) {
            break;
        }
        D++;
    }
    
    return {
        publica: { E, N }, // Use E e N para CIFRAR
        privada: { D, N }  // Use D e N para DECIFRAR
    };
}


/**
 * Cifra a mensagem usando a chave pública (E, N).
 * @param {string} mensagem - O texto a ser cifrado.
 * @param {number} E - Expoente Público.
 * @param {number} N - Módulo.
 * @returns {number[]} Array de números (os códigos cifrados).
 */


function cifrarRSA_Didatico(mensagem, E, N) {
    let mensagemCifra = [];
    for(let i = 0; i < mensagem.length; i++){
        let codigo = mensagem.charCodeAt(i);
        let c = 1;
        for(let j=0; j<E; j++){
            c = (c * codigo) % N;
        }
        mensagemCifra.push(c);
    }
    return mensagemCifra;
}
//lógica por Gustavo Oliveira Francischini

/**
 * Decifra o array de números usando a chave privada (D, N).
 * @param {number[]} mensagemCifrada - Array de números cifrados.
 * @param {number} D - Expoente Privado.
 * @param {number} N - Módulo.
 * @returns {string} A string original.
 */


function decifrarRSA_Didatico(mensagemCifrada, D, N) {
    let texto = "";
    
    for(let i = 0; i < mensagemCifrada.length; i++){
        let c = mensagemCifrada[i];
        let m = 1;

        for(let j=0; j<D; j++){
            m = (m*c)%N;
        }

        texto += String.fromCharCode(m);
    }
    return texto;
}
//lógica por Cainã Sandes Batista