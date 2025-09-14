// Efecto de luces pasando como en un tren
function createLightBeams() {
    const windowEffect = document.querySelector('.window-effect');
    
    setInterval(() => {
        if (Math.random() > 0.7) { // Solo crear un haz de luz ocasionalmente
            const lightBeam = document.createElement('div');
            lightBeam.classList.add('light-beam');
            
            // Posición aleatoria
            const randomLeft = Math.random() * 100;
            lightBeam.style.left = `${randomLeft}%`;
            lightBeam.style.top = `${Math.random() * 20}%`;
            
            // Rotación aleatoria
            const randomRotation = Math.random() * 10 - 5;
            lightBeam.style.transform = `rotate(${randomRotation}deg)`;
            
            windowEffect.appendChild(lightBeam);
            
            // Animación
            lightBeam.animate([
                { opacity: 0, transform: `translateY(-100px) rotate(${randomRotation}deg)` },
                { opacity: 0.7, transform: `translateY(0) rotate(${randomRotation}deg)` },
                { opacity: 0, transform: `translateY(100px) rotate(${randomRotation}deg)` }
            ], {
                duration: 1000 + Math.random() * 1000,
                easing: 'ease-out'
            });
            
            // Eliminar después de la animación
            setTimeout(() => {
                lightBeam.remove();
            }, 2000);
        }
    }, 1000);
}

// Navegación suave
function setupSmoothScrolling() {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: 'smooth'
            });
        });
    });
}

// Cargar más poemas
function setupLoadMoreButton() {
    const loadMoreBtn = document.getElementById('load-more');
    const poemsContainer = document.getElementById('poemas');
    
    const morePoems = [
        {
            title: "Andén Solitario",
            content: `Esperé en el andén 
                    tu tren que nunca llegó 
                    con el billete de vuelta 
                    a nuestro primer encuentro.
                    
                    La lluvia borró los horarios 
                    y el frío se instaló 
                    en los bancos vacíos 
                    de la estación.`
        },
        {
            title: "Velocidad",
            content: `Aceleramos tanto 
                    que el paisaje se volvió 
                    una mancha de colores 
                    sin forma ni sentido.
                    
                    Quizás deberíamos 
                    bajar la velocidad 
                    para recuperar 
                    los detalles perdidos.`
        },
        {
            title: "Última Parada",
            content: `Todos bajamos aquí 
                    aunque no sea nuestro destino 
                    porque el viaje continúa 
                    por otros medios.
                    
                    El tren sigue su camino 
                    vacío pero completo 
                    habiendo cumplido 
                    su propósito.`
        }
    ];
    
    loadMoreBtn.addEventListener('click', () => {
        morePoems.forEach(poemData => {
            const poemElement = document.createElement('div');
            poemElement.classList.add('poem');
            
            poemElement.innerHTML = `
                <h3 class="poem-title">${poemData.title}</h3>
                <div class="poem-content">${poemData.content}</div>
            `;
            
            poemsContainer.insertBefore(poemElement, loadMoreBtn);
        });
        
        // Ocultar el botón después de cargar todos los poemas
        loadMoreBtn.style.display = 'none';
    });
}

// Efecto de escritura en el título
function typeWriterEffect() {
    const title = document.querySelector('h1');
    const originalText = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const typing = setInterval(() => {
        if (i < originalText.length) {
            title.textContent += originalText.charAt(i);
            i++;
        } else {
            clearInterval(typing);
        }
    }, 100);
}

// Validación del formulario
function setupFormValidation() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nameInput = this.querySelector('input[type="text"]');
        const emailInput = this.querySelector('input[type="email"]');
        const messageInput = this.querySelector('textarea');
        
        // Validación simple
        if (nameInput.value.trim() === '') {
            alert('Por favor, ingresa tu nombre');
            return;
        }
        
        if (!emailInput.value.includes('@')) {
            alert('Por favor, ingresa un email válido');
            return;
        }
        
        if (messageInput.value.trim() === '') {
            alert('Por favor, escribe un mensaje');
            return;
        }
        
        // Simular envío
        alert('Gracias por tu mensaje. Será leído en la próxima estación.');
        this.reset();
    });
}

// Inicializar todo cuando el documento esté listo
document.addEventListener('DOMContentLoaded', function() {
    createLightBeams();
    setupSmoothScrolling();
    setupLoadMoreButton();
    typeWriterEffect();
    setupFormValidation();
});