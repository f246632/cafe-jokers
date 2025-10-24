// ================================
// CAFÉ JOKER'S - MAIN JAVASCRIPT
// ================================

document.addEventListener('DOMContentLoaded', function() {
    // ================================
    // Navigation
    // ================================
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Sticky navbar on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active nav link based on scroll position
        updateActiveNavLink();
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - navbar.offsetHeight;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update active navigation link
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - navbar.offsetHeight - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    }

    // ================================
    // Menu Section
    // ================================
    const menuTabs = document.querySelectorAll('.menu-tab');
    const menuContent = document.getElementById('menuContent');

    // Load menu data
    fetch('data/menu.json')
        .then(response => response.json())
        .then(menuData => {
            // Store menu data globally
            window.menuData = menuData;

            // Display coffee category by default
            displayMenuCategory('coffee', menuData);

            // Add click event listeners to menu tabs
            menuTabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    const category = this.getAttribute('data-category');

                    // Update active tab
                    menuTabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');

                    // Display selected category
                    displayMenuCategory(category, menuData);
                });
            });
        })
        .catch(error => {
            console.error('Error loading menu:', error);
            menuContent.innerHTML = '<p>Menü wird geladen...</p>';
        });

    function displayMenuCategory(category, menuData) {
        const items = menuData[category] || [];

        if (items.length === 0) {
            menuContent.innerHTML = '<p>Keine Artikel in dieser Kategorie.</p>';
            return;
        }

        const menuItemsHTML = items.map(item => `
            <div class="menu-item fade-in">
                <div class="menu-item-info">
                    <h4 class="menu-item-name">${item.name}</h4>
                    <p class="menu-item-description">${item.description}</p>
                </div>
                <div class="menu-item-price">${item.price}</div>
            </div>
        `).join('');

        menuContent.innerHTML = `<div class="menu-items">${menuItemsHTML}</div>`;

        // Trigger fade-in animation
        setTimeout(() => {
            menuContent.querySelectorAll('.menu-item').forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                }, index * 50);
            });
        }, 50);
    }

    // ================================
    // Reviews Section
    // ================================
    const reviewsGrid = document.getElementById('reviewsGrid');

    fetch('data/reviews.json')
        .then(response => response.json())
        .then(reviewsData => {
            const reviewsHTML = reviewsData.reviews.map(review => `
                <div class="review-card slide-up">
                    <div class="review-header">
                        <div class="review-author">${review.author}</div>
                        <div class="review-stars">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
                    </div>
                    <p class="review-text">"${review.text}"</p>
                    <div class="review-date">${review.date}</div>
                </div>
            `).join('');

            reviewsGrid.innerHTML = reviewsHTML;

            // Trigger slide-up animation
            observeElements('.review-card');
        })
        .catch(error => {
            console.error('Error loading reviews:', error);
            reviewsGrid.innerHTML = '<p>Bewertungen werden geladen...</p>';
        });

    // ================================
    // Contact Form
    // ================================
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Validate form
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            alert('Bitte füllen Sie alle erforderlichen Felder aus.');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
            return;
        }

        // In a real application, you would send this to a server
        console.log('Form submitted:', formData);

        // Show success message
        alert('Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.');

        // Reset form
        contactForm.reset();
    });

    // ================================
    // Scroll Animations
    // ================================
    function observeElements(selector) {
        const elements = document.querySelectorAll(selector);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    }

    // Observe various elements for scroll animations
    observeElements('.feature-item');
    observeElements('.info-card');
    observeElements('.menu-item');

    // ================================
    // Scroll to Top Button (Optional)
    // ================================
    let scrollToTopBtn = null;

    function createScrollToTopButton() {
        scrollToTopBtn = document.createElement('button');
        scrollToTopBtn.innerHTML = '↑';
        scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
        scrollToTopBtn.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: var(--primary-color);
            color: white;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 999;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        `;

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        document.body.appendChild(scrollToTopBtn);
    }

    createScrollToTopButton();

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });

    // ================================
    // Loading Animation
    // ================================
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    // ================================
    // Performance: Lazy Loading Images
    // ================================
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // ================================
    // Accessibility: Skip to Content
    // ================================
    function createSkipLink() {
        const skipLink = document.createElement('a');
        skipLink.href = '#home';
        skipLink.textContent = 'Zum Hauptinhalt springen';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 0;
            background: var(--primary-color);
            color: white;
            padding: 8px;
            text-decoration: none;
            z-index: 9999;
        `;
        skipLink.addEventListener('focus', function() {
            this.style.top = '0';
        });
        skipLink.addEventListener('blur', function() {
            this.style.top = '-40px';
        });
        document.body.insertBefore(skipLink, document.body.firstChild);
    }

    createSkipLink();

    // ================================
    // Console Branding
    // ================================
    console.log('%c🎨 Café Joker\'s Website', 'font-size: 20px; font-weight: bold; color: #8B4513;');
    console.log('%c✨ Made with love in Berlin', 'font-size: 14px; color: #666;');
});
