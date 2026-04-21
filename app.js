
        // ==========================================
        // NEXUSSHOP E-COMMERCE APPLICATION
        // ==========================================

        class NexusShop {
            constructor() {
                this.state = {
                    user: JSON.parse(localStorage.getItem('nexus_user')) || null,
                    cart: JSON.parse(localStorage.getItem('nexus_cart')) || [],
                    wishlist: JSON.parse(localStorage.getItem('nexus_wishlist')) || [],
                    orders: JSON.parse(localStorage.getItem('nexus_orders')) || this.generateMockOrders(),
                    inventory: JSON.parse(localStorage.getItem('nexus_inventory')) || this.generateMockInventory(),
                    currentView: 'home',
                    selectedProduct: null,
                    searchQuery: '',
                    filters: {
                        categories: [],
                        priceRange: [0, 2000],
                        rating: 0
                    },
                    coupons: {
                        'SAVE20': { discount: 20, type: 'percent', min: 100 },
                        'FLAT50': { discount: 50, type: 'fixed', min: 200 },
                        'WELCOME': { discount: 15, type: 'percent', min: 0 }
                    },
                    appliedCoupon: null,
                    chatHistory: []
                };

                this.products = this.generateMockProducts();
                this.init();
            }

            // Mock Data Generation
            generateMockProducts() {
                return [
                    {
                        id: 1,
                        name: "Wireless Noise-Canceling Headphones",
                        category: "electronics",
                        subcategory: "headphones",
                        price: 299.99,
                        originalPrice: 399.99,
                        rating: 4.8,
                        reviews: 234,
                        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
                        images: [
                            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop",
                            "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop",
                            "https://images.unsplash.com/photo-1524678606372-fa87b88052af?w=800&h=800&fit=crop"
                        ],
                        description: "Premium wireless headphones with industry-leading noise cancellation, 30-hour battery life, and superior comfort for all-day wear.",
                        specs: {
                            "Battery Life": "30 hours",
                            "Connectivity": "Bluetooth 5.0",
                            "Weight": "250g",
                            "Warranty": "2 years"
                        },
                        stock: 45,
                        badge: "Best Seller"
                    },
                    {
                        id: 2,
                        name: "Smart Fitness Watch Pro",
                        category: "electronics",
                        subcategory: "wearables",
                        price: 199.99,
                        originalPrice: 249.99,
                        rating: 4.6,
                        reviews: 189,
                        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
                        images: [
                            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop",
                            "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&h=800&fit=crop"
                        ],
                        description: "Advanced fitness tracking with heart rate monitoring, GPS, sleep analysis, and 7-day battery life. Water-resistant up to 50m.",
                        specs: {
                            "Display": "1.4 inch AMOLED",
                            "Sensors": "Heart Rate, SpO2, GPS",
                            "Battery": "7 days",
                            "Water Resistance": "5ATM"
                        },
                        stock: 12,
                        badge: "New"
                    },
                    {
                        id: 3,
                        name: "Organic Cotton Premium T-Shirt",
                        category: "fashion",
                        subcategory: "clothing",
                        price: 34.99,
                        originalPrice: 49.99,
                        rating: 4.5,
                        reviews: 89,
                        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
                        images: [
                            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop",
                            "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=800&fit=crop"
                        ],
                        description: "Sustainably sourced organic cotton t-shirt with a modern fit. Soft, breathable, and perfect for everyday wear.",
                        specs: {
                            "Material": "100% Organic Cotton",
                            "Fit": "Regular",
                            "Care": "Machine wash",
                            "Origin": "Made in USA"
                        },
                        stock: 150,
                        badge: "Eco-Friendly"
                    },
                    {
                        id: 4,
                        name: "Minimalist Ceramic Vase Set",
                        category: "home",
                        subcategory: "decor",
                        price: 79.99,
                        originalPrice: 99.99,
                        rating: 4.9,
                        reviews: 56,
                        image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=500&h=500&fit=crop",
                        images: [
                            "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&h=800&fit=crop",
                            "https://images.unsplash.com/photo-1612196808214-b7e239e5bbae?w=800&h=800&fit=crop"
                        ],
                        description: "Handcrafted ceramic vase set featuring three unique shapes. Perfect for modern home decor and floral arrangements.",
                        specs: {
                            "Material": "Ceramic",
                            "Set": "3 pieces",
                            "Height": "8-12 inches",
                            "Finish": "Matte"
                        },
                        stock: 8,
                        badge: "Limited"
                    },
                    {
                        id: 5,
                        name: "Professional Running Shoes",
                        category: "sports",
                        subcategory: "footwear",
                        price: 129.99,
                        originalPrice: 159.99,
                        rating: 4.7,
                        reviews: 312,
                        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
                        images: [
                            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop",
                            "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=800&fit=crop"
                        ],
                        description: "Engineered for performance with responsive cushioning, breathable mesh upper, and durable rubber outsole.",
                        specs: {
                            "Upper": "Engineered Mesh",
                            "Midsole": "CloudFoam",
                            "Weight": "250g",
                            "Drop": "8mm"
                        },
                        stock: 67,
                        badge: "Popular"
                    },
                    {
                        id: 6,
                        name: "4K Ultra HD Smart TV 55",
                        category: "electronics",
                        subcategory: "tv",
                        price: 699.99,
                        originalPrice: 899.99,
                        rating: 4.7,
                        reviews: 445,
                        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&h=500&fit=crop",
                        images: [
                            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&h=800&fit=crop",
                            "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=800&h=800&fit=crop"
                        ],
                        description: "Stunning 4K resolution with HDR10+, smart features, voice control, and built-in streaming apps.",
                        specs: {
                            "Resolution": "3840 x 2160",
                            "HDR": "HDR10+",
                            "Smart": "Android TV",
                            "Ports": "4 HDMI, 2 USB"
                        },
                        stock: 23,
                        badge: "Deal"
                    },
                    {
                        id: 7,
                        name: "Leather Crossbody Bag",
                        category: "fashion",
                        subcategory: "accessories",
                        price: 89.99,
                        originalPrice: 119.99,
                        rating: 4.4,
                        reviews: 78,
                        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop",
                        images: [
                            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=800&fit=crop",
                            "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&h=800&fit=crop"
                        ],
                        description: "Genuine leather crossbody bag with adjustable strap, multiple compartments, and RFID protection.",
                        specs: {
                            "Material": "Genuine Leather",
                            "Dimensions": "10 x 8 x 3 inches",
                            "Strap": "Adjustable",
                            "Features": "RFID Blocking"
                        },
                        stock: 34,
                        badge: null
                    },
                    {
                        id: 8,
                        name: "Smart Home Security Camera",
                        category: "electronics",
                        subcategory: "security",
                        price: 149.99,
                        originalPrice: 199.99,
                        rating: 4.3,
                        reviews: 156,
                        image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=500&h=500&fit=crop",
                        images: [
                            "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=800&h=800&fit=crop",
                            "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=800&h=800&fit=crop"
                        ],
                        description: "1080p HD security camera with night vision, two-way audio, motion detection, and cloud storage.",
                        specs: {
                            "Resolution": "1080p HD",
                            "Night Vision": "Up to 30ft",
                            "Storage": "Cloud + Local",
                            "Power": "Wired/Wireless"
                        },
                        stock: 5,
                        badge: "Low Stock"
                    }
                ];
            }

            generateMockOrders() {
                return [
                    {
                        id: "ORD-2024-001",
                        date: "2024-01-15",
                        total: 299.99,
                        status: "delivered",
                        items: [{ name: "Wireless Noise-Canceling Headphones", qty: 1 }],
                        tracking: [
                            { status: "Order Placed", date: "2024-01-15 09:30", completed: true },
                            { status: "Processing", date: "2024-01-15 14:00", completed: true },
                            { status: "Shipped", date: "2024-01-16 10:00", completed: true },
                            { status: "Out for Delivery", date: "2024-01-18 08:00", completed: true },
                            { status: "Delivered", date: "2024-01-18 14:30", completed: true }
                        ]
                    },
                    {
                        id: "ORD-2024-002",
                        date: "2024-01-20",
                        total: 199.99,
                        status: "shipped",
                        items: [{ name: "Smart Fitness Watch Pro", qty: 1 }],
                        tracking: [
                            { status: "Order Placed", date: "2024-01-20 11:00", completed: true },
                            { status: "Processing", date: "2024-01-20 16:00", completed: true },
                            { status: "Shipped", date: "2024-01-21 09:00", completed: true },
                            { status: "Out for Delivery", date: null, completed: false },
                            { status: "Delivered", date: null, completed: false }
                        ]
                    }
                ];
            }

            generateMockInventory() {
                return [
                    { id: 1, name: "Wireless Headphones", stock: 45, sold: 234, threshold: 10 },
                    { id: 2, name: "Smart Watch Pro", stock: 12, sold: 189, threshold: 15 },
                    { id: 3, name: "Organic T-Shirt", stock: 150, sold: 89, threshold: 20 },
                    { id: 4, name: "Ceramic Vase Set", stock: 8, sold: 56, threshold: 5 },
                    { id: 5, name: "Running Shoes", stock: 67, sold: 312, threshold: 25 }
                ];
            }

            init() {
                this.setupEventListeners();
                this.navigate('home');
                this.updateCartCount();
                this.updateWishlistCount();
                
                // Simulate real-time inventory updates
                setInterval(() => this.simulateInventoryUpdate(), 30000);
            }

            setupEventListeners() {
                // Search with debounce
                const searchInput = document.getElementById('searchInput');
                let timeout;
                searchInput.addEventListener('input', (e) => {
                    clearTimeout(timeout);
                    timeout = setTimeout(() => this.handleSearch(e.target.value), 300);
                });

                // Close search suggestions on click outside
                document.addEventListener('click', (e) => {
                    if (!e.target.closest('.search-container')) {
                        document.getElementById('searchSuggestions').classList.remove('active');
                    }
                });
            }

            // Navigation & Routing
            navigate(view, params = {}) {
                this.state.currentView = view;
                const main = document.getElementById('mainContent');
                window.scrollTo({ top: 0, behavior: 'smooth' });
                
                switch(view) {
                    case 'home':
                        main.innerHTML = this.renderHome();
                        break;
                    case 'shop':
                        main.innerHTML = this.renderShop(params);
                        break;
                    case 'product':
                        this.state.selectedProduct = params.product;
                        main.innerHTML = this.renderProductDetail(params.product);
                        break;
                    case 'cart':
                        main.innerHTML = this.renderCart();
                        break;
                    case 'checkout':
                        if (this.state.cart.length === 0) {
                            this.showToast('Your cart is empty', 'error');
                            this.navigate('shop');
                            return;
                        }
                        main.innerHTML = this.renderCheckout();
                        break;
                    case 'account':
                        main.innerHTML = this.renderAccount();
                        break;
                    case 'orders':
                        main.innerHTML = this.renderOrders();
                        break;
                    case 'track':
                        main.innerHTML = params.order ? this.renderTracking(params.order) : this.renderOrderLookup();
                        break;
                    case 'admin':
                        main.innerHTML = this.renderAdmin();
                        this.renderCharts();
                        break;
                    case 'inventory':
                        main.innerHTML = this.renderInventory();
                        break;
                    case 'returns':
                        main.innerHTML = this.renderReturns();
                        break;
                    case 'support':
                        main.innerHTML = this.renderSupport();
                        break;
                    case 'deals':
                        main.innerHTML = this.renderDeals();
                        break;
                    default:
                        main.innerHTML = this.renderHome();
                }
            }

            // Render Methods
            renderHome() {
                const featured = this.products.slice(0, 4);
                const newArrivals = this.products.slice(4, 8);
                
                return `
                    <section class="hero">
                        <div class="container">
                            <div class="hero-content fade-in">
                                <h1>Next Gen Shopping Experience</h1>
                                <p>Discover premium products with exclusive deals, secure checkout, and lightning-fast delivery.</p>
                                <button class="btn btn-primary" style="font-size: 1.125rem; padding: 1rem 2rem;" onclick="app.filterCategory('all')">
                                    Shop Now →
                                </button>
                                <div class="hero-badges">
                                    <div class="hero-badge">🚚 Free Shipping</div>
                                    <div class="hero-badge">↩️ Easy Returns</div>
                                    <div class="hero-badge">🔒 Secure Payment</div>
                                </div>
                            </div>
                        </div>
                        <div class="hero-shapes"></div>
                    </section>

                    <section class="section">
                        <div class="container">
                            <div class="section-header">
                                <h2 class="section-title">Featured Products</h2>
                                <a href="#" onclick="app.filterCategory('all')" style="color: var(--primary); text-decoration: none; font-weight: 600;">View All →</a>
                            </div>
                            <div class="product-grid grid">
                                ${featured.map(p => this.renderProductCard(p)).join('')}
                            </div>
                        </div>
                    </section>

                    <section class="recommendation-section">
                        <div class="container">
                            <div class="section-header">
                                <h2 class="section-title">Recommended For You</h2>
                                <span style="color: var(--gray);">Based on your browsing history</span>
                            </div>
                            <div class="product-grid grid">
                                ${this.getRecommendations().map(p => this.renderProductCard(p)).join('')}
                            </div>
                        </div>
                    </section>

                    <section class="section">
                        <div class="container">
                            <div class="section-header">
                                <h2 class="section-title">New Arrivals</h2>
                            </div>
                            <div class="product-grid grid">
                                ${newArrivals.map(p => this.renderProductCard(p)).join('')}
                            </div>
                        </div>
                    </section>

                    <section class="section" style="background: var(--white); padding: 4rem 0;">
                        <div class="container">
                            <div style="text-align: center; max-width: 600px; margin: 0 auto;">
                                <h2 style="font-size: 2rem; margin-bottom: 1rem;">Subscribe & Save</h2>
                                <p style="color: var(--gray); margin-bottom: 2rem;">Get exclusive offers, early access to sales, and personalized recommendations delivered to your inbox.</p>
                                <form onsubmit="app.subscribe(event)" style="display: flex; gap: 1rem; max-width: 500px; margin: 0 auto;">
                                    <input type="email" class="form-input" placeholder="Enter your email" required style="flex: 1;">
                                    <button type="submit" class="btn btn-primary">Subscribe</button>
                                </form>
                                <div class="security-badges" style="margin-top: 2rem;">
                                    <div class="security-badge">🔐 256-bit Encryption</div>
                                    <div class="security-badge">🛡️ GDPR Compliant</div>
                                    <div class="security-badge">✓ PCI DSS Certified</div>
                                </div>
                            </div>
                        </div>
                    </section>
                `;
            }

            renderProductCard(product) {
                const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
                const inWishlist = this.state.wishlist.find(w => w.id === product.id);
                
                return `
                    <div class="card product-card slide-up">
                        <div class="product-image">
                            <img src="${product.image}" alt="${product.name}" loading="lazy" onclick="app.navigate('product', {product: app.products.find(p => p.id === ${product.id})})" style="cursor: pointer;">
                            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                            <button class="product-wishlist ${inWishlist ? 'active' : ''}" onclick="app.toggleWishlistItem(${product.id})">
                                ${inWishlist ? '♥' : '♡'}
                            </button>
                        </div>
                        <div class="product-info">
                            <div class="product-category">${product.subcategory}</div>
                            <h3 class="product-name" onclick="app.navigate('product', {product: app.products.find(p => p.id === ${product.id})})" style="cursor: pointer;">${product.name}</h3>
                            <div class="product-rating">
                                <span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</span>
                                <span style="color: var(--gray); font-size: 0.875rem;">(${product.reviews})</span>
                            </div>
                            <div class="product-price">
                                <span class="price-current">$${product.price}</span>
                                <span class="price-original">$${product.originalPrice}</span>
                                <span class="discount-badge">-${discount}%</span>
                            </div>
                            <div class="product-actions">
                                <button class="btn btn-primary" onclick="app.addToCart(${product.id})">
                                    🛒 Add to Cart
                                </button>
                                <button class="btn btn-outline" onclick="app.buyNow(${product.id})">
                                    ⚡ Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            }

            renderShop(params = {}) {
                const { category = 'all' } = params;
                let filtered = this.products;
                
                if (category !== 'all') {
                    filtered = filtered.filter(p => p.category === category || p.subcategory === category);
                }

                if (this.state.filters.categories.length > 0) {
                    filtered = filtered.filter(p => this.state.filters.categories.includes(p.category));
                }

                filtered = filtered.filter(p => 
                    p.price >= this.state.filters.priceRange[0] && 
                    p.price <= this.state.filters.priceRange[1]
                );

                if (this.state.filters.rating > 0) {
                    filtered = filtered.filter(p => p.rating >= this.state.filters.rating);
                }

                return `
                    <div class="section">
                        <div class="container">
                            <div class="shop-layout grid">
                                <aside class="filters">
                                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                                        <h3>Filters</h3>
                                        <button onclick="app.clearFilters()" style="background: none; border: none; color: var(--primary); cursor: pointer; font-size: 0.875rem;">Clear All</button>
                                    </div>
                                    
                                    <div class="filter-group">
                                        <div class="filter-title" onclick="this.nextElementSibling.classList.toggle('hidden')">
                                            Categories ▼
                                        </div>
                                        <div class="filter-options">
                                            ${['electronics', 'fashion', 'home', 'sports'].map(cat => `
                                                <label>
                                                    <input type="checkbox" onchange="app.toggleFilter('${cat}')" 
                                                        ${this.state.filters.categories.includes(cat) ? 'checked' : ''}>
                                                    ${cat.charAt(0).toUpperCase() + cat.slice(1)}
                                                </label>
                                            `).join('')}
                                        </div>
                                    </div>

                                    <div class="filter-group">
                                        <div class="filter-title">Price Range</div>
                                        <input type="range" class="price-range" min="0" max="2000" value="${this.state.filters.priceRange[1]}" 
                                            oninput="app.updatePriceRange(this.value)">
                                        <div class="range-values">
                                            <span>$0</span>
                                            <span id="priceValue">$${this.state.filters.priceRange[1]}</span>
                                        </div>
                                    </div>

                                    <div class="filter-group">
                                        <div class="filter-title">Rating</div>
                                        <div class="filter-options">
                                            ${[4, 3, 2, 1].map(r => `
                                                <label>
                                                    <input type="radio" name="rating" onchange="app.setRating(${r})" 
                                                        ${this.state.filters.rating === r ? 'checked' : ''}>
                                                    ${'★'.repeat(r)} & Up
                                                </label>
                                            `).join('')}
                                        </div>
                                    </div>
                                </aside>

                                <div>
                                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                                        <h2>${category === 'all' ? 'All Products' : category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                                        <span style="color: var(--gray);">${filtered.length} products found</span>
                                    </div>
                                    <div class="product-grid grid">
                                        ${filtered.map(p => this.renderProductCard(p)).join('')}
                                    </div>
                                    ${filtered.length === 0 ? '<div style="text-align: center; padding: 4rem; color: var(--gray);">No products found matching your criteria.</div>' : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }

            renderProductDetail(product) {
                const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
                const inWishlist = this.state.wishlist.find(w => w.id === product.id);
                const related = this.products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
                
                return `
                    <div class="section">
                        <div class="container">
                            <div class="product-detail grid">
                                <div class="product-gallery">
                                    <img src="${product.images[0]}" class="main-image" id="mainImage" alt="${product.name}">
                                    <div class="thumbnail-list">
                                        ${product.images.map((img, i) => `
                                            <img src="${img}" class="thumbnail ${i === 0 ? 'active' : ''}" 
                                                onclick="app.changeImage('${img}', this)" alt="">
                                        `).join('')}
                                    </div>
                                </div>
                                
                                <div class="product-meta">
                                    <div style="color: var(--gray); text-transform: uppercase; font-size: 0.875rem; letter-spacing: 0.05em;">${product.subcategory}</div>
                                    <h1>${product.name}</h1>
                                    <div class="product-rating" style="font-size: 1.125rem;">
                                        <span class="stars">${'★'.repeat(Math.floor(product.rating))}</span>
                                        <span>${product.rating}</span>
                                        <span style="color: var(--gray);">(${product.reviews} reviews)</span>
                                    </div>
                                    <div class="product-price" style="margin: 1.5rem 0;">
                                        <span class="price-current" style="font-size: 2rem;">$${product.price}</span>
                                        <span class="price-original" style="font-size: 1.25rem;">$${product.originalPrice}</span>
                                        <span class="discount-badge">-${discount}%</span>
                                    </div>
                                    <p class="product-description">${product.description}</p>
                                    
                                    <table class="specs-table">
                                        ${Object.entries(product.specs).map(([key, val]) => `
                                            <tr><td>${key}</td><td>${val}</td></tr>
                                        `).join('')}
                                    </table>

                                    <div style="display: flex; align-items: center; gap: 1rem; margin: 1rem 0;">
                                        <span style="color: ${product.stock < 10 ? 'var(--danger)' : 'var(--success)'}; font-weight: 600;">
                                            ${product.stock < 10 ? `⚠️ Only ${product.stock} left in stock` : '✓ In Stock'}
                                        </span>
                                    </div>

                                    <div class="quantity-selector">
                                        <span>Quantity:</span>
                                        <button class="qty-btn" onclick="app.updateQty(-1)">-</button>
                                        <input type="number" class="qty-input" id="qtyInput" value="1" min="1" max="${product.stock}">
                                        <button class="qty-btn" onclick="app.updateQty(1)">+</button>
                                    </div>

                                    <div style="display: flex; gap: 1rem; margin-top: 1.5rem;">
                                        <button class="btn btn-primary" style="flex: 1; padding: 1rem;" onclick="app.addToCart(${product.id}, parseInt(document.getElementById('qtyInput').value))">
                                            🛒 Add to Cart
                                        </button>
                                        <button class="btn btn-outline" style="padding: 1rem;" onclick="app.toggleWishlistItem(${product.id})">
                                            ${inWishlist ? '♥' : '♡'}
                                        </button>
                                    </div>

                                    <div style="margin-top: 2rem; padding: 1rem; background: var(--light); border-radius: var(--radius);">
                                        <div style="display: flex; gap: 1rem; align-items: center; font-size: 0.875rem; color: var(--gray);">
                                            <span>🚚 Free delivery by Tomorrow</span>
                                            <span>↩️ 30-day returns</span>
                                            <span>🛡️ 2 year warranty</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="reviews-section">
                                <h2 style="margin-bottom: 1.5rem;">Customer Reviews</h2>
                                
                                <div class="review-form">
                                    <h3 style="margin-bottom: 1rem;">Write a Review</h3>
                                    <div class="star-rating-input" id="starInput">
                                        ${[1,2,3,4,5].map(i => `<span class="star" onclick="app.setReviewStar(${i})">★</span>`).join('')}
                                    </div>
                                    <div class="form-group" style="margin-top: 1rem;">
                                        <textarea class="form-input" rows="3" placeholder="Share your experience..." id="reviewText"></textarea>
                                    </div>
                                    <button class="btn btn-primary" onclick="app.submitReview()">Submit Review</button>
                                </div>

                                <div id="reviewsList">
                                    ${this.renderReviews()}
                                </div>
                            </div>

                            ${related.length > 0 ? `
                                <div style="margin-top: 3rem;">
                                    <h2 style="margin-bottom: 1.5rem;">You May Also Like</h2>
                                    <div class="product-grid grid">
                                        ${related.map(p => this.renderProductCard(p)).join('')}
                                    </div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `;
            }

            renderReviews() {
                const reviews = [
                    { name: "Sarah M.", rating: 5, date: "2024-01-10", text: "Absolutely love this product! Exceeded my expectations in every way." },
                    { name: "James K.", rating: 4, date: "2024-01-08", text: "Great quality for the price. Shipping was fast and packaging was secure." },
                    { name: "Emily R.", rating: 5, date: "2024-01-05", text: "Best purchase I've made this year. Highly recommend!" }
                ];
                
                return reviews.map(r => `
                    <div class="review-item">
                        <div class="review-header">
                            <div class="reviewer">
                                <div class="avatar">${r.name.charAt(0)}</div>
                                <div>
                                    <div style="font-weight: 600;">${r.name}</div>
                                    <div class="stars">${'★'.repeat(r.rating)}</div>
                                </div>
                            </div>
                            <span style="color: var(--gray); font-size: 0.875rem;">${r.date}</span>
                        </div>
                        <p style="color: var(--gray); margin-top: 0.5rem;">${r.text}</p>
                    </div>
                `).join('');
            }

            renderCart() {
                if (this.state.cart.length === 0) {
                    return `
                        <div class="section" style="text-align: center; padding: 6rem 1rem;">
                            <div style="font-size: 4rem; margin-bottom: 1rem;">🛒</div>
                            <h2>Your cart is empty</h2>
                            <p style="color: var(--gray); margin: 1rem 0 2rem;">Looks like you haven't added anything yet.</p>
                            <button class="btn btn-primary" onclick="app.filterCategory('all')">Start Shopping</button>
                        </div>
                    `;
                }

                const subtotal = this.state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
                const discount = this.state.appliedCoupon ? this.calculateDiscount(subtotal) : 0;
                const total = subtotal - discount;

                return `
                    <div class="section">
                        <div class="container">
                            <h2 style="margin-bottom: 2rem;">Shopping Cart (${this.state.cart.length} items)</h2>
                            <div class="checkout-layout grid">
                                <div>
                                    ${this.state.cart.map(item => `
                                        <div class="card" style="padding: 1.5rem; margin-bottom: 1rem; display: flex; gap: 1.5rem; align-items: center;">
                                            <img src="${item.image}" style="width: 100px; height: 100px; object-fit: cover; border-radius: 4px;">
                                            <div style="flex: 1;">
                                                <h3 style="margin-bottom: 0.5rem;">${item.name}</h3>
                                                <div style="color: var(--gray); font-size: 0.875rem; margin-bottom: 0.5rem;">${item.category}</div>
                                                <div style="display: flex; align-items: center; gap: 1rem;">
                                                    <div class="quantity-selector" style="margin: 0;">
                                                        <button class="qty-btn" onclick="app.updateCartQty(${item.id}, -1)">-</button>
                                                        <span style="font-weight: 600; min-width: 30px; text-align: center;">${item.qty}</span>
                                                        <button class="qty-btn" onclick="app.updateCartQty(${item.id}, 1)">+</button>
                                                    </div>
                                                    <button class="remove-item" onclick="app.removeFromCart(${item.id})">🗑️</button>
                                                </div>
                                            </div>
                                            <div style="text-align: right;">
                                                <div style="font-size: 1.25rem; font-weight: 700;">$${(item.price * item.qty).toFixed(2)}</div>
                                                <div style="color: var(--gray); font-size: 0.875rem;">$${item.price} each</div>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                                
                                <div class="order-summary">
                                    <h3 style="margin-bottom: 1.5rem;">Order Summary</h3>
                                    
                                    <div class="coupon-input">
                                        <input type="text" class="form-input" id="couponCode" placeholder="Enter coupon code" 
                                            value="${this.state.appliedCoupon || ''}">
                                        <button class="btn btn-outline" onclick="app.applyCoupon()">Apply</button>
                                    </div>
                                    ${this.state.appliedCoupon ? `<div style="color: var(--success); font-size: 0.875rem; margin-bottom: 1rem;">✓ Coupon applied!</div>` : ''}
                                    
                                    <div class="summary-row">
                                        <span>Subtotal</span>
                                        <span>$${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div class="summary-row">
                                        <span>Shipping</span>
                                        <span style="color: var(--success);">Free</span>
                                    </div>
                                    ${discount > 0 ? `
                                        <div class="summary-row">
                                            <span>Discount</span>
                                            <span style="color: var(--success);">-$${discount.toFixed(2)}</span>
                                        </div>
                                    ` : ''}
                                    <div class="summary-row">
                                        <span>Tax</span>
                                        <span>Calculated at checkout</span>
                                    </div>
                                    <div class="summary-row total">
                                        <span>Estimated Total</span>
                                        <span>$${total.toFixed(2)}</span>
                                    </div>
                                    
                                    <button class="btn btn-primary" style="width: 100%; margin-top: 1.5rem;" onclick="app.navigate('checkout')">
                                        Proceed to Checkout
                                    </button>
                                    
                                    <div style="margin-top: 1rem; text-align: center;">
                                        <button onclick="app.filterCategory('all')" style="background: none; border: none; color: var(--primary); cursor: pointer;">
                                            Continue Shopping
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }

            renderCheckout() {
                const subtotal = this.state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
                const discount = this.state.appliedCoupon ? this.calculateDiscount(subtotal) : 0;
                const total = subtotal - discount;

                return `
                    <div class="section">
                        <div class="container">
                            <div class="checkout-stepper">
                                ${['Cart', 'Shipping', 'Payment', 'Confirm'].map((step, i) => `
                                    <div class="step ${i === 1 ? 'active' : i < 1 ? 'completed' : ''}">
                                        <div class="step-number">${i < 1 ? '✓' : i + 1}</div>
                                        <div class="step-label">${step}</div>
                                    </div>
                                `).join('')}
                            </div>

                            <div class="checkout-layout grid">
                                <div>
                                    <div class="checkout-form">
                                        <h3 style="margin-bottom: 1.5rem;">Shipping Information</h3>
                                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                                            <div class="form-group">
                                                <label class="form-label">First Name</label>
                                                <input type="text" class="form-input" required>
                                            </div>
                                            <div class="form-group">
                                                <label class="form-label">Last Name</label>
                                                <input type="text" class="form-input" required>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label">Email</label>
                                            <input type="email" class="form-input" required>
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label">Address</label>
                                            <input type="text" class="form-input" required>
                                        </div>
                                        <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 1rem;">
                                            <div class="form-group">
                                                <label class="form-label">City</label>
                                                <input type="text" class="form-input" required>
                                            </div>
                                            <div class="form-group">
                                                <label class="form-label">State</label>
                                                <input type="text" class="form-input" required>
                                            </div>
                                            <div class="form-group">
                                                <label class="form-label">ZIP</label>
                                                <input type="text" class="form-input" required>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="checkout-form" style="margin-top: 1.5rem;">
                                        <h3 style="margin-bottom: 1.5rem;">Payment Method</h3>
                                        <div class="payment-methods">
                                            <label class="payment-method selected">
                                                <input type="radio" name="payment" value="card" checked onchange="app.selectPayment(this)">
                                                <span style="font-size: 1.5rem;">💳</span>
                                                <div>
                                                    <div style="font-weight: 600;">Credit / Debit Card</div>
                                                    <div style="font-size: 0.875rem; color: var(--gray);">Visa, Mastercard, Amex</div>
                                                </div>
                                            </label>
                                            <label class="payment-method">
                                                <input type="radio" name="payment" value="upi" onchange="app.selectPayment(this)">
                                                <span style="font-size: 1.5rem;">📱</span>
                                                <div>
                                                    <div style="font-weight: 600;">UPI</div>
                                                    <div style="font-size: 0.875rem; color: var(--gray);">Google Pay, PhonePe, Paytm</div>
                                                </div>
                                            </label>
                                            <label class="payment-method">
                                                <input type="radio" name="payment" value="wallet" onchange="app.selectPayment(this)">
                                                <span style="font-size: 1.5rem;">👛</span>
                                                <div>
                                                    <div style="font-weight: 600;">Wallet</div>
                                                    <div style="font-size: 0.875rem; color: var(--gray);">Paytm, Amazon Pay, Mobikwik</div>
                                                </div>
                                            </label>
                                        </div>

                                        <div id="cardForm" style="margin-top: 1.5rem;">
                                            <div class="form-group">
                                                <label class="form-label">Card Number</label>
                                                <input type="text" class="form-input" placeholder="1234 5678 9012 3456" maxlength="19">
                                            </div>
                                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                                                <div class="form-group">
                                                    <label class="form-label">Expiry Date</label>
                                                    <input type="text" class="form-input" placeholder="MM/YY" maxlength="5">
                                                </div>
                                                <div class="form-group">
                                                    <label class="form-label">CVV</label>
                                                    <input type="text" class="form-input" placeholder="123" maxlength="3">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="order-summary">
                                    <h3 style="margin-bottom: 1.5rem;">Order Summary</h3>
                                    ${this.state.cart.map(item => `
                                        <div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
                                            <img src="${item.image}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px;">
                                            <div style="flex: 1;">
                                                <div style="font-weight: 500; font-size: 0.875rem;">${item.name}</div>
                                                <div style="color: var(--gray); font-size: 0.75rem;">Qty: ${item.qty}</div>
                                            </div>
                                            <div style="font-weight: 600;">$${(item.price * item.qty).toFixed(2)}</div>
                                        </div>
                                    `).join('')}
                                    <div style="border-top: 1px solid var(--light); margin: 1rem 0; padding-top: 1rem;">
                                        <div class="summary-row">
                                            <span>Subtotal</span>
                                            <span>$${subtotal.toFixed(2)}</span>
                                        </div>
                                        ${discount > 0 ? `
                                            <div class="summary-row">
                                                <span>Discount</span>
                                                <span style="color: var(--success);">-$${discount.toFixed(2)}</span>
                                            </div>
                                        ` : ''}
                                        <div class="summary-row">
                                            <span>Shipping</span>
                                            <span style="color: var(--success);">Free</span>
                                        </div>
                                        <div class="summary-row total">
                                            <span>Total</span>
                                            <span>$${total.toFixed(2)}</span>
                                        </div>
                                    </div>
                                    
                                    <div class="security-badges" style="margin: 1rem 0;">
                                        <div class="security-badge">🔒 SSL Secure</div>
                                    </div>
                                    
                                    <button class="btn btn-primary" style="width: 100%;" onclick="app.placeOrder()">
                                        Place Order
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }

            renderAccount() {
                if (!this.state.user) {
                    return `
                        <div class="section" style="max-width: 500px; margin: 0 auto;">
                            <div style="text-align: center; margin-bottom: 2rem;">
                                <h2>My Account</h2>
                                <p style="color: var(--gray);">Sign in to access your account</p>
                            </div>
                            <div class="card" style="padding: 2rem;">
                                <div class="social-login">
                                    <button class="social-btn" onclick="app.socialLogin('google')">
                                        <span>🔍</span> Continue with Google
                                    </button>
                                    <button class="social-btn" onclick="app.socialLogin('facebook')">
                                        <span>📘</span> Continue with Facebook
                                    </button>
                                </div>
                                <div style="text-align: center; margin: 1.5rem 0; color: var(--gray);">or</div>
                                <form onsubmit="app.login(event)">
                                    <div class="form-group">
                                        <label class="form-label">Email</label>
                                        <input type="email" class="form-input" required placeholder="you@example.com">
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Password</label>
                                        <input type="password" class="form-input" required placeholder="••••••••">
                                    </div>
                                    <button type="submit" class="btn btn-primary" style="width: 100%;">Sign In</button>
                                </form>
                                <p style="text-align: center; margin-top: 1.5rem; font-size: 0.875rem;">
                                    New customer? <a href="#" style="color: var(--primary);">Create account</a>
                                </p>
                            </div>
                        </div>
                    `;
                }

                return `
                    <div class="section">
                        <div class="container">
                            <div class="account-layout grid">
                                <aside class="account-sidebar">
                                    <div style="padding: 1.5rem; border-bottom: 1px solid var(--light);">
                                        <div style="display: flex; align-items: center; gap: 1rem;">
                                            <div class="avatar" style="width: 60px; height: 60px; font-size: 1.5rem;">${this.state.user.name.charAt(0)}</div>
                                            <div>
                                                <div style="font-weight: 600;">${this.state.user.name}</div>
                                                <div style="font-size: 0.875rem; color: var(--gray);">${this.state.user.email}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul class="account-menu">
                                        <li><a href="#" class="active" onclick="app.showAccountTab('profile')"><span>👤</span> Profile</a></li>
                                        <li><a href="#" onclick="app.showAccountTab('orders')"><span>📦</span> Orders</a></li>
                                        <li><a href="#" onclick="app.showAccountTab('addresses')"><span>📍</span> Addresses</a></li>
                                        <li><a href="#" onclick="app.showAccountTab('payments')"><span>💳</span> Saved Payments</a></li>
                                        <li><a href="#" onclick="app.showAccountTab('loyalty')"><span>🏆</span> Loyalty Program</a></li>
                                        <li><a href="#" onclick="app.logout()"><span>🚪</span> Logout</a></li>
                                    </ul>
                                </aside>

                                <div class="account-content" id="accountTabContent">
                                    ${this.renderProfileTab()}
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }

            renderProfileTab() {
                return `
                    <h2 style="margin-bottom: 1.5rem;">Profile Information</h2>
                    <form onsubmit="app.updateProfile(event)">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <div class="form-group">
                                <label class="form-label">First Name</label>
                                <input type="text" class="form-input" value="${this.state.user.name.split(' ')[0]}">
                            </div>
                            <div class="form-group">
                                <label class="form-label">Last Name</label>
                                <input type="text" class="form-input" value="${this.state.user.name.split(' ')[1] || ''}">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Email</label>
                            <input type="email" class="form-input" value="${this.state.user.email}">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Phone</label>
                            <input type="tel" class="form-input" value="+1 (555) 123-4567">
                        </div>
                        <button type="submit" class="btn btn-primary">Save Changes</button>
                    </form>

                    <div style="margin-top: 3rem;">
                        <h3 style="margin-bottom: 1rem;">Notification Preferences</h3>
                        <div style="display: flex; flex-direction: column; gap: 1rem;">
                            <label style="display: flex; align-items: center; gap: 0.75rem; cursor: pointer;">
                                <input type="checkbox" checked style="width: 20px; height: 20px; accent-color: var(--primary);">
                                <span>Email notifications for orders and shipping</span>
                            </label>
                            <label style="display: flex; align-items: center; gap: 0.75rem; cursor: pointer;">
                                <input type="checkbox" checked style="width: 20px; height: 20px; accent-color: var(--primary);">
                                <span>Push notifications for deals and offers</span>
                            </label>
                            <label style="display: flex; align-items: center; gap: 0.75rem; cursor: pointer;">
                                <input type="checkbox" style="width: 20px; height: 20px; accent-color: var(--primary);">
                                <span>SMS notifications for delivery updates</span>
                            </label>
                        </div>
                    </div>
                `;
            }

            renderOrders() {
                return `
                    <div class="section">
                        <div class="container">
                            <h2 style="margin-bottom: 2rem;">My Orders</h2>
                            ${this.state.orders.map(order => `
                                <div class="card" style="padding: 1.5rem; margin-bottom: 1.5rem;">
                                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                                        <div>
                                            <div style="font-weight: 600; font-size: 1.125rem;">${order.id}</div>
                                            <div style="color: var(--gray); font-size: 0.875rem;">Placed on ${order.date}</div>
                                        </div>
                                        <span class="status-badge ${order.status === 'delivered' ? 'success' : order.status === 'shipped' ? 'warning' : 'danger'}">
                                            ${order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                        </span>
                                    </div>
                                    <div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
                                        ${order.items.map(item => `
                                            <div style="background: var(--light); padding: 0.75rem 1rem; border-radius: 4px; font-size: 0.875rem;">
                                                ${item.name} x${item.qty}
                                            </div>
                                        `).join('')}
                                    </div>
                                    <div style="display: flex; justify-content: space-between; align-items: center;">
                                        <div style="font-weight: 700; font-size: 1.125rem;">Total: $${order.total}</div>
                                        <button class="btn btn-outline" onclick="app.navigate('track', {order: app.state.orders.find(o => o.id === '${order.id}')})">
                                            Track Order
                                        </button>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            }

            renderTracking(order) {
                const activeIndex = order.tracking.findIndex(t => !t.completed);
                
                return `
                    <div class="section">
                        <div class="container">
                            <div class="tracking-container">
                                <div style="text-align: center; margin-bottom: 3rem;">
                                    <h2 style="margin-bottom: 0.5rem;">Order ${order.id}</h2>
                                    <p style="color: var(--gray);">Expected delivery: Tomorrow</p>
                                </div>
                                
                                <div class="tracking-timeline">
                                    ${order.tracking.map((step, i) => `
                                        <div class="timeline-item ${step.completed ? 'completed' : i === activeIndex ? 'active' : ''}">
                                            <div class="timeline-content">
                                                <h4>${step.status}</h4>
                                                <p>${step.date || 'Pending'}</p>
                                            </div>
                                            ${step.date ? `<div class="timeline-time">${step.date.split(' ')[1]}</div>` : ''}
                                        </div>
                                    `).join('')}
                                </div>

                                <div style="margin-top: 3rem; padding: 1.5rem; background: var(--light); border-radius: var(--radius);">
                                    <h4 style="margin-bottom: 1rem;">Shipping Details</h4>
                                    <p style="color: var(--gray);">FedEx Express Tracking: <strong>7845123695</strong></p>
                                    <p style="color: var(--gray); margin-top: 0.5rem;">Estimated delivery: 2-3 business days</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }

            renderOrderLookup() {
                return `
                    <div class="section" style="max-width: 600px; margin: 0 auto;">
                        <div class="card" style="padding: 2rem;">
                            <h2 style="text-align: center; margin-bottom: 1rem;">Track Your Order</h2>
                            <p style="text-align: center; color: var(--gray); margin-bottom: 2rem;">Enter your order ID to track your shipment</p>
                            <div style="display: flex; gap: 1rem;">
                                <input type="text" class="form-input" id="trackOrderId" placeholder="e.g., ORD-2024-001" style="flex: 1;">
                                <button class="btn btn-primary" onclick="app.lookupOrder()">Track</button>
                            </div>
                        </div>
                    </div>
                `;
            }

            renderAdmin() {
                const totalSales = this.state.orders.reduce((sum, o) => sum + o.total, 0);
                const totalOrders = this.state.orders.length;
                const totalCustomers = 156;
                const avgOrder = totalSales / totalOrders;

                return `
                    <div class="section">
                        <div class="container">
                            <h2 style="margin-bottom: 2rem;">Admin Dashboard</h2>
                            
                            <div class="admin-stats grid">
                                <div class="stat-card">
                                    <div class="stat-icon blue">💰</div>
                                    <div>
                                        <div class="stat-value">$${totalSales.toFixed(2)}</div>
                                        <div class="stat-label">Total Revenue</div>
                                    </div>
                                </div>
                                <div class="stat-card">
                                    <div class="stat-icon green">📦</div>
                                    <div>
                                        <div class="stat-value">${totalOrders}</div>
                                        <div class="stat-label">Total Orders</div>
                                    </div>
                                </div>
                                <div class="stat-card">
                                    <div class="stat-icon yellow">👥</div>
                                    <div>
                                        <div class="stat-value">${totalCustomers}</div>
                                        <div class="stat-label">Customers</div>
                                    </div>
                                </div>
                                <div class="stat-card">
                                    <div class="stat-icon red">📊</div>
                                    <div>
                                        <div class="stat-value">$${avgOrder.toFixed(2)}</div>
                                        <div class="stat-label">Avg Order Value</div>
                                    </div>
                                </div>
                            </div>

                            <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
                                <div class="chart-container">
                                    <div class="chart-title">Sales Overview</div>
                                    <canvas id="salesChart" height="300"></canvas>
                                </div>
                                <div class="chart-container">
                                    <div class="chart-title">Order Status</div>
                                    <canvas id="statusChart" height="300"></canvas>
                                </div>
                            </div>

                            <div class="chart-container">
                                <div class="chart-title" style="display: flex; justify-content: space-between; align-items: center;">
                                    <span>Recent Orders</span>
                                    <button class="btn btn-outline" style="padding: 0.5rem 1rem; font-size: 0.875rem;" onclick="app.navigate('inventory')">Manage Inventory</button>
                                </div>
                                <table class="data-table">
                                    <thead>
                                        <tr>
                                            <th>Order ID</th>
                                            <th>Customer</th>
                                            <th>Date</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${this.state.orders.map(o => `
                                            <tr>
                                                <td>${o.id}</td>
                                                <td>Customer #${Math.floor(Math.random() * 1000)}</td>
                                                <td>${o.date}</td>
                                                <td>$${o.total}</td>
                                                <td><span class="status-badge ${o.status === 'delivered' ? 'success' : 'warning'}">${o.status}</span></td>
                                            </tr>
                                        `).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                `;
            }

            renderInventory() {
                return `
                    <div class="section">
                        <div class="container">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                                <h2>Inventory Management</h2>
                                <button class="btn btn-primary" onclick="app.navigate('admin')">Back to Dashboard</button>
                            </div>
                            
                            <div class="inventory-grid grid">
                                ${this.state.inventory.map(item => {
                                    const percent = (item.stock / (item.stock + item.sold)) * 100;
                                    const status = item.stock <= item.threshold ? 'low' : item.stock <= item.threshold * 2 ? 'medium' : 'high';
                                    return `
                                        <div class="inventory-card">
                                            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                                                <h3 style="font-size: 1.125rem;">${item.name}</h3>
                                                <span class="status-badge ${status === 'low' ? 'danger' : status === 'medium' ? 'warning' : 'success'}">
                                                    ${status === 'low' ? 'Low Stock' : status === 'medium' ? 'Medium' : 'In Stock'}
                                                </span>
                                            </div>
                                            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.875rem;">
                                                <span style="color: var(--gray);">Stock: ${item.stock} units</span>
                                                <span style="color: var(--gray);">Sold: ${item.sold}</span>
                                            </div>
                                            <div class="stock-bar">
                                                <div class="stock-fill ${status}" style="width: ${percent}%"></div>
                                            </div>
                                            <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
                                                <button class="btn btn-outline" style="flex: 1; padding: 0.5rem;" onclick="app.updateStock(${item.id}, 10)">+10</button>
                                                <button class="btn btn-outline" style="flex: 1; padding: 0.5rem;" onclick="app.updateStock(${item.id}, -10)">-10</button>
                                            </div>
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                    </div>
                `;
            }

            renderReturns() {
                return `
                    <div class="section">
                        <div class="container" style="max-width: 800px;">
                            <h2 style="text-align: center; margin-bottom: 1rem;">Returns & Refunds</h2>
                            <p style="text-align: center; color: var(--gray); margin-bottom: 3rem;">Hassle-free returns within 30 days of delivery</p>
                            
                            <div class="policy-accordion">
                                <div class="accordion-item active">
                                    <div class="accordion-header" onclick="this.parentElement.classList.toggle('active')">
                                        <span>Return Policy</span>
                                        <span>▼</span>
                                    </div>
                                    <div class="accordion-body">
                                        <p style="color: var(--gray); line-height: 1.8;">We offer a 30-day return policy for all unused items in original packaging. Simply initiate a return from your order history, and we'll provide a prepaid shipping label. Refunds are processed within 5-7 business days after we receive the item.</p>
                                    </div>
                                </div>
                                
                                <div class="accordion-item">
                                    <div class="accordion-header" onclick="this.parentElement.classList.toggle('active')">
                                        <span>How to Initiate a Return</span>
                                        <span>▼</span>
                                    </div>
                                    <div class="accordion-body">
                                        <ol style="color: var(--gray); line-height: 2; padding-left: 1.5rem;">
                                            <li>Go to My Orders and select the order</li>
                                            <li>Click "Return Item" and select reason</li>
                                            <li>Print the prepaid shipping label</li>
                                            <li>Pack the item securely and attach label</li>
                                            <li>Drop off at any authorized location</li>
                                        </ol>
                                    </div>
                                </div>
                                
                                <div class="accordion-item">
                                    <div class="accordion-header" onclick="this.parentElement.classList.toggle('active')">
                                        <span>Refund Methods & Timeline</span>
                                        <span>▼</span>
                                    </div>
                                    <div class="accordion-body">
                                        <p style="color: var(--gray); line-height: 1.8;">Refunds are issued to the original payment method. Credit cards: 5-7 business days. UPI/Wallets: 1-2 business days. Store credit: Instant. Original shipping charges are non-refundable unless the return is due to our error.</p>
                                    </div>
                                </div>
                                
                                <div class="accordion-item">
                                    <div class="accordion-header" onclick="this.parentElement.classList.toggle('active')">
                                        <span>Non-Returnable Items</span>
                                        <span>▼</span>
                                    </div>
                                    <div class="accordion-body">
                                        <ul style="color: var(--gray); line-height: 2; padding-left: 1.5rem;">
                                            <li>Personalized or custom-made products</li>
                                            <li>Perishable goods</li>
                                            <li>Intimate apparel and swimwear</li>
                                            <li>Digital downloads and software</li>
                                            <li>Gift cards</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }

            renderSupport() {
                return `
                    <div class="section">
                        <div class="container" style="max-width: 800px;">
                            <h2 style="text-align: center; margin-bottom: 1rem;">Customer Support</h2>
                            <p style="text-align: center; color: var(--gray); margin-bottom: 3rem;">We're here to help 24/7</p>
                            
                            <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-bottom: 3rem;">
                                <div class="card" style="padding: 2rem; text-align: center;">
                                    <div style="font-size: 3rem; margin-bottom: 1rem;">💬</div>
                                    <h3>Live Chat</h3>
                                    <p style="color: var(--gray); margin: 0.5rem 0;">Average response: 2 minutes</p>
                                    <button class="btn btn-primary" onclick="app.toggleChat()">Start Chat</button>
                                </div>
                                <div class="card" style="padding: 2rem; text-align: center;">
                                    <div style="font-size: 3rem; margin-bottom: 1rem;">📧</div>
                                    <h3>Email Support</h3>
                                    <p style="color: var(--gray); margin: 0.5rem 0;">Response within 24 hours</p>
                                    <button class="btn btn-outline" onclick="app.showToast('Email: support@nexusshop.com', 'info')">Get Email</button>
                                </div>
                                <div class="card" style="padding: 2rem; text-align: center;">
                                    <div style="font-size: 3rem; margin-bottom: 1rem;">📞</div>
                                    <h3>Phone Support</h3>
                                    <p style="color: var(--gray); margin: 0.5rem 0;">Mon-Fri, 9AM-6PM EST</p>
                                    <button class="btn btn-outline" onclick="app.showToast('Call: 1-800-NEXUS-01', 'info')">Get Number</button>
                                </div>
                            </div>

                            <div class="card" style="padding: 2rem;">
                                <h3 style="margin-bottom: 1.5rem;">Frequently Asked Questions</h3>
                                <div class="policy-accordion">
                                    <div class="accordion-item">
                                        <div class="accordion-header" onclick="this.parentElement.classList.toggle('active')">
                                            <span>How do I track my order?</span>
                                            <span>▼</span>
                                        </div>
                                        <div class="accordion-body">
                                            <p style="color: var(--gray);">You can track your order by clicking on "Track Order" in the header or visiting your account page and selecting the order you want to track.</p>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <div class="accordion-header" onclick="this.parentElement.classList.toggle('active')">
                                            <span>What payment methods do you accept?</span>
                                            <span>▼</span>
                                        </div>
                                        <div class="accordion-body">
                                            <p style="color: var(--gray);">We accept all major credit cards, UPI, digital wallets (Paytm, Google Pay), and net banking. All transactions are secured with 256-bit SSL encryption.</p>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <div class="accordion-header" onclick="this.parentElement.classList.toggle('active')">
                                            <span>How do I use a coupon code?</span>
                                            <span>▼</span>
                                        </div>
                                        <div class="accordion-body">
                                            <p style="color: var(--gray);">Enter your coupon code in the cart page or during checkout in the designated field. Click "Apply" and the discount will be automatically calculated.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }

            renderDeals() {
                const deals = this.products.filter(p => p.originalPrice - p.price > 50);
                return `
                    <div class="section">
                        <div class="container">
                            <div style="background: linear-gradient(135deg, var(--danger), #dc2626); color: white; padding: 3rem; border-radius: var(--radius); text-align: center; margin-bottom: 3rem;">
                                <h1 style="font-size: 3rem; margin-bottom: 1rem;">🔥 Flash Deals</h1>
                                <p style="font-size: 1.25rem; opacity: 0.9;">Up to 50% off on premium products. Limited time only!</p>
                                <div style="margin-top: 2rem; font-size: 1.5rem; font-weight: 700;" id="dealTimer">Ends in: 04:59:59</div>
                            </div>
                            
                            <div class="product-grid grid">
                                ${deals.map(p => this.renderProductCard(p)).join('')}
                            </div>
                        </div>
                    </div>
                `;
            }

            // Helper Methods
            getRecommendations() {
                // Simple recommendation algorithm based on cart and views
                const cartCategories = this.state.cart.map(item => item.category);
                if (cartCategories.length === 0) {
                    return this.products.slice(0, 4);
                }
                return this.products.filter(p => cartCategories.includes(p.category)).slice(0, 4);
            }

            renderCharts() {
                setTimeout(() => {
                    const salesCtx = document.getElementById('salesChart');
                    const statusCtx = document.getElementById('statusChart');
                    
                    if (salesCtx) {
                        const ctx = salesCtx.getContext('2d');
                        // Simple bar chart using canvas
                        const data = [1200, 1900, 1500, 2200, 1800, 2500];
                        const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
                        const max = Math.max(...data);
                        const barWidth = 40;
                        const gap = 30;
                        
                        ctx.fillStyle = '#e5e7eb';
                        ctx.fillRect(0, 0, salesCtx.width, salesCtx.height);
                        
                        data.forEach((val, i) => {
                            const height = (val / max) * 200;
                            const x = i * (barWidth + gap) + 40;
                            const y = 250 - height;
                            
                            // Gradient
                            const grad = ctx.createLinearGradient(0, y, 0, 250);
                            grad.addColorStop(0, '#2563eb');
                            grad.addColorStop(1, '#93c5fd');
                            
                            ctx.fillStyle = grad;
                            ctx.fillRect(x, y, barWidth, height);
                            
                            ctx.fillStyle = '#374151';
                            ctx.font = '12px sans-serif';
                            ctx.fillText(labels[i], x + 10, 270);
                            ctx.fillText('$' + val, x + 5, y - 10);
                        });
                    }

                    if (statusCtx) {
                        const ctx = statusCtx.getContext('2d');
                        const data = [65, 25, 10];
                        const colors = ['#10b981', '#f59e0b', '#ef4444'];
                        const labels = ['Delivered', 'Shipped', 'Pending'];
                        
                        let startAngle = 0;
                        const centerX = statusCtx.width / 2;
                        const centerY = statusCtx.height / 2;
                        const radius = 80;
                        
                        data.forEach((val, i) => {
                            const slice = (val / 100) * 2 * Math.PI;
                            
                            ctx.beginPath();
                            ctx.moveTo(centerX, centerY);
                            ctx.arc(centerX, centerY, radius, startAngle, startAngle + slice);
                            ctx.closePath();
                            ctx.fillStyle = colors[i];
                            ctx.fill();
                            
                            startAngle += slice;
                        });
                        
                        // Legend
                        labels.forEach((label, i) => {
                            ctx.fillStyle = colors[i];
                            ctx.fillRect(20, 200 + i * 25, 15, 15);
                            ctx.fillStyle = '#374151';
                            ctx.fillText(label + ' (' + data[i] + '%)', 45, 212 + i * 25);
                        });
                    }
                }, 100);
            }

            // Actions & Event Handlers
            filterCategory(category) {
                this.navigate('shop', { category });
            }

            toggleFilter(category) {
                const idx = this.state.filters.categories.indexOf(category);
                if (idx > -1) {
                    this.state.filters.categories.splice(idx, 1);
                } else {
                    this.state.filters.categories.push(category);
                }
                this.navigate('shop');
            }

            updatePriceRange(value) {
                this.state.filters.priceRange[1] = parseInt(value);
                document.getElementById('priceValue').textContent = '$' + value;
            }

            setRating(rating) {
                this.state.filters.rating = rating;
                this.navigate('shop');
            }

            clearFilters() {
                this.state.filters = { categories: [], priceRange: [0, 2000], rating: 0 };
                this.navigate('shop');
            }

            handleSearch(query) {
                const suggestions = document.getElementById('searchSuggestions');
                if (!query) {
                    suggestions.classList.remove('active');
                    return;
                }

                const matches = this.products.filter(p => 
                    p.name.toLowerCase().includes(query.toLowerCase()) ||
                    p.category.toLowerCase().includes(query.toLowerCase())
                ).slice(0, 5);

                if (matches.length > 0) {
                    suggestions.innerHTML = matches.map(p => `
                        <div class="suggestion-item" onclick="app.navigate('product', {product: app.products.find(x => x.id === ${p.id})})">
                            <img src="${p.image}" class="suggestion-img" alt="">
                            <div>
                                <div style="font-weight: 500;">${p.name}</div>
                                <div style="color: var(--gray); font-size: 0.875rem;">$${p.price}</div>
                            </div>
                        </div>
                    `).join('');
                    suggestions.classList.add('active');
                } else {
                    suggestions.innerHTML = '<div class="suggestion-item">No results found</div>';
                    suggestions.classList.add('active');
                }
            }

            changeImage(src, thumb) {
                document.getElementById('mainImage').src = src;
                document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            }

            updateQty(delta) {
                const input = document.getElementById('qtyInput');
                const newVal = parseInt(input.value) + delta;
                if (newVal >= 1 && newVal <= parseInt(input.max)) {
                    input.value = newVal;
                }
            }

            addToCart(productId, qty = 1) {
                const product = this.products.find(p => p.id === productId);
                const existing = this.state.cart.find(item => item.id === productId);
                
                if (existing) {
                    existing.qty += qty;
                } else {
                    this.state.cart.push({ ...product, qty });
                }
                
                this.saveCart();
                this.updateCartCount();
                this.showToast(`${product.name} added to cart`, 'success');
            }

            updateCartQty(productId, delta) {
                const item = this.state.cart.find(i => i.id === productId);
                if (item) {
                    item.qty += delta;
                    if (item.qty <= 0) {
                        this.removeFromCart(productId);
                        return;
                    }
                    this.saveCart();
                    this.navigate('cart');
                }
            }

            removeFromCart(productId) {
                this.state.cart = this.state.cart.filter(item => item.id !== productId);
                this.saveCart();
                this.updateCartCount();
                this.navigate('cart');
                this.showToast('Item removed from cart', 'info');
            }

            saveCart() {
                localStorage.setItem('nexus_cart', JSON.stringify(this.state.cart));
            }

            updateCartCount() {
                const count = this.state.cart.reduce((sum, item) => sum + item.qty, 0);
                document.getElementById('cartCount').textContent = count;
            }

            toggleCart() {
                const panel = document.getElementById('cartPanel');
                const isOpen = panel.classList.contains('active');
                
                if (!isOpen) {
                    this.renderCartItems();
                    panel.classList.add('active');
                } else {
                    panel.classList.remove('active');
                }
            }

            renderCartItems() {
                const container = document.getElementById('cartItems');
                const totalEl = document.getElementById('cartTotal');
                
                if (this.state.cart.length === 0) {
                    container.innerHTML = '<div style="text-align: center; padding: 3rem 1rem; color: var(--gray);">Your cart is empty</div>';
                    totalEl.textContent = '$0.00';
                    return;
                }

                const total = this.state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
                
                container.innerHTML = this.state.cart.map(item => `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}">
                        <div class="cart-item-details">
                            <div class="cart-item-title">${item.name}</div>
                            <div style="color: var(--gray); font-size: 0.875rem;">Qty: ${item.qty}</div>
                            <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
                        </div>
                        <button class="remove-item" onclick="app.removeFromCart(${item.id})">✕</button>
                    </div>
                `).join('');
                
                totalEl.textContent = '$' + total.toFixed(2);
            }

            toggleWishlist() {
                const panel = document.getElementById('wishlistPanel');
                const isOpen = panel.style.right === '0px';
                panel.style.right = isOpen ? '-450px' : '0';
                if (!isOpen) this.renderWishlistItems();
            }

            toggleWishlistItem(productId) {
                const idx = this.state.wishlist.findIndex(w => w.id === productId);
                const product = this.products.find(p => p.id === productId);
                
                if (idx > -1) {
                    this.state.wishlist.splice(idx, 1);
                    this.showToast('Removed from wishlist', 'info');
                } else {
                    this.state.wishlist.push(product);
                    this.showToast('Added to wishlist', 'success');
                }
                
                localStorage.setItem('nexus_wishlist', JSON.stringify(this.state.wishlist));
                this.updateWishlistCount();
                
                // Re-render if on product page
                if (this.state.currentView === 'product') {
                    this.navigate('product', { product });
                }
            }

            renderWishlistItems() {
                const container = document.getElementById('wishlistItems');
                if (this.state.wishlist.length === 0) {
                    container.innerHTML = '<div style="text-align: center; padding: 3rem 1rem; color: var(--gray);">Your wishlist is empty</div>';
                    return;
                }
                
                container.innerHTML = this.state.wishlist.map(item => `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}">
                        <div class="cart-item-details">
                            <div class="cart-item-title">${item.name}</div>
                            <div class="cart-item-price">$${item.price}</div>
                            <button class="btn btn-primary" style="margin-top: 0.5rem; padding: 0.5rem 1rem; font-size: 0.875rem;" onclick="app.addToCart(${item.id})">
                                Add to Cart
                            </button>
                        </div>
                        <button class="remove-item" onclick="app.toggleWishlistItem(${item.id})">✕</button>
                    </div>
                `).join('');
            }

            updateWishlistCount() {
                document.getElementById('wishlistCount').textContent = this.state.wishlist.length;
            }

            buyNow(productId) {
                this.addToCart(productId);
                this.navigate('checkout');
            }

            applyCoupon() {
                const code = document.getElementById('couponCode').value.toUpperCase();
                const coupon = this.state.coupons[code];
                
                if (!coupon) {
                    this.showToast('Invalid coupon code', 'error');
                    return;
                }
                
                const subtotal = this.state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
                if (subtotal < coupon.min) {
                    this.showToast(`Minimum order value $${coupon.min} required`, 'error');
                    return;
                }
                
                this.state.appliedCoupon = code;
                this.showToast(`Coupon ${code} applied!`, 'success');
                this.navigate('cart');
            }

            calculateDiscount(subtotal) {
                const coupon = this.state.coupons[this.state.appliedCoupon];
                if (!coupon) return 0;
                return coupon.type === 'percent' ? (subtotal * coupon.discount / 100) : coupon.discount;
            }

            selectPayment(radio) {
                document.querySelectorAll('.payment-method').forEach(el => el.classList.remove('selected'));
                radio.closest('.payment-method').classList.add('selected');
            }

            placeOrder() {
                const total = this.state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0) - 
                             (this.state.appliedCoupon ? this.calculateDiscount(this.state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0)) : 0);
                
                const newOrder = {
                    id: `ORD-2024-${String(this.state.orders.length + 1).padStart(3, '0')}`,
                    date: new Date().toISOString().split('T')[0],
                    total: total,
                    status: 'processing',
                    items: this.state.cart.map(item => ({ name: item.name, qty: item.qty })),
                    tracking: [
                        { status: "Order Placed", date: new Date().toLocaleString(), completed: true },
                        { status: "Processing", date: null, completed: false },
                        { status: "Shipped", date: null, completed: false },
                        { status: "Out for Delivery", date: null, completed: false },
                        { status: "Delivered", date: null, completed: false }
                    ]
                };
                
                this.state.orders.unshift(newOrder);
                localStorage.setItem('nexus_orders', JSON.stringify(this.state.orders));
                
                // Clear cart
                this.state.cart = [];
                this.saveCart();
                this.updateCartCount();
                this.state.appliedCoupon = null;
                
                this.showToast('Order placed successfully!', 'success');
                this.navigate('track', { order: newOrder });
            }

            lookupOrder() {
                const orderId = document.getElementById('trackOrderId').value;
                const order = this.state.orders.find(o => o.id === orderId);
                if (order) {
                    this.navigate('track', { order });
                } else {
                    this.showToast('Order not found', 'error');
                }
            }

            setReviewStar(rating) {
                document.querySelectorAll('#starInput .star').forEach((star, i) => {
                    star.classList.toggle('active', i < rating);
                });
            }

            submitReview() {
                this.showToast('Review submitted for moderation', 'success');
                document.getElementById('reviewText').value = '';
                document.querySelectorAll('#starInput .star').forEach(s => s.classList.remove('active'));
            }

            // Account Methods
            login(e) {
                e.preventDefault();
                this.state.user = { name: 'John Doe', email: 'john@example.com', role: 'admin' };
                localStorage.setItem('nexus_user', JSON.stringify(this.state.user));
                this.showToast('Welcome back, John!', 'success');
                document.getElementById('adminBtn').style.display = 'block';
                this.navigate('account');
            }

            socialLogin(provider) {
                this.state.user = { name: 'John Doe', email: 'john@gmail.com', role: 'customer' };
                localStorage.setItem('nexus_user', JSON.stringify(this.state.user));
                this.showToast(`Logged in with ${provider}`, 'success');
                this.navigate('account');
            }

            logout() {
                this.state.user = null;
                localStorage.removeItem('nexus_user');
                this.showToast('Logged out successfully', 'info');
                document.getElementById('adminBtn').style.display = 'none';
                this.navigate('home');
            }

            showAccountTab(tab) {
                const content = document.getElementById('accountTabContent');
                document.querySelectorAll('.account-menu a').forEach(a => a.classList.remove('active'));
                event.target.closest('a').classList.add('active');
                
                switch(tab) {
                    case 'profile':
                        content.innerHTML = this.renderProfileTab();
                        break;
                    case 'orders':
                        content.innerHTML = this.renderOrdersList();
                        break;
                    case 'addresses':
                        content.innerHTML = this.renderAddresses();
                        break;
                    case 'payments':
                        content.innerHTML = this.renderSavedPayments();
                        break;
                    case 'loyalty':
                        content.innerHTML = this.renderLoyalty();
                        break;
                }
            }

            renderOrdersList() {
                return `
                    <h2 style="margin-bottom: 1.5rem;">Order History</h2>
                    ${this.state.orders.map(o => `
                        <div style="border: 1px solid var(--light); border-radius: var(--radius); padding: 1rem; margin-bottom: 1rem;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                                <strong>${o.id}</strong>
                                <span class="status-badge ${o.status === 'delivered' ? 'success' : 'warning'}">${o.status}</span>
                            </div>
                            <div style="color: var(--gray); font-size: 0.875rem; margin-bottom: 0.5rem;">${o.date}</div>
                            <div style="font-weight: 600;">$${o.total}</div>
                        </div>
                    `).join('')}
                `;
            }

            renderAddresses() {
                return `
                    <h2 style="margin-bottom: 1.5rem;">Saved Addresses</h2>
                    <div style="border: 2px solid var(--primary); border-radius: var(--radius); padding: 1.5rem; margin-bottom: 1rem; position: relative;">
                        <div style="position: absolute; top: 1rem; right: 1rem; background: var(--primary); color: white; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem;">Default</div>
                        <h4>Home</h4>
                        <p style="color: var(--gray); margin-top: 0.5rem;">123 Main Street, Apt 4B<br>New York, NY 10001<br>United States</p>
                        <div style="margin-top: 1rem;">
                            <button class="btn btn-outline" style="padding: 0.5rem 1rem; font-size: 0.875rem;">Edit</button>
                        </div>
                    </div>
                    <button class="btn btn-outline" style="width: 100%; padding: 1rem; border-style: dashed;">+ Add New Address</button>
                `;
            }

            renderSavedPayments() {
                return `
                    <h2 style="margin-bottom: 1.5rem;">Saved Payment Methods</h2>
                    <div style="display: flex; align-items: center; gap: 1rem; border: 1px solid var(--light); padding: 1rem; border-radius: var(--radius); margin-bottom: 1rem;">
                        <span style="font-size: 2rem;">💳</span>
                        <div style="flex: 1;">
                            <div style="font-weight: 600;">Visa ending in 4242</div>
                            <div style="color: var(--gray); font-size: 0.875rem;">Expires 12/25</div>
                        </div>
                        <button style="background: none; border: none; color: var(--danger); cursor: pointer;">Remove</button>
                    </div>
                    <div style="display: flex; align-items: center; gap: 1rem; border: 1px solid var(--light); padding: 1rem; border-radius: var(--radius); margin-bottom: 1rem;">
                        <span style="font-size: 2rem;">📱</span>
                        <div style="flex: 1;">
                            <div style="font-weight: 600;">Google Pay</div>
                            <div style="color: var(--gray); font-size: 0.875rem;">john@gmail.com</div>
                        </div>
                        <button style="background: none; border: none; color: var(--danger); cursor: pointer;">Remove</button>
                    </div>
                    <button class="btn btn-outline" style="width: 100%; padding: 1rem; border-style: dashed;">+ Add Payment Method</button>
                `;
            }

            renderLoyalty() {
                return `
                    <h2 style="margin-bottom: 1.5rem;">Loyalty Program</h2>
                    <div style="background: linear-gradient(135deg, var(--primary), var(--primary-dark)); color: white; padding: 2rem; border-radius: var(--radius); margin-bottom: 2rem;">
                        <div style="font-size: 1.125rem; opacity: 0.9; margin-bottom: 0.5rem;">Your Points</div>
                        <div style="font-size: 3rem; font-weight: 700;">2,450</div>
                        <div style="margin-top: 1rem; font-size: 0.875rem; opacity: 0.9;">You're 550 points away from Gold status</div>
                        <div style="width: 100%; height: 8px; background: rgba(255,255,255,0.3); border-radius: 4px; margin-top: 1rem;">
                            <div style="width: 82%; height: 100%; background: white; border-radius: 4px;"></div>
                        </div>
                    </div>
                    
                    <h3 style="margin-bottom: 1rem;">Available Rewards</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                        <div style="border: 1px solid var(--light); padding: 1.5rem; border-radius: var(--radius); text-align: center;">
                            <div style="font-size: 2rem; margin-bottom: 0.5rem;">🎁</div>
                            <div style="font-weight: 600;">$10 Off</div>
                            <div style="color: var(--gray); font-size: 0.875rem; margin: 0.5rem 0;">1,000 points</div>
                            <button class="btn btn-primary" style="width: 100%; padding: 0.5rem;">Redeem</button>
                        </div>
                        <div style="border: 1px solid var(--light); padding: 1.5rem; border-radius: var(--radius); text-align: center;">
                            <div style="font-size: 2rem; margin-bottom: 0.5rem;">📦</div>
                            <div style="font-weight: 600;">Free Shipping</div>
                            <div style="color: var(--gray); font-size: 0.875rem; margin: 0.5rem 0;">500 points</div>
                            <button class="btn btn-primary" style="width: 100%; padding: 0.5rem;">Redeem</button>
                        </div>
                    </div>
                `;
            }

            updateProfile(e) {
                e.preventDefault();
                this.showToast('Profile updated successfully', 'success');
            }

            subscribe(e) {
                e.preventDefault();
                this.showToast('Subscribed successfully! Check your inbox.', 'success');
                e.target.reset();
            }

            // Inventory Management
            updateStock(itemId, delta) {
                const item = this.state.inventory.find(i => i.id === itemId);
                if (item) {
                    item.stock += delta;
                    if (item.stock < 0) item.stock = 0;
                    localStorage.setItem('nexus_inventory', JSON.stringify(this.state.inventory));
                    this.navigate('inventory');
                    this.showToast(`Stock updated for ${item.name}`, 'success');
                }
            }

            simulateInventoryUpdate() {
                // Simulate real-time stock changes
                this.state.inventory.forEach(item => {
                    if (Math.random() > 0.7) {
                        item.sold += Math.floor(Math.random() * 3);
                        item.stock = Math.max(0, item.stock - Math.floor(Math.random() * 2));
                    }
                });
                localStorage.setItem('nexus_inventory', JSON.stringify(this.state.inventory));
                if (this.state.currentView === 'inventory') {
                    this.navigate('inventory');
                }
            }

            // Chatbot
            toggleChat() {
                const window = document.getElementById('chatWindow');
                window.classList.toggle('active');
            }

            sendMessage() {
                const input = document.getElementById('chatInput');
                const message = input.value.trim();
                if (!message) return;

                const messages = document.getElementById('chatMessages');
                messages.innerHTML += `<div class="chat-message user">${message}</div>`;
                input.value = '';
                messages.scrollTop = messages.scrollHeight;

                // Simple bot response logic
                setTimeout(() => {
                    const responses = {
                        'order': 'You can track your order by going to "My Orders" or using the "Track Order" feature.',
                        'return': 'We offer 30-day returns. Please visit the Returns section for more details.',
                        'payment': 'We accept Credit Cards, UPI, and digital wallets. All payments are SSL secured.',
                        'shipping': 'We offer free shipping on orders over $50. Standard delivery takes 3-5 business days.',
                        'coupon': 'Try codes SAVE20, FLAT50, or WELCOME for discounts!'
                    };
                    
                    let response = "I'm not sure about that. Would you like to speak with a human agent?";
                    for (const [key, val] of Object.entries(responses)) {
                        if (message.toLowerCase().includes(key)) {
                            response = val;
                            break;
                        }
                    }
                    
                    messages.innerHTML += `<div class="chat-message bot">${response}</div>`;
                    messages.scrollTop = messages.scrollHeight;
                }, 1000);
            }

            // UI Utilities
            toggleMobileMenu() {
                document.getElementById('mobileNav').classList.toggle('active');
                document.getElementById('mobileOverlay').classList.toggle('active');
            }

            showToast(message, type = 'info') {
                const container = document.getElementById('toastContainer');
                const toast = document.createElement('div');
                toast.className = `toast ${type}`;
                toast.textContent = message;
                container.appendChild(toast);
                
                setTimeout(() => toast.classList.add('show'), 10);
                setTimeout(() => {
                    toast.classList.remove('show');
                    setTimeout(() => toast.remove(), 300);
                }, 3000);
            }

            closeModal(id) {
                document.getElementById(id).classList.remove('active');
            }
        }

        // Initialize App
        const app = new NexusShop();

        // Expose to window for debugging
        window.app = app;
