// Autoplay Videos on Viewport
const initVideoScroll = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.play().catch(() => {});
            else entry.target.pause();
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.phone__screen video, .card-video').forEach(v => observer.observe(v));
};

// Counter Animation helper
const animateCounter = (el, endValue) => {
    gsap.fromTo(el, { innerText: 0 }, {
        innerText: endValue,
        duration: 2,
        ease: "power2.out",
        snap: { innerText: 1 },
        scrollTrigger: {
            trigger: el,
            start: "top 90%"
        }
    });
};

document.addEventListener('DOMContentLoaded', initVideoScroll);
