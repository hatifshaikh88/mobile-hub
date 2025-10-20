// Product Data Storage
// TO ADD A NEW PRODUCT: Copy a product object and modify its details
const productData = {
    // CHARGERS - COPY FROM HERE TO ADD NEW CHARGER
    'charger-001': {
        name: 'Fast Charger 20W',
        productId: '', // INSERT YOUR PRODUCT ID HERE
        originalPrice: '₹999',
        discountPrice: '₹599',
        images: [
            'https://via.placeholder.com/600x600?text=Charger+1+Image+1',
            'https://via.placeholder.com/600x600?text=Charger+1+Image+2',
            'https://via.placeholder.com/600x600?text=Charger+1+Image+3'
            // ADD MORE IMAGE URLS HERE BY COPYING THE LINE ABOVE
        ],
        description: [
            'Fast charging technology with 20W output',
            'Compatible with all smartphones',
            'Built-in safety protection',
            'Compact and portable design',
            'Durable construction'
            // ADD MORE DESCRIPTION POINTS BY COPYING THE LINE ABOVE
        ]
    },
    // TO HERE

    // COPY FROM HERE TO ADD NEW CHARGER
    'charger-002': {
        name: 'Quick Charge 3.0',
        productId: '', // INSERT YOUR PRODUCT ID HERE
        originalPrice: '₹1299',
        discountPrice: '₹799',
        images: [
            'https://via.placeholder.com/600x600?text=Charger+2+Image+1',
            'https://via.placeholder.com/600x600?text=Charger+2+Image+2'
        ],
        description: [
            'Quick Charge 3.0 technology',
            'Charges 4x faster than conventional charging',
            'Universal compatibility',
            'Premium quality materials'
        ]
    },
    // TO HERE

    // CABLES - COPY FROM HERE TO ADD NEW CABLE
    'cable-001': {
        name: 'USB-C Cable 1.5m',
        productId: '', // INSERT YOUR PRODUCT ID HERE
        originalPrice: '₹499',
        discountPrice: '₹299',
        images: [
            'https://via.placeholder.com/600x600?text=Cable+1+Image+1',
            'https://via.placeholder.com/600x600?text=Cable+1+Image+2',
            'https://via.placeholder.com/600x600?text=Cable+1+Image+3'
        ],
        description: [
            'Premium USB-C to USB-A cable',
            '1.5 meter length for flexibility',
            'Fast charging and data transfer',
            'Reinforced stress points',
            'Tangle-free design'
        ]
    },
    // TO HERE

    // COPY FROM HERE TO ADD NEW CABLE
    'cable-002': {
        name: 'Lightning Cable 2m',
        productId: '', // INSERT YOUR PRODUCT ID HERE
        originalPrice: '₹699',
        discountPrice: '₹449',
        images: [
            'https://via.placeholder.com/600x600?text=Cable+2+Image+1',
            'https://via.placeholder.com/600x600?text=Cable+2+Image+2'
        ],
        description: [
            'MFi certified Lightning cable',
            '2 meter extra long cable',
            'Compatible with all Lightning devices',
            'High-speed charging'
        ]
    },
    // TO HERE

    // EARPHONES - COPY FROM HERE TO ADD NEW EARPHONE
    'earphone-001': {
        name: 'Wireless Earbuds Pro',
        productId: '', // INSERT YOUR PRODUCT ID HERE
        originalPrice: '₹2999',
        discountPrice: '₹1999',
        images: [
            'https://via.placeholder.com/600x600?text=Earphone+1+Image+1',
            'https://via.placeholder.com/600x600?text=Earphone+1+Image+2',
            'https://via.placeholder.com/600x600?text=Earphone+1+Image+3',
            'https://via.placeholder.com/600x600?text=Earphone+1+Image+4'
        ],
        description: [
            'True wireless Bluetooth earbuds',
            'Active noise cancellation',
            'Premium sound quality',
            '24-hour battery life with case',
            'Touch controls',
            'IPX5 water resistance'
        ]
    },
    // TO HERE

    // COPY FROM HERE TO ADD NEW EARPHONE
    'earphone-002': {
        name: 'Wired Earphones HD',
        productId: '', // INSERT YOUR PRODUCT ID HERE
        originalPrice: '₹799',
        discountPrice: '₹499',
        images: [
            'https://via.placeholder.com/600x600?text=Earphone+2+Image+1',
            'https://via.placeholder.com/600x600?text=Earphone+2+Image+2'
        ],
        description: [
            'High-definition audio quality',
            'In-line microphone and controls',
            'Comfortable ear tips',
            'Universal 3.5mm jack'
        ]
    },
    // TO HERE

    // CASES - COPY FROM HERE TO ADD NEW CASE
    'case-001': {
        name: 'Silicone Phone Case',
        productId: '', // INSERT YOUR PRODUCT ID HERE
        originalPrice: '₹599',
        discountPrice: '₹349',
        images: [
            'https://via.placeholder.com/600x600?text=Case+1+Image+1',
            'https://via.placeholder.com/600x600?text=Case+1+Image+2',
            'https://via.placeholder.com/600x600?text=Case+1+Image+3'
        ],
        description: [
            'Premium silicone material',
            'Shock-absorbing protection',
            'Precise cutouts for all ports',
            'Raised edges for screen protection',
            'Multiple colors available'
        ]
    },
    // TO HERE

    // SCREEN GUARDS - COPY FROM HERE TO ADD NEW SCREEN GUARD
    'guard-001': {
        name: 'Tempered Glass Screen Guard',
        productId: '', // INSERT YOUR PRODUCT ID HERE
        originalPrice: '₹399',
        discountPrice: '₹249',
        images: [
            'https://via.placeholder.com/600x600?text=Guard+1+Image+1',
            'https://via.placeholder.com/600x600?text=Guard+1+Image+2'
        ],
        description: [
            '9H hardness tempered glass',
            'Crystal clear transparency',
            'Scratch resistant',
            'Easy bubble-free installation',
            'Oleophobic coating'
        ]
    },
    // TO HERE

    // POWER BANKS - COPY FROM HERE TO ADD NEW POWER BANK
    'powerbank-001': {
        name: '10000mAh Power Bank',
        productId: '', // INSERT YOUR PRODUCT ID HERE
        originalPrice: '₹1999',
        discountPrice: '₹1299',
        images: [
            'https://via.placeholder.com/600x600?text=PowerBank+1+Image+1',
            'https://via.placeholder.com/600x600?text=PowerBank+1+Image+2',
            'https://via.placeholder.com/600x600?text=PowerBank+1+Image+3'
        ],
        description: [
            '10000mAh high capacity battery',
            'Dual USB output ports',
            'Fast charging support',
            'LED battery indicator',
            'Compact and lightweight',
            'Multiple safety protections'
        ]
    }
    // TO HERE

    // TO ADD MORE PRODUCTS:
    // 1. Copy any product object above (from COPY FROM HERE to TO HERE)
    // 2. Give it a unique ID as the key (e.g., 'charger-003')
    // 3. Update all the product details
    // 4. Add as many images and description points as needed
    // 5. Don't forget to add a comma after the previous product object
};

