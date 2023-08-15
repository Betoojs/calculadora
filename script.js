//calculadora


const inputPorc = document.getElementById('resultado')
const finalResult = document.getElementById('resultado')
const calcular = document.getElementById('btn-calcular')
const limpar = document.getElementById('btn-limpar')


function calculadora() {
    document.getElementById('calculadora').style.display = "block";
}


function insert(num) {
    var numero = document.getElementById('resultado').innerHTML = resultado.value.replace(",", ".")
    document.getElementById('resultado').innerHTML = resultado.value = numero + num
}

function operacao(op) {
    let valorN1 = parseFloat(document.getElementById('resultado').value.replace(",", "."))
    let valorOp = op
    document.getElementById('resultado').value.innerHTML = resultado.value = ""



    calcular.addEventListener('click', function calcular() {
        let valorN2 = parseFloat(document.getElementById('resultado').value.replace(",", "."))
        if (valorOp === "+") {
            finalResult.value = finalResult.innerHTML = valorN1 + valorN2
        } else if (valorOp === "*") {
            finalResult.value = finalResult.innerHTML = valorN1 * valorN2
        } else if (valorOp === "/") {
            if (valorN2 == 0) {
                finalResult.value = finalResult.innerHTML = "Divisão inválida"
            } else {
                finalResult.value = finalResult.innerHTML = valorN1 / valorN2
            }
        } else if (valorOp === "-") {
            finalResult.value = finalResult.innerHTML = valorN1 - valorN2
        } else{
            finalResult.value = finalResult.innerHTML = "Digite um valor válido"
        }
        limpar.addEventListener('click', function clean() {
            valorN1 = 0
            valorN2 = 0
            document.getElementById('resultado').value.innerHTML = resultado.value = ""
        })

    })
}


function porc() {
    let inputPorcResult = parseFloat(resultado.value.replace(",", ".")) / 100;
    finalResult.innerHTML = finalResult.value = inputPorcResult
}


// calcular salario inss


const salarioUsuario = document.getElementById('salario')
const inss = 0


function calcularInss(){
    if(salarioUsuario.value <= 1.320){
        let desconto = salarioUsuario.value * 0.075
        alert(`seu valor liquido foi ${salarioUsuario.value - desconto}`)
    }else if(salarioUsuario.value >= 1.320,1 && salarioUsuario.value <= 2.571,29){
        parseFloat(salarioUsuario.value) * 0.09
       alert(`seu valor liquido foi ${salarioUsuario.value}`)
    }else if(salarioUsuario.value >= 2.571,30 && salarioUsuario.value <= 3.856,94){
        parseFloat(salarioUsuario.value) * 0.12
       alert(`seu valor liquido foi ${salarioUsuario.value}`)
    }else if(salarioUsuario.value >=  3.856,95 && salarioUsuario.value <= 7.507,49){
        parseFloat(salarioUsuario.value) * 0.14
       alert(`seu valor liquido foi ${salarioUsuario.value}`)
    }else{
        alert(`Não teve alterão, seu valor é ${salarioUsuario.value}`)
    }
}