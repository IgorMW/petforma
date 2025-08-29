// Modal functionality
const modal = document.getElementById('bookingModal');
const bookingForm = document.getElementById('bookingForm');

// Open booking modal
function openBookingModal(service = '', petName = '') {
    modal.style.display = 'block';
    
    // Pre-select service if provided
    if (service) {
        document.getElementById('service').value = service;
    }
    
    // Pre-select pet if provided
    if (petName) {
        const petSelect = document.getElementById('pet');
        const petOptions = petSelect.options;
        for (let i = 0; i < petOptions.length; i++) {
            if (petOptions[i].text.toLowerCase().includes(petName.toLowerCase())) {
                petSelect.value = petOptions[i].value;
                break;
            }
        }
    }
    
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('date').setAttribute('min', today);
    
    // Populate locations if not already done
    if (typeof populateLocationSelect === 'function') {
        populateLocationSelect();
    }
}

// Close booking modal
function closeBookingModal() {
    modal.style.display = 'none';
    bookingForm.reset();
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target === modal) {
        closeBookingModal();
    }
}

// Handle form submission
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Collect form data
        const formData = {
            service: document.getElementById('service').value,
            pet: document.getElementById('pet').value,
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            duration: document.getElementById('duration').value,
            location: document.getElementById('location').value,
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            observations: document.getElementById('observations').value
        };
        
        // Format service names
        const serviceNames = {
            'passear': 'Passeio',
            'cuidar': 'Cuidados',
            'brincar': 'Brincadeira'
        };
        
        // Format pet names
        const petNames = {
            'persa': 'Persa',
            'toddy': 'Toddy',
            'nina': 'Nina',
            'luna': 'Luna',
            'thor': 'Thor',
            'mel': 'Mel',
            'max': 'Max',
            'dalla': 'Dalla'
        };
        
        // Format date
        const dateObj = new Date(formData.date);
        const formattedDate = dateObj.toLocaleDateString('pt-BR');
        
        // Get location text from selected option
        const locationSelect = document.getElementById('location');
        const locationText = locationSelect.options[locationSelect.selectedIndex].text;
        
        // Create confirmation message
        const confirmMessage = `
            🎉 Agendamento Confirmado!
            
            Serviço: ${serviceNames[formData.service]}
            Pet: ${petNames[formData.pet]}
            Data: ${formattedDate}
            Horário: ${formData.time}
            Duração: ${formData.duration} minutos
            Localidade: ${locationText}
            
            Nome: ${formData.name}
            Email: ${formData.email}
            Telefone: ${formData.phone}
            
            ${formData.observations ? 'Observações: ' + formData.observations : ''}
            
            Você receberá um email de confirmação em breve!
        `;
        
        alert(confirmMessage);
        
        // In a real application, here you would send the data to a server
        console.log('Booking data:', formData);
        
        // Close modal and reset form
        closeBookingModal();
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach(card => {
    observer.observe(card);
});

// Observe pet cards
document.querySelectorAll('.pet-card').forEach(card => {
    observer.observe(card);
});

// Add hover effect to logo
const logo = document.querySelector('.logo');
if (logo) {
    logo.addEventListener('click', () => {
        window.location.href = '#home';
    });
}

// Form validation enhancements
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        // Format phone number as user types
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 0) {
            if (value.length <= 2) {
                value = `(${value}`;
            } else if (value.length <= 6) {
                value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
            } else if (value.length <= 10) {
                value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`;
            } else {
                value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
            }
        }
        e.target.value = value;
    });
}

// Add loading animation when page loads
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Pet availability status (mock data - in production this would come from a database)
const petAvailability = {
    persa: { available: true, nextAvailable: '2025-01-15' },
    toddy: { available: true, nextAvailable: '2025-01-16' },
    nina: { available: true, nextAvailable: '2025-09-20' },
    luna: { available: true, nextAvailable: '2025-01-17' },
    thor: { available: true, nextAvailable: '2025-01-18' },
    mel: { available: true, nextAvailable: '2025-01-19' },
    max: { available: true, nextAvailable: '2025-01-20' },
    dalla: { available: true, nextAvailable: '2025-01-21' }
};

// Update pet cards with availability
document.addEventListener('DOMContentLoaded', () => {
    const petCards = document.querySelectorAll('.pet-card');
    petCards.forEach(card => {
        const petName = card.querySelector('h3').textContent.toLowerCase();
        if (petAvailability[petName]) {
            const button = card.querySelector('button');
            if (!petAvailability[petName].available) {
                button.textContent = 'Indisponível';
                button.disabled = true;
                button.style.opacity = '0.5';
                button.style.cursor = 'not-allowed';
                
                // Add availability notice
                const notice = document.createElement('p');
                notice.style.color = 'var(--primary-color)';
                notice.style.fontSize = '0.8rem';
                notice.style.marginTop = '0.5rem';
                notice.textContent = `Próxima disponibilidade: ${new Date(petAvailability[petName].nextAvailable).toLocaleDateString('pt-BR')}`;
                card.querySelector('.pet-info').appendChild(notice);
            }
        }
    });
});
