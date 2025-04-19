
    // Toggle Navbar Icon
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-xmark'); // Make sure you include this icon in your HTML or use 'fa-times'
    });

    // Scroll Active Section Link
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            }
        });

        // Sticky Header
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);

        // Close navbar when scrolling
        navbar.classList.remove('active');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    };

    // Typed.js for animated roles
    const typed = new Typed(".multiple-text", {
        strings: ["Frontend Developer", "UI/UX Designer", "App Developer", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        backDelay: 1000,
        loop: true
    });

    // Scroll Reveal
    const sr = ScrollReveal({
        distance: '50px',
        duration: 2000,
        easing: 'ease-out',
        reset: true
    });

    sr.reveal('.home-content', { origin: 'top', delay: 200 });
    sr.reveal('.home-img', { origin: 'right', delay: 300 });
    sr.reveal('.about-img', { origin: 'left', delay: 300 });
    sr.reveal('.about-content', { origin: 'right', delay: 400 });
    sr.reveal('.services-box', { origin: 'bottom', interval: 200 });
    sr.reveal('.portfolio-box', { origin: 'bottom', interval: 200 });
    sr.reveal('.contact form', { origin: 'top', delay: 500 });
    sr.reveal('.footer-text', { origin: 'bottom', delay: 100 });

    // Smooth Scroll (optional enhancement)
    const scrollLinks = document.querySelectorAll('.navbar a');
    scrollLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });