// ================================
// GALLERY & LIGHTBOX FUNCTIONALITY
// ================================

document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('galleryModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const modalClose = document.querySelector('.modal-close');
    const modalPrev = document.getElementById('modalPrev');
    const modalNext = document.getElementById('modalNext');

    let currentImageIndex = 0;

    // Gallery image data
    const galleryImages = [
        {
            src: 'images/source/hero-1.jpg',
            alt: 'Café Joker\'s Außenansicht',
            caption: 'Willkommen bei Café Joker\'s - Ihre gemütliche Oase in Berlin-Pankow'
        },
        {
            src: 'images/source/interior-1.jpg',
            alt: 'Café Joker\'s Innenraum',
            caption: 'Gemütliche Atmosphäre zum Entspannen und Genießen'
        },
        {
            src: 'images/source/exterior-1.jpg',
            alt: 'Café Joker\'s Ambiente',
            caption: 'Perfekte Lage direkt am U-Bahnhof Pankow'
        }
    ];

    // Open modal on gallery item click
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            currentImageIndex = index;
            openModal();
        });

        // Keyboard accessibility
        item.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                currentImageIndex = index;
                openModal();
            }
        });

        // Add tabindex for keyboard navigation
        item.setAttribute('tabindex', '0');
    });

    // Open modal function
    function openModal() {
        displayImage(currentImageIndex);
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        // Focus on modal for accessibility
        modal.focus();

        // Add fade-in animation
        setTimeout(() => {
            modal.style.opacity = '1';
        }, 10);
    }

    // Close modal function
    function closeModal() {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }, 300);
    }

    // Display image in modal
    function displayImage(index) {
        const image = galleryImages[index];
        modalImage.src = image.src;
        modalImage.alt = image.alt;
        modalCaption.textContent = image.caption;

        // Update navigation button states
        updateNavigationButtons();

        // Preload adjacent images for smooth navigation
        preloadAdjacentImages(index);
    }

    // Update navigation buttons
    function updateNavigationButtons() {
        // Always show navigation buttons if there are multiple images
        if (galleryImages.length <= 1) {
            modalPrev.style.display = 'none';
            modalNext.style.display = 'none';
        } else {
            modalPrev.style.display = 'block';
            modalNext.style.display = 'block';

            // Optional: disable buttons at edges (or enable looping)
            // For looping behavior, keep both enabled
            modalPrev.style.opacity = currentImageIndex === 0 ? '0.5' : '1';
            modalNext.style.opacity = currentImageIndex === galleryImages.length - 1 ? '0.5' : '1';
        }
    }

    // Preload adjacent images
    function preloadAdjacentImages(index) {
        const preloadIndices = [index - 1, index + 1];

        preloadIndices.forEach(i => {
            if (i >= 0 && i < galleryImages.length) {
                const img = new Image();
                img.src = galleryImages[i].src;
            }
        });
    }

    // Navigate to previous image
    function showPreviousImage() {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        displayImage(currentImageIndex);

        // Add animation
        animateImageTransition('prev');
    }

    // Navigate to next image
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        displayImage(currentImageIndex);

        // Add animation
        animateImageTransition('next');
    }

    // Animate image transition
    function animateImageTransition(direction) {
        const translateValue = direction === 'next' ? '-20px' : '20px';

        modalImage.style.transform = `translateX(${translateValue})`;
        modalImage.style.opacity = '0.5';

        setTimeout(() => {
            modalImage.style.transform = 'translateX(0)';
            modalImage.style.opacity = '1';
        }, 50);
    }

    // Event listeners
    modalClose.addEventListener('click', closeModal);

    modalPrev.addEventListener('click', function(e) {
        e.stopPropagation();
        showPreviousImage();
    });

    modalNext.addEventListener('click', function(e) {
        e.stopPropagation();
        showNextImage();
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (modal.style.display === 'block') {
            switch(e.key) {
                case 'Escape':
                    closeModal();
                    break;
                case 'ArrowLeft':
                    showPreviousImage();
                    break;
                case 'ArrowRight':
                    showNextImage();
                    break;
            }
        }
    });

    // Touch swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    modalImage.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    modalImage.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const swipeThreshold = 50;

        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe left - next image
            showNextImage();
        }

        if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe right - previous image
            showPreviousImage();
        }
    }

    // Gallery item hover effects
    galleryItems.forEach(item => {
        const img = item.querySelector('img');

        item.addEventListener('mouseenter', function() {
            img.style.transform = 'scale(1.1)';
        });

        item.addEventListener('mouseleave', function() {
            img.style.transform = 'scale(1)';
        });
    });

    // Smooth modal image transitions
    modalImage.style.transition = 'transform 0.3s ease, opacity 0.3s ease';

    // Prevent right-click on gallery images (optional, for image protection)
    galleryItems.forEach(item => {
        item.addEventListener('contextmenu', function(e) {
            // Uncomment to prevent right-click
            // e.preventDefault();
        });
    });

    // Add loading animation for modal images
    modalImage.addEventListener('load', function() {
        this.classList.add('loaded');
    });

    // Accessibility: Add aria labels
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'modalCaption');

    modalClose.setAttribute('aria-label', 'Galerie schließen');
    modalPrev.setAttribute('aria-label', 'Vorheriges Bild');
    modalNext.setAttribute('aria-label', 'Nächstes Bild');

    // Console log for debugging
    console.log(`Gallery initialized with ${galleryImages.length} images`);
});

// ================================
// GALLERY GRID ANIMATIONS
// ================================

// Observe gallery items for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const galleryObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            galleryObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply observer to all gallery items
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.gallery-item');

    items.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        galleryObserver.observe(item);
    });
});
