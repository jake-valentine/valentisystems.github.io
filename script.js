 // Sticky header shadow on scroll
        window.addEventListener('scroll', function() {
            var header = document.querySelector('header');
            if (window.scrollY > 0) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Animations on scroll for sections
        const sections = document.querySelectorAll('section, footer');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                } else {
                    entry.target.classList.remove('animate'); // Allows re-animation if scrolled back
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of element is visible
        });

        sections.forEach(section => {
            observer.observe(section);
        });
