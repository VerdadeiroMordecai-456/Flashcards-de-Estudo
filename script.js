// Seleciona o elemento do cartão na página
const cartao = document.querySelector('.cartao');

// Adiciona um evento de clique para ativar/desativar a animação
cartao.addEventListener('click', () => {
    cartao.classList.toggle('active');
});