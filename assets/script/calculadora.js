function insert (num) {
    if(num == 'CE'){
        document.getElementById('resultado').value = "";
    }
    else if(num == 'C'){
        let result = document.getElementById('resultado').value;
        resultado.value = result.substring(0, result.length - 1);

    }else{
        console.log("cheguei aqui");
        let numero = document.getElementById('resultado').value;
        document.getElementById('resultado').value = numero + num;
    }
}

function calcular() {
    let resultado = document.getElementById('resultado').value;
    let calcular = eval(resultado);
    document.getElementById('resultado').value = calcular;
}