document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const carousel = document.querySelector('.testimonial-carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const cards = document.querySelectorAll('.testimonial-card');

    // Configurar el ancho de las tarjetas para diferentes pantallas
    function setCardWidths() {
        const viewportWidth = window.innerWidth;
        cards.forEach(card => {
            if (viewportWidth < 768) { // móvil
                card.style.width = 'calc(100vw - 2rem)';
            } else { // desktop
                card.style.width = 'calc(33vw - 2rem)';
            }
        });
    }

    // Llamar inicialmente y en cada cambio de tamaño de ventana
    setCardWidths();
    window.addEventListener('resize', setCardWidths);

    // Función para obtener el ancho actual de una tarjeta
    function getCardWidth() {
        const card = cards[0];
        const cardStyle = window.getComputedStyle(card);
        const cardWidth = card.offsetWidth +
            parseInt(cardStyle.marginLeft) +
            parseInt(cardStyle.marginRight);
        return cardWidth;
    }

    // Función para mover al siguiente grupo
    function slideNext() {
        const cardWidth = getCardWidth();
        const currentPosition = carousel.scrollLeft;
        const nextPosition = currentPosition + cardWidth;
        
        carousel.scrollTo({
            left: nextPosition,
            behavior: 'smooth'
        });
    }

    // Función para mover al grupo anterior
    function slidePrev() {
        const cardWidth = getCardWidth();
        const currentPosition = carousel.scrollLeft;
        const prevPosition = currentPosition - cardWidth;
        
        carousel.scrollTo({
            left: prevPosition,
            behavior: 'smooth'
        });
    }

    // Función para verificar si hay más contenido para desplazar
    function updateButtonVisibility() {
        const isAtStart = carousel.scrollLeft <= 0;
        const isAtEnd = carousel.scrollLeft >= (carousel.scrollWidth - carousel.clientWidth - 10);

        prevBtn.style.opacity = isAtStart ? '0.5' : '1';
        nextBtn.style.opacity = isAtEnd ? '0.5' : '1';
        prevBtn.disabled = isAtStart;
        nextBtn.disabled = isAtEnd;
    }

    // Event Listeners
    prevBtn.addEventListener('click', slidePrev);
    nextBtn.addEventListener('click', slideNext);
    carousel.addEventListener('scroll', updateButtonVisibility);

    // Gestión táctil
    let startX;
    let scrollLeft;

    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('touchmove', (e) => {
        if (!startX) return;
        e.preventDefault();
        const x = e.touches[0].pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
    });

    carousel.addEventListener('touchend', () => {
        startX = null;
    });

    // Inicializar estado de los botones
    updateButtonVisibility();
});

// Función para togglear la visibilidad de FAQs
function toggleFaq(faqNumber) {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach((item, index) => {
        const content = item.querySelector('p');
        const icon = item.querySelector('svg');

        if (index + 1 === faqNumber) {
            content.classList.toggle('hidden');
            icon.classList.toggle('rotate-180');
            item.classList.toggle('expanded');
        } else {
            content.classList.add('hidden');
            icon.classList.remove('rotate-180');
            item.classList.remove('expanded');
        }
    });
}