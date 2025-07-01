let foto = document.querySelector('.foto');
let like = document.querySelector('.like')
let comentar = document.querySelector('.comentar')
let fomulario = document.querySelector('.formulario')
let txtComentario = document.querySelector('#txtComentario')
let btnComentar = document.querySelector('#btnComentar')
let comentarios = document.querySelector('.comentarios')

// -- Curtir foto --
foto.addEventListener('dblclick', curtirFoto) 
function curtirFoto() {
    like.src = 'icones/coracao_red.png';
}

like.addEventListener('click', curtir)
function curtir() {
    if (like.src.includes('coracao_red.png')) {
        like.src = 'icones/coracao.png';
    } else {
        like.src = 'icones/coracao_red.png';
    }
}

// -- exibir formulário --
comentar.addEventListener('click', exibirComentario)
function exibirComentario() {
    if(txtComentario.style.visibility == 'visible' &&
        btnComentar.style.visibility == 'visible') {
            txtComentario.style.visibility = 'hidden'
            btnComentar.style.visibility = 'hidden'
        } else {
            txtComentario.style.visibility = 'visible'
            btnComentar.style.visibility = 'visible'
        }
}

// -- exibir comentários --
btnComentar.addEventListener('click', enviarComentario)
function enviarComentario() {
    let comentario = txtComentario.value
    comentarios.innerHTML +=
    `<div class="comentario">
        <span>SeuNome</span>
        <p>${comentario}</p>
    </div>`
    txtComentario.value = ''
}