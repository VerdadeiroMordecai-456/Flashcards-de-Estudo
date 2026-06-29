// Seleciona TODOS os elementos que possuem a classe '.cartao'
const cartoes = document.querySelectorAll('.cartao');

// Passa por cada cartão da lista e adiciona o evento de clique individualmente
cartoes.forEach((cartao) => {
    cartao.addEventListener('click', () => {
        cartao.classList.toggle('active');
    });
});