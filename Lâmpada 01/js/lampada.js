
/* Variaveis */

const ligar = document.getElementById('buttonLigar');
const desligar = document.getElementById('buttonDesligar');
const lampada = document.getElementById('lampada');
const estado = document.getElementById('estadoLampada');

/* Verificando se a Lâmpada já está quebrada */

function lampadaEstaQuebrada() {
    return lampada.src.indexOf ('lampada_quebrada') > -1;
}

/* Function da Lâmpada */

function ligarLampada() {
    if (!lampadaEstaQuebrada()) {
        lampada.src = './img/lampada_ligada.png';
        estado.textContent = 'Ligada';
    }
}

function desligarLampada() {
    if (!lampadaEstaQuebrada()) {
        lampada.src = './img/lampada_desligada.png';
        estado.textContent = 'Desligada';
    }
}

function quebrarLampada() {
    lampada.src = './img/lampada_quebrada.png';
    estado.textContent = 'Quebrada';
}

/* Redirecionando os Eventos dos Button */

ligar.addEventListener('click', ligarLampada);
desligar.addEventListener('click', desligarLampada);

/* Redirecionando os Eventos da Lâmpada */

lampada.addEventListener('mouseover', ligarLampada);
lampada.addEventListener('mouseleave', desligarLampada);
lampada.addEventListener('dblclick', quebrarLampada);
