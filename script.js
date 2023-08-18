//calculadora


const inputPorc = document.getElementById('resultado')
const finalResult = document.getElementById('resultado')
const calcular = document.getElementById('btn-calcular')
const limpar = document.getElementById('btn-limpar')


function calculadora() {
    document.getElementById('calculadora').style.display = "block";
}


function insert(num) {
    var numero = document.getElementById('resultado').innerHTML = resultado.value
    document.getElementById('resultado').innerHTML = resultado.value = numero + num
    limpar.addEventListener('click', function clean() {
        valorN1 = ""
        valorN2 = ""
        valorOp = ""
        document.getElementById('resultado').value.innerHTML = resultado.value = ""
    })
    exibirPonto()
}

function operacao(op) {
    let valorN1 = parseFloat(document.getElementById('resultado').value)
    let valorOp = op
    document.getElementById('resultado').value.innerHTML = resultado.value = ""



    calcular.addEventListener('click', function calcular() {
        let valorN2 = parseFloat(document.getElementById('resultado').value)
        if (valorOp === "+") {
            finalResult.value = finalResult.innerHTML = valorN1 + valorN2
            valorOp = ""
        } else if (valorOp === "*") {
            finalResult.value = finalResult.innerHTML = valorN1 * valorN2
            valorOp = ""
        } else if (valorOp === "/") {
            if (valorN2 == 0) {
                finalResult.value = finalResult.innerHTML = "Divisão inválida"
                valorOp = ""
            } else {
                finalResult.value = finalResult.innerHTML = valorN1 / valorN2
                valorOp = ""
            }
        } else if (valorOp === "-") {
            finalResult.value = finalResult.innerHTML = valorN1 - valorN2
            valorOp = ""
        }

    })
}


function porc() {
    let inputPorcResult = parseFloat(resultado.value) / 100;
    finalResult.innerHTML = finalResult.value = inputPorcResult
}

function back(){
    let apagarNumero = document.getElementById('resultado')
    apagarNumero.value = apagarNumero.value.substr(0, apagarNumero.value.length -1);
}





const exibirPonto = () => {
    let inputAddPonto = document.getElementById('resultado').value
    if(inputAddPonto.length  === 4 ){
        inputAddPonto.innerHTML = "."[1]
    }   // calcular salario inss
}

const salarioUsuario = document.getElementById('salario')
const inss = 0
let descontado = 0

function calcularInss(){
    if(salarioUsuario.value <= 1320){
        descontado = salarioUsuario.value - salarioUsuario.value * 0.075
        alert(`seu valor liquido foi ${descontado.toFixed(2)}`)
    }else if(salarioUsuario.value >= 1320.1 && salarioUsuario.value <= 2571.29){
        descontado = salarioUsuario.value - salarioUsuario.value * 0.09
       alert(`seu valor liquido foi ${descontado.toFixed(2)}`)
    }else if(salarioUsuario.value >= 2571.30 && salarioUsuario.value <= 3856.94){
         descontado = salarioUsuario.value - salarioUsuario.value * 0.12
       alert(`seu valor liquido foi ${descontado.toFixed(2)}`)
    }else if(salarioUsuario.value >=  3856.95 && salarioUsuario.value <= 7507.49){
        descontado = salarioUsuario.value - salarioUsuario.value * 0.14
       alert(`seu valor liquido foi ${descontado.toFixed(2)}`)
    }else{
        alert(`Não teve alterão, seu valor é ${descontado.toFixed(2)}`)
    }
}