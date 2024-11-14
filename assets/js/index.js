document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.testimonial-carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let cardWidth = 469 + 16; // Ancho de la tarjeta + espacio

    function updateCardWidth() {
        if (window.innerWidth <= 640) {
            cardWidth = carousel.clientWidth;
        } else {
            cardWidth = 469 + 16;
        }
    }

    function updateButtonStates() {
        prevBtn.disabled = carousel.scrollLeft <= 0;
        nextBtn.disabled = carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth;
        prevBtn.classList.toggle('opacity-50', prevBtn.disabled);
        nextBtn.classList.toggle('opacity-50', nextBtn.disabled);
    }

    prevBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
    });

    carousel.addEventListener('scroll', updateButtonStates);
    window.addEventListener('resize', () => {
        updateCardWidth();
        updateButtonStates();
    });

    // Inicializar estados de los botones y ancho de tarjeta
    updateCardWidth();
    updateButtonStates();
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