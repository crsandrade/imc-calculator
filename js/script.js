function calculadoraImc() {

    const form = document.querySelector('#formulario')
    const mostrarResultado = document.querySelector('.mostrarResultado')
    let contador = 1;

    function calcularImc(event) {
        event.preventDefault();

        const peso = document.querySelector('#weight').value
        const altura = document.querySelector('#height').value
        const idade = document.querySelector('#age').value

        let resultado = peso / (altura ** 2)

        let pesoIdeal = 24 * (altura ** 2)

        const paragrafo = document.createElement('p')

        let mensagem = ''
        let colorAlert;

        if (!peso || !altura || !idade) {
            mostrarResultado.innerHTML = ``
            paragrafo.textContent = `Dados Incorretos.[${contador++}]`
            mostrarResultado.appendChild(paragrafo)
            return;
        }
    
        if (resultado < 18.5) {
            mensagem = `Seu IMC é ${resultado.toFixed(1)} e você está abaixo do peso.`
            colorAlert = 'rgb(243, 43, 43, 0.5)'
        } else if (resultado >= 18.5 && resultado <= 24.9) {
            mensagem = `Seu IMC é ${resultado.toFixed(1)} e você está com peso normal.`
            colorAlert = 'rgb(0, 120, 0, 0.5)'
        } else if (resultado >= 25 && resultado <= 29.9) {
            mensagem = `Seu IMC é ${resultado.toFixed(1)} e você está com sobrepeso.`
            colorAlert = 'rgba(53, 152, 218, 0.5)'
        } else if (resultado >= 30 && resultado <= 34.9) {
            mensagem = `Seu IMC é ${resultado.toFixed(1)} e você está com Obesidade grau 1.`
            colorAlert = 'rgb(200, 50, 50, 0.5)'
        } else if (resultado >= 35 && resultado <= 39.9) {
            mensagem = `Seu IMC é ${resultado.toFixed(1)} e você está com Obesidade grau 2.`
            colorAlert = 'rgb(147, 18, 18, 0.5)'
        } else {
            mensagem = `Seu IMC é ${resultado.toFixed(1)} e você está com Obesidade grau 3.`
            colorAlert = 'rgb(97, 1, 1, 0.5)'
        }

        if (idade < 12 && resultado >= 18) {
            mensagem += ` Porém como você possui menos de 12 anos, o IMC não é tão confiável.`
        } else if (idade > 55 && resultado >= 25 && resultado <= 27) {
            mensagem += ` Entretanto, para sua idade o valor é considerado saudável.`
        }

        mensagem += ` O peso ideal para a sua altura é: ${pesoIdeal.toFixed(1)}kg`

        paragrafo.textContent = mensagem;

        mostrarResultado.style.backgroundColor = colorAlert;
        mostrarResultado.innerHTML = ` `
        mostrarResultado.appendChild(paragrafo)

    }
    form.addEventListener('submit', calcularImc)
}

calculadoraImc();