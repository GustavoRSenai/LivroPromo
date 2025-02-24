
let lista = document.querySelectorAll('.item')

let b1 = document.getElementById('b1')
let b2 = document.getElementById('b2')
let b3 = document.getElementById('b3')

let ativo = 0

function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra,i) => {
        setTimeout(() => elemento.innerHTML += letra, 10 * i)
    });
    return;
}

const paragrafo1 = document.querySelector('.text1')
const paragrafo2 = document.querySelector('.text2')
const paragrafo3 = document.querySelector('.text3')

b1.onclick = () =>{
    let desativar = document.querySelector('.ativo')
    desativar.classList.remove('ativo')
    lista[0].classList.add('ativo')
    typeWriter(paragrafo1);
}
b2.onclick = () =>{
    let desativar = document.querySelector('.ativo')
    desativar.classList.remove('ativo')
    lista[1].classList.add('ativo')
    typeWriter(paragrafo2);

}
b3.onclick = () =>{
    let desativar = document.querySelector('.ativo')
    desativar.classList.remove('ativo')
    lista[2].classList.add('ativo')
    typeWriter(paragrafo3);
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


