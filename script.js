// Modal functionality
const modal = document.getElementById('bookingModal');
const bookingForm = document.getElementById('bookingForm');

// Open booking modal
function openBookingModal(service = '', petId = '') {
    modal.style.display = 'block';
    preventBodyScroll(true);
    
    // Populate locations from pets data
    populateLocationsFromPets();
    
    // Pre-select service if provided
    if (service) {
        document.getElementById('service').value = service;
        updateDurationOptions(); // Update duration options based on service
    }
    
    // If pet is provided, pre-select its location and then the pet
    if (petId && window.petsData) {
        const petInfo = window.getPetInfo(petId);
        if (petInfo) {
            // Set location first
            const locationSelect = document.getElementById('location');
            locationSelect.value = petInfo.location;
            
            // Trigger location change to populate pets
            updatePetsByLocation();
            
            // Then select the specific pet
            setTimeout(() => {
                document.getElementById('pet').value = petId;
                updatePetInfoDisplay();
            }, 100);
        }
    }
    
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('date').setAttribute('min', today);
}

// Close booking modal
function closeBookingModal() {
    modal.style.display = 'none';
    bookingForm.reset();
    preventBodyScroll(false);
    document.getElementById('petInfoDisplay').style.display = 'none';
    
    // Reset date and time fields visibility
    const dateFormGroup = document.getElementById('date')?.closest('.form-group');
    const timeFormGroup = document.getElementById('time')?.closest('.form-group');
    if (dateFormGroup) dateFormGroup.style.display = 'block';
    if (timeFormGroup) timeFormGroup.style.display = 'block';
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target === modal) {
        closeBookingModal();
    }
}

// Close modal with ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        closeBookingModal();
    }
});

// Prevent body scroll when modal is open
function preventBodyScroll(prevent) {
    if (prevent) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
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
            kit: document.querySelector('input[name="kit"]:checked')?.value || 'nenhum',
            observations: document.getElementById('observations').value
        };
        
        // Format service names
        const serviceNames = {
            'passear': 'Seja Tio Por Um Dia',
            'cuidar': 'Apadrinhe Um Pet',
            'brincar': 'Leve Um Pet Para Passear'
        };
        
        // Get pet name from petsData if available
        let petName = formData.pet;
        if (window.petsData && window.petsData[formData.pet]) {
            petName = window.petsData[formData.pet].name;
        }
        
        // Format date (only if date field is visible)
        let formattedDate = '';
        if (formData.service !== 'cuidar' && formData.date) {
            const dateObj = new Date(formData.date);
            formattedDate = dateObj.toLocaleDateString('pt-BR');
        }
        
        // Get location text from selected option
        const locationSelect = document.getElementById('location');
        const locationText = locationSelect.options[locationSelect.selectedIndex].text;
        
        // Get duration text with price
        const durationSelect = document.getElementById('duration');
        const durationText = durationSelect.options[durationSelect.selectedIndex].text;
        
        // Get kit information
        const kitNames = {
            'sobrevivencia': 'Kit de Sobrevivência - R$ 40,00',
            'babao': 'Kit Tio Babão - R$ 50,00',
            'vovo': 'Kit Criado com a Vovó - R$ 60,00',
            'nenhum': 'Sem kit'
        };
        const selectedKit = kitNames[formData.kit] || 'Sem kit';
        
        // In a real application, here you would send the data to a server
        console.log('Booking data:', formData);
        
        // Create URL parameters for the confirmation page
        const params = new URLSearchParams({
            service: serviceNames[formData.service],
            pet: petName,
            duration: durationText,
            location: locationText,
            kit: selectedKit,
            name: formData.name,
            email: formData.email
        });
        
        // Add date and time only if they exist (not for Apadrinhe um Pet)
        if (formData.service !== 'cuidar') {
            params.append('date', formattedDate);
            params.append('time', formData.time);
        }
        
        // Redirect to order completed page
        window.location.href = `order-completed.html?${params.toString()}`;
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

// Function to populate locations based on pets data
function populateLocationsFromPets() {
    const locationSelect = document.getElementById('location');
    if (!locationSelect) return;
    
    // Always clear and repopulate to avoid conflicts
    // Keep only the first option (placeholder)
    while (locationSelect.options.length > 1) {
        locationSelect.remove(1);
    }
    
    // Get unique locations from pets data
    if (window.getUniqueLocations) {
        const locations = window.getUniqueLocations();
        
        // Add locations as options
        locations.forEach(location => {
            const option = document.createElement('option');
            option.value = location.id;
            option.textContent = location.displayName;
            locationSelect.appendChild(option);
        });
    }
}

