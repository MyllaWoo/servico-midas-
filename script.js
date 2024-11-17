// Dark Mode
console.log("JavaScript carregado!");

const toggleButton = document.getElementById('toggle-dark-mode');
const icon = toggleButton.querySelector('i');

// Função para aplicar o modo escuro com base na preferência armazenada
function applyDarkModePreference() {
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
        icon.classList.replace('fa-moon', 'fa-sun');
        console.log("Modo escuro ativado:", document.body.classList.contains('dark-mode'));
    } else {
        document.body.classList.remove('dark-mode');
        icon.classList.replace('fa-sun', 'fa-moon');
        console.log("Modo claro ativado:", !document.body.classList.contains('dark-mode'));
    }
}

// Evento de clique para alternar entre claro e escuro
toggleButton.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('dark-mode', 'disabled');
    } else {
        document.body.classList.add('dark-mode');
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('dark-mode', 'enabled');
    }
    console.log("Modo alternado:", document.body.classList.contains('dark-mode'));
});

// Aplica a preferência ao carregar a página
applyDarkModePreference();

// Newsletter

document.getElementById("newsletterForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    alert(`Obrigado por se inscrever, ${email}!`);
    // Aqui você pode adicionar o código para enviar o e-mail para o servidor
});

//SlidShow do home
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');

let currentIndex = 0;

// Função para atualizar a posição do carrossel
function updateCarousel() {
    const imageWidth = images[0].clientWidth;
    carouselImages.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

// Evento para o botão "Próximo"
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
});

// Evento para o botão "Anterior"
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
});

// Ajusta o carrossel para o tamanho da tela inicial
window.addEventListener('resize', updateCarousel);

// Inicializa o carrossel na primeira imagem
updateCarousel();

// Função de compartilhamento de conteúdo
function compartilharPagina() {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            text: 'Confira este conteúdo interessante!',
            url: window.location.href
        }).then(() => {
            console.log('Compartilhamento bem-sucedido');
        }).catch((error) => {
            console.error('Erro ao compartilhar:', error);
        });
    } else {
        alert('A funcionalidade de compartilhamento não é suportada neste navegador.');
    }
}

  
  