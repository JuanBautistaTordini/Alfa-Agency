document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.testimonial-carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const cardWidth = 469 + 16; // Ancho de la tarjeta + espacio

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
    window.addEventListener('resize', updateButtonStates);

    // Inicializar estados de los botones
    updateButtonStates();
});

// Función para togglear la visibilidad de FAQs
function toggleFaq(faqNumber) {
    // Selecciona todos los ítems de FAQ
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach((item) => {
        const content = item.querySelector('p');
        const icon = item.querySelector('svg');

        // Verifica si el ítem actual es el que debe togglearse
        if (item.getAttribute('data-faq') === faqNumber.toString()) {
            content.classList.toggle('hidden'); // Alterna la visibilidad del ítem actual
            icon.classList.toggle('rotate-180');
            item.classList.toggle('expanded'); // Añade una clase para los elementos expandidos
        } else {
            content.classList.add('hidden'); // Oculta todos los demás
            icon.classList.remove('rotate-180');
            item.classList.remove('expanded'); // Elimina la clase expandida de otros ítems
        }
    });
}