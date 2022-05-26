export function somar (a, b){
    let soma = a + b;
    return soma;
}

export function dobro (numero){
    return numero * 2;
}

export function temperatura (temp){
    let a = false
    if(temp > 38){
        a = true
    }

    return a;
}

export function tabuada (num) {
    let a = [11];
    for (let i = 0; i<=10; i++) {
        a[i] = num * i;
    }
    return a;
}

export function media (n1, n2, n3){
    return (n1 + n2 + n3) / 3;
}

export function corPrimaria (cor) {
    let a = false;

    if (cor=="amarelo" || cor == "azul" || cor == "vermelho") {
        a = true;
    }

    return a;
}

export function ingressoCinema (meia, inteira, diaSemana, nacionalidade) {
    let inteiras = inteira * 28.5;
    let meias = meia * 14.25;
    

    if(diaSemana.toLowerCase() == "quarta")
    {
        inteiras = inteira * 14.25
    }
    if(nacionalidade.toLowerCase() == "brasileira")
    {
        inteiras = inteira * 5;
        meias = meia * 5;
    }
    let soma = inteiras + meias;
    return soma;
}

export function FreqCaracter (texto, caracter){    

    let a = 0;

    for(let i = 0; i < texto.length; i++){
        if (texto.charAt(i) == caracter) {
            a++
        }
    }

    return a;
}

export function maiorNumero (array){
    let a = -2;

    for(let i = 0; i < array.length; i++) {
        if (a < array[i]) 
            a = array[i]
    }

    return a;
}