// Function to update pets based on selected location
function updatePetsByLocation() {
    const locationSelect = document.getElementById('location');
    const petSelect = document.getElementById('pet');
    const selectedLocation = locationSelect.value;
    
    // Clear current pet options
    petSelect.innerHTML = '';
    
    if (!selectedLocation) {
        petSelect.innerHTML = '<option value="">Primeiro selecione uma localidade</option>';
        document.getElementById('petInfoDisplay').style.display = 'none';
        return;
    }
    
    // Get pets for selected location
    const availablePets = window.getPetsByLocation(selectedLocation);
    
    if (availablePets.length === 0) {
        petSelect.innerHTML = '<option value="">Nenhum pet disponível nesta localidade</option>';
        document.getElementById('petInfoDisplay').style.display = 'none';
        return;
    }
    
    // Add default option
    petSelect.innerHTML = '<option value="">Selecione um pet</option>';
    
    // Add pets for this location
    availablePets.forEach(pet => {
        const option = document.createElement('option');
        option.value = pet.id;
        option.textContent = `${pet.name} (${pet.gender}, ${pet.age})`;
        petSelect.appendChild(option);
    });
}

// Function to update pet info display
function updatePetInfoDisplay() {
    const petSelect = document.getElementById('pet');
    const selectedPetId = petSelect.value;
    const petInfoDisplay = document.getElementById('petInfoDisplay');
    
    if (!selectedPetId || !window.petsData) {
        petInfoDisplay.style.display = 'none';
        return;
    }
    
    const petInfo = window.getPetInfo(selectedPetId);
    if (petInfo) {
        document.getElementById('petInfoImage').src = petInfo.image;
        document.getElementById('petInfoImage').alt = petInfo.name;
        document.getElementById('petInfoName').textContent = petInfo.name;
        document.getElementById('petInfoDetails').textContent = `${petInfo.gender} • ${petInfo.age} • ${petInfo.description}`;
        document.getElementById('petInfoShelter').textContent = `🏠 ${petInfo.shelter} - ${petInfo.region}, ${petInfo.city}`;
        petInfoDisplay.style.display = 'block';
    } else {
        petInfoDisplay.style.display = 'none';
    }
}

// Function to update duration options based on selected service
function updateDurationOptions() {
    const serviceSelect = document.getElementById('service');
    const durationSelect = document.getElementById('duration');
    const selectedService = serviceSelect.value;
    
    // Clear current options
    durationSelect.innerHTML = '';
    
    // Toggle date and time fields visibility
    toggleDateTimeFields(selectedService);
    
    if (!selectedService) {
        durationSelect.innerHTML = '<option value="">Primeiro selecione um serviço</option>';
        return;
    }
    
    // Define duration options based on service
    if (selectedService === 'cuidar') {
        // For "Apadrinhe Um Pet" service - only show monthly sponsorship
        const option = document.createElement('option');
        option.value = 'apadrinhamento';
        option.textContent = 'Apadrinhamento - R$ 100,00/mês';
        durationSelect.appendChild(option);
    } else {
        // For other services - show hourly options
        const hourlyOptions = [
            { value: '2', text: '2 horas - R$ 15,00' },
            { value: '6', text: '6 horas - R$ 30,00' },
            { value: '12', text: '12 horas - R$ 50,00' },
            { value: '24', text: '24 horas - R$ 80,00' }
        ];
        
        // Add default option
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = 'Selecione a duração';
        durationSelect.appendChild(defaultOption);
        
        // Add hourly options
        hourlyOptions.forEach(opt => {
            const option = document.createElement('option');
            option.value = opt.value;
            option.textContent = opt.text;
            durationSelect.appendChild(option);
        });
    }
}

// Function to toggle date and time fields visibility
function toggleDateTimeFields(selectedService) {
    const dateField = document.getElementById('date');
    const timeField = document.getElementById('time');
    const dateFormGroup = dateField ? dateField.closest('.form-group') : null;
    const timeFormGroup = timeField ? timeField.closest('.form-group') : null;
    
    if (selectedService === 'cuidar') {
        // Hide date and time fields for "Apadrinhe Um Pet"
        if (dateFormGroup) {
            dateFormGroup.style.display = 'none';
            dateField.removeAttribute('required');
        }
        if (timeFormGroup) {
            timeFormGroup.style.display = 'none';
            timeField.removeAttribute('required');
        }
    } else {
        // Show date and time fields for other services
        if (dateFormGroup) {
            dateFormGroup.style.display = 'block';
            dateField.setAttribute('required', 'required');
        }
        if (timeFormGroup) {
            timeFormGroup.style.display = 'block';
            timeField.setAttribute('required', 'required');
        }
    }
}

// Add event listeners for location and pet changes
document.addEventListener('DOMContentLoaded', () => {
    const locationSelect = document.getElementById('location');
    const petSelect = document.getElementById('pet');
    const serviceSelect = document.getElementById('service');
    
    if (locationSelect) {
        locationSelect.addEventListener('change', updatePetsByLocation);
    }
    
    if (petSelect) {
        petSelect.addEventListener('change', updatePetInfoDisplay);
    }
    
    if (serviceSelect) {
        serviceSelect.addEventListener('change', updateDurationOptions);
    }
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
