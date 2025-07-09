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

        if (idade < 12 && resultado >= 18) {
            paragrafo.textContent = `Seu IMC é de: ${resultado.toFixed(2)} e você está com sobrepeso.`
        } else
            if (idade > 55 && resultado >= 25 && resultado <= 27) {
            
                paragrafo.textContent = `Seu IMC é de: ${resultado.toFixed(2)} e você está saudável.`
            } else {
                
                paragrafo.textContent = `Seu IMC é de: ${resultado.toFixed(2)}`
            }
     
        mostrarResultado.appendChild(paragrafo)
        
    }
    
    form.addEventListener('submit', calcularImc)
}


calculadoraImc();