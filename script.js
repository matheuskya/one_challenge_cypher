crip = document.getElementsByClassName("crip")[0]
descrip = document.getElementsByClassName("descrip")[0]
output = document.getElementById("output")
input = document.getElementById("input")

function criptografar(texto) {
    const rules = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    return texto.replace(/[eioua]/g, match => rules[match]);
}

function descriptografar(texto) {
    const rules = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    return texto.replace(/enter|imes|ai|ober|ufat/g, match => rules[match]);
}

crip.addEventListener("click", () => {
    input_string = input.value

    crip_string = criptografar(input_string)

    output.innerHTML = crip_string;
});

descrip.addEventListener("click", () => {
    input_string = input.value

    desc_string = descriptografar(input_string)

    output.innerHTML = desc_string;
})

document.querySelector('.copy').addEventListener('click', () => {
    const outputText = document.getElementById('output').textContent;
    navigator.clipboard.writeText(outputText).then(() => {
        alert('Texto copiado para a área de transferência!');
    }).catch(err => {
        console.error('Erro ao copiar o texto: ', err);
    });
});