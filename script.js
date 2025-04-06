
        // Mobile menu toggle
        const mobileMenu = document.querySelector('.mobile-menu');
        const navLinks = document.querySelector('.nav-links');

        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when a link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            const backToTop = document.querySelector('.back-to-top');
            
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
                backToTop.classList.add('show');
            } else {
                navbar.classList.remove('scrolled');
                backToTop.classList.remove('show');
            }
        });

        // Back to top