AOS.init({
    duration: 2000,
    once: true,
    easing: 'ease-in-out'
});

// Typing Effect
const roles = ["Java Developer", "Full Stack Java Developer", "Web Developer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let wait = 2000;

function typeEffect() {
    const currentRole = roles[roleIndex];
    const typingElement = document.getElementById("typing-text");

    if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex--);
        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
        setTimeout(typeEffect, 50);
    } else {
        typingElement.textContent = currentRole.substring(0, charIndex++);
        if (charIndex === currentRole.length + 1) {
            isDeleting = true;
            setTimeout(typeEffect, wait);
        } else {
            setTimeout(typeEffect, 100);
        }
    }
}

// Image Hover Effect
document.addEventListener('DOMContentLoaded', () => {
    const imageBox = document.querySelector('.image-box');
    const profileImg = document.querySelector('.profile-img');

    // Add perspective to the container
    imageBox.style.perspective = "1000px";

    imageBox.addEventListener('mousemove', (e) => {
        const box = imageBox.getBoundingClientRect();
        const centerX = box.left + box.width / 2;
        const centerY = box.top + box.height / 2;
        const xAxis = (centerX - e.clientX) / 20;
        const yAxis = (centerY - e.clientY) / 20;

        profileImg.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) scale(1.05)`;
    });

    imageBox.addEventListener('mouseenter', () => {
        profileImg.style.transition = 'transform 0.2s ease-out';
    });

    imageBox.addEventListener('mouseleave', () => {
        profileImg.style.transition = 'transform 0.6s ease-in-out';
        profileImg.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
    });

    // Start typing effect
    typeEffect();
});


document.addEventListener("DOMContentLoaded", () => {
    const animatedItems = document.querySelectorAll(".scroll-animate, .scroll-animate-back");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            } else {
                entry.target.classList.remove("active");
            }
        });
    }, {
        threshold: 0.9
    });

    animatedItems.forEach(item => {
        observer.observe(item);
    });
});


// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll(
        '.about-image img, .about-containt, .desc, .detail-item, .aboutme h1, .aboutme p, .reveal'
    );

    const manualReveal = () => {
        revealElements.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementBottom = el.getBoundingClientRect().bottom;
            const revealPoint = 80;

            if (elementTop < windowHeight - revealPoint && elementBottom > 0) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        });
    };

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                } else {
                    entry.target.classList.remove('active');
                }
            });
        }, {
            threshold: 0.2
        });

        revealElements.forEach(el => observer.observe(el));
    } else {
        window.addEventListener('scroll', manualReveal);
        manualReveal();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll(
        '.reveal, .skill-card, .skill-head h1, .skill-head p, .skill-icon, .skill-card h3'
    );

    const manualReveal = () => {
        revealElements.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementBottom = el.getBoundingClientRect().bottom;
            const revealPoint = 80;

            if (elementTop < windowHeight - revealPoint && elementBottom > 0) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        });
    };

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                } else {
                    entry.target.classList.remove('active');
                }
            });
        }, {
            threshold: 0.5
        });

        revealElements.forEach(el => observer.observe(el));
    } else {
        window.addEventListener('scroll', manualReveal);
        manualReveal();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal1, .educations h1, .educations p');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active'); // ensures reverse animation
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(el => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal1');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active'); // ensures reverse animation
            }
        });
    }, {
        threshold: 0.90
    });

    revealElements.forEach(el => observer.observe(el));
});


document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll(
        '.project h1, .project p , .project-card'
    );

    const manualReveal = () => {
        revealElements.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementBottom = el.getBoundingClientRect().bottom;
            const revealPoint = 80;

            if (elementTop < windowHeight - revealPoint && elementBottom > 0) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        });
    };

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                } else {
                    entry.target.classList.remove('active');
                }
            });
        }, {
            threshold: 0.5
        });

        revealElements.forEach(el => observer.observe(el));
    } else {
        window.addEventListener('scroll', manualReveal);
        manualReveal();
    }
});

function openModal(name, desc, img, img1, tech, github) {
    const modal = document.getElementById('projectModal');
    document.getElementById('modalTitle').textContent = name;
    document.getElementById('modalDesc').textContent = desc;
    document.getElementById('modalImg').src = img;
    document.getElementById('modalImg2').src = img1;
    document.getElementById('modalGithub').href = github;

    const techContainer = document.getElementById('modalTech');
    techContainer.innerHTML = '';
    tech.forEach(t => {
        const span = document.createElement('span');
        span.className = 'tech-item';
        span.textContent = t;
        techContainer.appendChild(span);
    });

    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.certification h1, .certification p');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active'); // ensures reverse animation
            }
        });
    }, {
        threshold: 0.5
    });

    revealElements.forEach(el => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.contact h1, .contact1 p , .contact-info, .contact-form');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active'); // ensures reverse animation
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(el => observer.observe(el));
});