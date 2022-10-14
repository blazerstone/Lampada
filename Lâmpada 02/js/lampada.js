
/* Variaveis */

const button = document.getElementById('button');
const lampada = document.getElementById('lampada');
const estado = document.getElementById('estadoLampada');

/* Verificando se a Lâmpada já está quebrada */

function lampadaEstaQuebrada() {
    return lampada.src.indexOf('lampada_quebrada') > -1;
}

/* Verificando se a Lâmpada já está ligada */

function lampadaEstaLigada() {
    return lampada.src.indexOf('lampada_ligada') > -1;
}

/* Function básicas da Lâmpada */

function ligarLampada() {
    if (!lampadaEstaQuebrada()) {
        lampada.src = './img/lampada_ligada.png';
        button.textContent = 'Desligar';
        estado.textContent = 'Ligada';
    }
}

function desligarLampada() {
    if (!lampadaEstaQuebrada()) {
        lampada.src = './img/lampada_desligada.png';
        button.textContent = 'Ligar';
        estado.textContent = 'Desligada';
    }
}

function quebrarLampada() {
    lampada.src = './img/lampada_quebrada.png';
    button.textContent = 'Nova';
    estado.textContent = 'Quebrada';
}

function novaLampada() {
    lampada.src = './img/lampada_desligada.png';
    button.textContent = 'Ligar';
    estado.textContent = 'Nova';
}

/* Function principal da Lâmpada */

function eventoLampada() {
    if (!lampadaEstaQuebrada()) {
        if (!lampadaEstaLigada()) {
            ligarLampada();
        } else if (lampadaEstaLigada()) {
            desligarLampada();
        }
    } else if (lampadaEstaQuebrada()) {
        novaLampada();
    }
}

/* Redirecionando o Evento do Button */

button.addEventListener('click', eventoLampada);

/* Redirecionando os Eventos da Lâmpada */

lampada.addEventListener('mouseover', ligarLampada);
lampada.addEventListener('mouseleave', desligarLampada);
lampada.addEventListener('dblclick', quebrarLampada);
