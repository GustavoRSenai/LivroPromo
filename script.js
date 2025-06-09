
let lista = document.querySelectorAll('.item')

let b1 = document.getElementById('b1')
let b2 = document.getElementById('b2')
let b3 = document.getElementById('b3')

let ativo = 0

function typeWriter(elemento) {
    // Verifica se o texto já está sendo digitado (impede digitação múltipla)
    if (elemento.classList.contains('digitando')) {
        return; // Não faz nada se já estiver em andamento
    }

    // Armazena o texto original no atributo 'data-texto', caso não tenha sido armazenado antes
    if (!elemento.dataset.texto) {
        elemento.dataset.texto = elemento.innerHTML;
    }

    // Limpa o conteúdo atual do elemento
    elemento.innerHTML = '';
    elemento.classList.add('digitando'); // Adiciona a classe para indicar que a digitação está em andamento

    // Converte o texto original para um array de caracteres
    const textoArray = elemento.dataset.texto.split('');

    // Digita o texto letra por letra
    textoArray.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
            // Se for a última letra, remove a classe 'digitando' para permitir futuras interações
            if (i === textoArray.length - 1) {
                elemento.classList.remove('digitando');
            }
        }, 25 * i); // Controla o intervalo de digitação (25ms por letra)
    });
}


function botão(elemento){
    let desativar = document.querySelector('.ativo')
    desativar.classList.remove('ativo')
    lista[ativo].classList.add('ativo')
}

b1.onclick = () =>{
    ativo = 0
    botão(b1)
    typeWriter(lista[ativo])
}
b2.onclick = () =>{
    ativo = 1
    botão(b2)
    typeWriter(lista[ativo])
}
b3.onclick = () =>{
    ativo = 2
    botão(b3)
    typeWriter(lista[ativo])
}


let listalivros = document.querySelectorAll('.livros')
let contar = listalivros.length

let livroativo = 0

let next = document.getElementById('prox')
let prev = document.getElementById('ante')



next.onclick = () =>{
    let desativar = document.querySelector('.livroativo')
    desativar.classList.remove('livroativo')
    if(livroativo>=contar-1){
        livroativo=0;
    }else{
        livroativo=livroativo+1
    }
    listalivros[livroativo].classList.add('livroativo')
}

prev.onclick = () =>{
    let desativar = document.querySelector('.livroativo')
    desativar.classList.remove('livroativo')
    if(livroativo<=contar-2){
        livroativo=1;
    }else{
        livroativo=livroativo-1
    }
    listalivros[livroativo].classList.add('livroativo')
}



let curvados = document.querySelectorAll('.curvar');

curvados.forEach(function(container) {
    let letras = container.querySelectorAll('div');
    let numLetras = letras.length;

    // Grau base calculado: quanto mais letras, menor o grau
    let grauBase = -40 / numLetras;  // ajustável: quanto maior o numerador, maior a curvatura

    let deg = 0;
    letras.forEach(function(div) {
        div.style.transform = 'rotate(' + deg + 'deg)';
        deg += grauBase;
    });
});
let curvados2 = document.querySelectorAll('.curva');

curvados2.forEach(function(container) {
    let letras = container.querySelectorAll('div');
    let numLetras = letras.length;

    // Grau base calculado: quanto mais letras, menor o grau
    let grauBase = -40 / numLetras;  // ajustável: quanto maior o numerador, maior a curvatura

    let deg = -45;
    letras.forEach(function(div) {
        div.style.transform = 'rotate(' + deg + 'deg)';
        deg += grauBase;
    });
});
let curvados3 = document.querySelectorAll('.curv');

curvados3.forEach(function(container) {
    let letras = container.querySelectorAll('div');
    let numLetras = letras.length;

    // Grau base calculado: quanto maior o numerador, maior a curvatura
    let grauBase = -80 / numLetras;  // Positivo → curvatura para baixo

    let deg = 0;
    letras.forEach(function(div) {
        div.style.transform = 'rotate(' + -deg + 'deg)';
        deg += grauBase;
    });
});
