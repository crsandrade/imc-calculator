// PESO / ALTURA X ALTURA

function calculadoraImc() {


    const form = document.querySelector('#formulario')
    const mostrarResultado = document.querySelector('.mostrarResultado')

    function calcularImc(event) {
        event.preventDefault();

        const peso = document.querySelector('#weight').value
        const altura = document.querySelector('#height').value
        const idade = document.querySelector('#age').value
        const genero = document.querySelector('#gender').value

        let resultado = peso / (altura ** 2)

        const paragrafo = document.createElement('p')

        let mensagem = ''

        if (resultado < 18.5) {
            mensagem = `Seu IMC é ${resultado.toFixed(1)} e você está abaixo do peso.`
        } else if (resultado >= 18.5 && resultado <= 24.9) {
            mensagem = `Seu IMC é ${resultado.toFixed(1)} e você está com peso normal.`
        } else if (resultado >= 25 && resultado <= 29.9) {
            mensagem = `Seu IMC é ${resultado.toFixed(1)} e você está com sobrepeso.`
        } else if (resultado >= 30 && resultado <= 34.9) {
            mensagem = `Seu IMC é ${resultado.toFixed(1)} e você está com Obesidade grau 1.`
        } else if (resultado >= 35 && resultado <= 39.9) {
            mensagem = `Seu IMC é ${resultado.toFixed(1)} e você está com Obesidade grau 2.`
        } else {
           mensagem = `Seu IMC é ${resultado.toFixed(1)} e você está com Obesidade grau 3.`
        }

        if (idade < 12 && resultado >= 18) {
            mensagem += ` Porém como você possui menos de 12 anos, o IMC não é tão confiável.`
        } else if (idade > 55 && resultado >= 25 && resultado <= 27) {
            mensagem += ` Entretanto, para sua idade o valor é considerado saudável.`
        }
        paragrafo.textContent = mensagem;

        mostrarResultado.appendChild(paragrafo)
    }

    form.addEventListener('submit', calcularImc)
}


calculadoraImc();