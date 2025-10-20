================================
MOBILE ACCESSORIES WEBSITE
================================

SETUP INSTRUCTIONS:
------------------
1. Extract all files to a folder on your computer
2. Open "index.html" in any web browser (Chrome, Firefox, Edge, Safari)
3. The website will work on Windows, Android, iOS, and all platforms

FILES INCLUDED:
--------------
- index.html       : Homepage with product categories
- products.html    : Products listing page
- details.html     : Product details page
- styles.css       : All styling (green & white theme)
- script.js        : All functionality
- README.txt       : This file

HOW TO CUSTOMIZE:
----------------

FOOTER INFORMATION:
1. Open index.html, products.html, and details.html in a text editor
2. Find: YOUR_GOOGLE_MAPS_LINK_HERE
   Replace with: Your actual Google Maps location link
3. Find: YOUR_WHATSAPP_NUMBER_HERE
   Replace with: Your WhatsApp number (format: 918237256620 for India)

HOW TO ADD NEW CATEGORY (Page 1):
---------------------------------
1. Open "index.html" in a text editor
2. Find the comment: <!-- COPY FROM HERE TO ADD NEW CATEGORY -->
3. Copy the entire block from "COPY FROM HERE" to "TO HERE"
4. Paste it below existing categories
5. Change:
   - onclick="navigateToProducts('YOUR_CATEGORY_ID')"
   - Category icon (emoji)
   - Category title
   - Category description
6. Save the file

HOW TO ADD NEW PRODUCT (Page 2):
--------------------------------
1. Open "products.html" in a text editor
2. Find the comment for your category: <!-- CHARGERS SECTION -->
3. Copy a product block from "COPY FROM HERE" to "TO HERE"
4. Paste it in the same category section
5. Change:
   - class="product-card YOUR_CATEGORY"
   - onclick="navigateToDetails('UNIQUE_PRODUCT_ID')"
   - Image URL (src="...")
   - Product name
   - Original price and discount price
6. Save the file

HOW TO ADD PRODUCT DETAILS (Page 3):
------------------------------------
1. Open "script.js" in a text editor
2. Find: // TO ADD MORE PRODUCTS
3. Copy any product object (from COPY FROM HERE to TO HERE)
4. Paste it before the closing }; of productData
5. Change:
   - Product ID key (e.g., 'charger-003')
   - name: 'Product Name'
   - productId: 'YOUR_PRODUCT_ID' (leave empty if not ready)
   - originalPrice: '₹XXX'
   - discountPrice: '₹XXX'
   - images: ['url1', 'url2', 'url3'] - Add as many as needed
   - description: ['Point 1', 'Point 2'] - Add as many as needed
6. Don't forget comma after previous product!
7. Save the file

ADDING MORE IMAGES TO EXISTING PRODUCT:
---------------------------------------
1. Open "script.js"
2. Find your product by its ID
3. In the images array, copy any image line:
   'https://via.placeholder.com/600x600?text=Image'
4. Paste it below and change the URL
5. Save the file

ADDING MORE DESCRIPTION POINTS:
-------------------------------
1. Open "script.js"
2. Find your product by its ID
3. In the description array, copy any line:
   'Description point here'
4. Paste it below and change the text
5. Save the file

REPLACING PLACEHOLDER IMAGES:
-----------------------------
1. Upload your product images to an image hosting service or use them locally
2. Replace all instances of "https://via.placeholder.com/..." with your actual image URLs
3. For local images: Place images in the same folder and use: "image-name.jpg"

EXAMPLE - Adding a new category "Headphones":
--------------------------------------------
In index.html, add:
<div class="category-card" onclick="navigateToProducts('headphones')">
    <div class="category-icon">🎧</div>
    <h3>Headphones</h3>
    <p>Premium Over-Ear Headphones</p>
</div>

EXAMPLE - Adding a new product in products.html:
-----------------------------------------------
<div class="product-card headphones" onclick="navigateToDetails('headphone-001')">
    <img src="headphone-image.jpg" alt="Bluetooth Headphones">
    <div class="product-info">
        <h3>Bluetooth Headphones</h3>
        <div class="price-container">
            <span class="original-price">₹3999</span>
            <span class="discount-price">₹2499</span>
        </div>
    </div>
</div>

EXAMPLE - Adding product details in script.js:
---------------------------------------------
'headphone-001': {
    name: 'Bluetooth Headphones',
    productId: 'HP-BT-001',
    originalPrice: '₹3999',
    discountPrice: '₹2499',
    images: [
        'headphone-1.jpg',
        'headphone-2.jpg',
        'headphone-3.jpg'
    ],
    description: [
        'Wireless Bluetooth 5.0',
        '40mm drivers for superior sound',
        '20-hour battery life',
        'Comfortable cushioned ear pads',
        'Foldable design'
    ]
},

TIPS:
-----
- Always keep backups before making changes
- Test in browser after each change
- Use Ctrl+F to find text quickly in files
- Keep product IDs unique (e.g., charger-001, charger-002)
- Match category names exactly (case-sensitive)
- For rupee symbol: Use ₹ or Rs.

SUPPORT:
--------
Contact: 82372 56620
WhatsApp: [Update in footer links]

================================
READY TO USE - JUST OPEN index.html IN YOUR BROWSER!
================================
