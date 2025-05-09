// Quantity Selector
const minusBtn = document.querySelector('.quantity-btn.minus');
const plusBtn = document.querySelector('.quantity-btn.plus');
const quantityInput = document.querySelector('.quantity-selector input');

minusBtn.addEventListener('click', () => {
    let value = parseInt(quantityInput.value);
    if (value > 1) {
        quantityInput.value = value - 1;
    }
});

plusBtn.addEventListener('click', () => {
    let value = parseInt(quantityInput.value);
    if (value < 10) {
        quantityInput.value = value + 1;
    }
});

// Thumbnail Image Gallery
const mainImage = document.querySelector('.main-image img');
const thumbnails = document.querySelectorAll('.thumbnail-images img');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        mainImage.src = thumbnail.src;
        thumbnails.forEach(thumb => thumb.classList.remove('active'));
        thumbnail.classList.add('active');
    });
});

// Add to Cart Animation
const addToCartBtn = document.querySelector('.add-to-cart-btn');
addToCartBtn.addEventListener('click', () => {
    addToCartBtn.innerHTML = '<i class="fas fa-check"></i> Added to Cart';
    addToCartBtn.style.backgroundColor = '#27ae60';
    
    setTimeout(() => {
        addToCartBtn.innerHTML = '<i class="fas fa-shopping-cart"></i> Add to Cart';
        addToCartBtn.style.backgroundColor = '#3498db';
    }, 2000);
});

// Wishlist Button
const wishlistBtn = document.querySelector('.wishlist-btn');
wishlistBtn.addEventListener('click', () => {
    const icon = wishlistBtn.querySelector('i');
    if (icon.classList.contains('far')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        wishlistBtn.style.color = '#e74c3c';
        wishlistBtn.style.borderColor = '#e74c3c';
    } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        wishlistBtn.style.color = '#2c3e50';
        wishlistBtn.style.borderColor = '#ddd';
    }
});

// Quick View Popup
const productCards = document.querySelectorAll('.product-card');
const quickView = document.querySelector('.quick-view');

productCards.forEach(card => {
    card.addEventListener('click', () => {
        const productName = card.querySelector('h3').textContent;
        const productPrice = card.querySelector('.price').textContent;
        const productImage = card.querySelector('img').src;
        
        const quickViewContent = document.querySelector('.quick-view-content');
        quickViewContent.innerHTML = `
            <button class="close-quick-view">&times;</button>
            <div class="quick-view-product">
                <img src="${productImage}" alt="${productName}">
                <div class="quick-view-details">
                    <h2>${productName}</h2>
                    <p class="price">${productPrice}</p>
                    <button class="add-to-cart-btn">
                        <i class="fas fa-shopping-cart"></i>
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
        
        quickView.classList.add('active');

        // Add event listener to the newly created close button
        const closeBtn = quickViewContent.querySelector('.close-quick-view');
        closeBtn.addEventListener('click', () => {
            quickView.classList.remove('active');
        });
    });
});

// Close quick view when clicking outside
quickView.addEventListener('click', (e) => {
    if (e.target === quickView) {
        quickView.classList.remove('active');
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add active class to navigation links on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${section.id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}); 