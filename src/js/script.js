    // Toggle menu mobile
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Toggle dropdown mobile
    const mobileDropdownButton = document.querySelector('.mobile-dropdown-button');
    const mobileDropdownContent = document.querySelector('.mobile-dropdown-content');
    const mobileDropdownIcon = document.querySelector('.mobile-dropdown-icon');

    if (mobileDropdownButton && mobileDropdownContent && mobileDropdownIcon) {
        mobileDropdownButton.addEventListener('click', () => {
            mobileDropdownContent.classList.toggle('hidden');
            mobileDropdownIcon.classList.toggle('rotate-180');
        });
    }
    
    // Scroll effect for navbar
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('nav');
        if (window.scrollY > 100) {
            // When scrolled down, add background and shadow
            navbar.classList.add('bg-white', 'shadow-md', 'backdrop-blur-md');
            navbar.classList.remove('bg-transparent');
        } else {
            // When at the top, remove background and shadow
            navbar.classList.remove('bg-white', 'shadow-md', 'backdrop-blur-md');
            navbar.classList.add('bg-transparent');
        }
    });

    // Trigger the scroll event once to set the initial state
    window.dispatchEvent(new Event('scroll'));
    
    document.addEventListener('DOMContentLoaded', function() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        for (const link of links) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }
    });