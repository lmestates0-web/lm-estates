// ===== LM ESTATES - JAVASCRIPT =====

// Property Data
const properties = [
    {
        id: 1,
        type: 'penthouse',
        location: 'ZÜRICHBERG',
        title: 'Exklusives Penthouse mit Panoramablick',
        description: 'Luxuriöses Penthouse in absoluter Toplage mit atemberaubendem Blick über die Stadt und den See.',
        rooms: '5.5',
        area: '250',
        bathrooms: '3',
        price: 'CHF 4.500.000',
        badge: 'EXKLUSIV',
        bgColor: 'linear-gradient(135deg, #d4c4b0 0%, #a69885 100%)'
    },
    {
        id: 2,
        type: 'villa',
        location: 'KÜSNACHT',
        title: 'Herrschaftliche Villa am Zürichsee',
        description: 'Einzigartige Seeliegenschaft mit privatem Seezugang, grosszügigem Garten und Pool.',
        rooms: '8.5',
        area: '450',
        bathrooms: '5',
        price: 'CHF 12.900.000',
        badge: 'NEU',
        bgColor: 'linear-gradient(135deg, #c4b5a0 0%, #9b8774 100%)'
    },
    {
        id: 3,
        type: 'wohnung',
        location: 'SEEFELD',
        title: 'Elegante Altbauwohnung',
        description: 'Stilvolle Wohnung in charmanter Altbauliegenschaft mit modernem Komfort und Seenähe.',
        rooms: '4.5',
        area: '180',
        bathrooms: '2',
        price: 'CHF 2.850.000',
        badge: '',
        bgColor: 'linear-gradient(135deg, #b5a089 0%, #8b7355 100%)'
    },
    {
        id: 4,
        type: 'haus',
        location: 'ZOLLIKON',
        title: 'Modernes Einfamilienhaus',
        description: 'Zeitgemässe Architektur trifft auf höchsten Wohnkomfort in ruhiger, familienfreundlicher Umgebung.',
        rooms: '6.5',
        area: '280',
        bathrooms: '3',
        price: 'CHF 5.200.000',
        badge: '',
        bgColor: 'linear-gradient(135deg, #a69885 0%, #7a6654 100%)'
    },
    {
        id: 5,
        type: 'penthouse',
        location: 'ENGE',
        title: 'Sky Penthouse mit Dachterrasse',
        description: 'Atemberaubendes Penthouse mit grosszügiger Terrasse und Rundumsicht über Zürich.',
        rooms: '5.5',
        area: '220',
        bathrooms: '3',
        price: 'CHF 6.700.000',
        badge: 'TOP',
        bgColor: 'linear-gradient(135deg, #d4c4b0 0%, #a69885 100%)'
    },
    {
        id: 6,
        type: 'wohnung',
        location: 'HOTTINGEN',
        title: 'Stilvolle Stadtwohnung',
        description: 'Charmante Wohnung in beliebter Quartierlage mit optimaler Anbindung und Infrastruktur.',
        rooms: '3.5',
        area: '140',
        bathrooms: '2',
        price: 'CHF 1.980.000',
        badge: '',
        bgColor: 'linear-gradient(135deg, #b5a089 0%, #8b7355 100%)'
    },
    {
        id: 7,
        type: 'haus',
        location: 'HERRLIBERG',
        title: 'Traumvilla mit Seesicht',
        description: 'Exklusive Villa in privilegierter Lage mit unverbaubarem Blick auf den Zürichsee.',
        rooms: '7.5',
        area: '380',
        bathrooms: '4',
        price: 'CHF 9.500.000',
        badge: 'EXKLUSIV',
        bgColor: 'linear-gradient(135deg, #a69885 0%, #7a6654 100%)'
    },
    {
        id: 8,
        type: 'wohnung',
        location: 'RIESBACH',
        title: 'Moderne Seewohnung',
        description: 'Neuwertige Wohnung mit direktem Seezugang und grosszügiger Terrasse.',
        rooms: '5.5',
        area: '200',
        bathrooms: '3',
        price: 'CHF 4.200.000',
        badge: 'NEU',
        bgColor: 'linear-gradient(135deg, #b5a089 0%, #8b7355 100%)'
    }
];

let currentFilter = 'alle';

// Page Navigation
function showPage(pageName, filter = null) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const selectedPage = document.getElementById(pageName);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // If properties page, load properties with filter
    if (pageName === 'properties') {
        if (filter) {
            currentFilter = filter;
        }
        loadProperties();
        updateFilterTabs();
    }
}

// Load Properties
function loadProperties() {
    const grid = document.getElementById('propertyGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    const filtered = currentFilter === 'alle' 
        ? properties 
        : properties.filter(p => p.type === currentFilter);
    
    filtered.forEach((property, index) => {
        const card = document.createElement('div');
        card.className = 'property-card';
        card.style.animation = `fadeIn 0.6s ease-out ${index * 0.1}s backwards`;
        card.innerHTML = `
            <div class="property-image" style="background: ${property.bgColor}">
                ${property.badge ? `<div class="property-badge">${property.badge}</div>` : ''}
                IMMOBILIENFOTO
            </div>
            <div class="property-info">
                <div class="property-location">${property.location}</div>
                <h3 class="property-title">${property.title}</h3>
                <p class="property-description">${property.description}</p>
                <div class="property-details">
                    <div class="detail-item">
                        <div class="detail-label">ZIMMER</div>
                        <div class="detail-value">${property.rooms}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">FLÄCHE</div>
                        <div class="detail-value">${property.area} m²</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">BÄDER</div>
                        <div class="detail-value">${property.bathrooms}</div>
                    </div>
                </div>
                <div class="property-price">${property.price}</div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Filter Properties
function filterProperties(type) {
    currentFilter = type;
    loadProperties();
    updateFilterTabs();
}

// Update Filter Tabs Active State
function updateFilterTabs() {
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    const filterMap = {
        'alle': 0,
        'wohnung': 1,
        'haus': 2,
        'penthouse': 3,
        'villa': 4
    };
    
    const tabs = document.querySelectorAll('.filter-tab');
    if (tabs[filterMap[currentFilter]]) {
        tabs[filterMap[currentFilter]].classList.add('active');
    }
}

// Contact Form Submit
function submitContact(e) {
    e.preventDefault();
    alert('Vielen Dank für Ihre Anfrage! Wir melden uns innerhalb von 24 Stunden bei Ihnen.');
    e.target.reset();
}

// Sell Form Submit
function submitSellForm(e) {
    e.preventDefault();
    alert('Vielen Dank für Ihr Interesse! Wir kontaktieren Sie zeitnah für eine kostenlose Bewertung Ihrer Immobilie.');
    e.target.reset();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Load properties if on properties page
    if (document.getElementById('propertyGrid')) {
        loadProperties();
    }
    
    // Smooth scroll for anchor links
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
});