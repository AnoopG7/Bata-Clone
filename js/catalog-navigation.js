// Add back to catalog button on product pages
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on a product detail page
    if (document.querySelector('.product-detail-container')) {
        // Create back to catalog button
        const backButton = document.createElement('div');
        backButton.classList.add('back-to-catalog');
        backButton.innerHTML = '<a href="catalog.html"><i class="fas fa-arrow-left"></i> Back to Catalog</a>';
        
        // Insert before the product detail container
        const productContainer = document.querySelector('.product-detail-container');
        productContainer.parentNode.insertBefore(backButton, productContainer);
        
        // Add some style
        const style = document.createElement('style');
        style.textContent = `
            .back-to-catalog {
                max-width: 1200px;
                margin: 20px auto 0;
                padding: 0 20px;
            }
            .back-to-catalog a {
                display: inline-flex;
                align-items: center;
                color: #333;
                text-decoration: none;
                font-weight: 500;
                transition: color 0.3s ease;
            }
            .back-to-catalog a:hover {
                color: #cc0001;
            }
            .back-to-catalog i {
                margin-right: 6px;
            }
        `;
        document.head.appendChild(style);
    }
});
