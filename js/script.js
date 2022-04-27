let tela = document.querySelector('main');
let cardDark = document.querySelector('.card');

let btnDark = document.querySelector('.dark');
let btnLight = document.querySelector('.light');

btnDark.addEventListener('click', modoDark);
btnLight.addEventListener('click', modoLight);

function modoDark(){
    console.log('Modo Dark');
    tela.classList.add('darkMode');
    cardDark.classList.add('cardDark');
    btnDark.style.display = 'none';
    btnLight.style.display = 'block'
}

function modoLight(){
    console.log('Modo Light');
    tela.classList.remove('darkMode');
    cardDark.classList.remove('cardDark');
    btnDark.style.display = 'block';
    btnLight.style.display = 'none';
}