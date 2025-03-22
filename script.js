// all sections and buttons
const sections = {
    flight: document.getElementById('flight'),
    hotel: document.getElementById('hotel'),
    car_rental: document.getElementById('car_rental'),
    explore: document.getElementById('explore'),
};

// all buttons
const buttons = {
    flight: document.getElementById('flights_button'),
    hotel: document.getElementById('hotel_button'),
    car_rental: document.getElementById('car_rental_button'),
    explore: document.getElementById('explore_button'),
};

// Function to show the selected section and hide others
function showSection(sectionId) {
    // Hide all sections and buttons
    for (let key in sections) {
        sections[key].style.display = 'none';
        buttons[key].style.display = 'none';
    }

    // Show the clicked section and button
    sections[sectionId].style.display = 'block';
    buttons[sectionId].style.display = 'block';
}

// Add event listeners to the buttons
document.querySelector('.flights_button').addEventListener('click', () => showSection('flight'));
document.querySelector('.hotels_button').addEventListener('click', () => showSection('hotel'));
document.querySelector('.car_rental_button').addEventListener('click', () => showSection('car_rental'));
document.querySelector('.explore_button').addEventListener('click', () => showSection('explore'));

// Show the flights section by default on load
window.onload = () => showSection('flight');



function showOffer(type) {
    // Get all offer sections
    const flightOffer = document.getElementById('flight_offer');
    const hotelOffer = document.getElementById('hotel_offer');
    const bankOffer = document.getElementById('bank_offer');
    const allOffer = document.getElementById('all_offer');

    // Hide all offers initially
    flightOffer.style.display = 'none';
    hotelOffer.style.display = 'none';
    if (bankOffer) bankOffer.style.display = 'none'; // Handle cases where bank_offer is not available
    if (allOffer) allOffer.style.display = 'none';

    // Show the selected offer
    if (type === 'flight_offer') {
        flightOffer.style.display = 'block';
    } else if (type === 'hotel_offer') {
        hotelOffer.style.display = 'block';
    } else if (type === 'bank_offer' && bankOffer) {
        bankOffer.style.display = 'block';
    } else if (type === 'all_offer' && allOffer) {
        flightOffer.style.display = 'block';
        hotelOffer.style.display = 'block';
        if (bankOffer) bankOffer.style.display = 'block';
    }
}