// Navigation Functions
function navigateToProducts(category) {
    sessionStorage.setItem('selectedCategory', category);
    window.location.href = 'products.html';
}

function navigateToDetails(productId) {
    sessionStorage.setItem('selectedProduct', productId);
    window.location.href = 'details.html';
}

function goBack(page) {
    window.location.href = page;
}

function goBackToProducts() {
    window.location.href = 'products.html';
}

// Filter Products on Products Page
if (window.location.pathname.endsWith('products.html')) {
    const category = sessionStorage.getItem('selectedCategory');

    if (category) {
        // Update page title
        const categoryTitle = document.getElementById('categoryTitle');
        categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);

        // Filter products
        const allProducts = document.querySelectorAll('.product-card');
        allProducts.forEach(product => {
            if (!product.classList.contains(category)) {
                product.style.display = 'none';
            }
        });
    }
}

// Load Product Details on Details Page
if (window.location.pathname.endsWith('details.html')) {
    const productId = sessionStorage.getItem('selectedProduct');

    if (productId && productData[productId]) {
        loadProductDetails(productId);
    }
}

function loadProductDetails(productId) {
    const product = productData[productId];
    const container = document.getElementById('productDetails');

    let imagesHTML = '';
    product.images.forEach((img, index) => {
        imagesHTML += `<img src="${img}" alt="${product.name}" class="${index === 0 ? 'active' : ''}" data-index="${index}">`;
    });

    let descriptionHTML = '';
    product.description.forEach(point => {
        descriptionHTML += `<li>${point}</li>`;
    });

    const productIdDisplay = product.productId || 'PRODUCT ID TO BE ADDED';

    container.innerHTML = `
        <div class="product-details-grid">
            <div class="image-gallery">
                <div class="gallery-main" id="galleryMain">
                    ${imagesHTML}
                </div>
                <div class="gallery-controls">
                    <button class="gallery-btn" id="prevBtn" onclick="changeImage(-1)">← Previous</button>
                    <button class="gallery-btn" id="nextBtn" onclick="changeImage(1)">Next →</button>
                </div>
                <div class="image-counter" id="imageCounter">1 / ${product.images.length}</div>
            </div>

            <div class="details-info">
                <h2>${product.name}</h2>

                <div class="product-id">
                    Product ID: ${productIdDisplay}
                </div>

                <div class="price-section">
                    <span class="original-price">${product.originalPrice}</span>
                    <span class="discount-price">${product.discountPrice}</span>
                </div>

                <div class="description-section">
                    <h3>Product Features</h3>
                    <ul>
                        ${descriptionHTML}
                    </ul>
                </div>
            </div>
        </div>
    `;

    updateGalleryButtons();
}

let currentImageIndex = 0;

function changeImage(direction) {
    const images = document.querySelectorAll('#galleryMain img');
    const totalImages = images.length;

    images[currentImageIndex].classList.remove('active');

    currentImageIndex += direction;

    if (currentImageIndex >= totalImages) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = totalImages - 1;
    }

    images[currentImageIndex].classList.add('active');

    document.getElementById('imageCounter').textContent = `${currentImageIndex + 1} / ${totalImages}`;

    updateGalleryButtons();
}

function updateGalleryButtons() {
    const images = document.querySelectorAll('#galleryMain img');
    const totalImages = images.length;
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (totalImages <= 1) {
        if (prevBtn) prevBtn.disabled = true;
        if (nextBtn) nextBtn.disabled = true;
    } else {
        if (prevBtn) prevBtn.disabled = false;
        if (nextBtn) nextBtn.disabled = false;
    }
}
