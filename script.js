// Seleciona TODOS os elementos que possuem a classe '.cartao'
const cartoes = document.querySelectorAll('.cartao');

// Adiciona o evento de clique individualmente para cada cartão da lista
cartoes.forEach((cartao) => {
    cartao.addEventListener('click', () => {
        cartao.classList.toggle('active');
    });
});