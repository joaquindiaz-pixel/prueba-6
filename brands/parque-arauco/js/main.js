gsap.registerPlugin(ScrollTrigger);

// Barra de progreso
gsap.to(".progress-bar", {
    width: "100%",
    ease: "none",
    scrollTrigger: { scrub: 0.3 }
});

// Animaciones Hero
gsap.from(".reveal-text", { scale: 0.8, opacity: 0, duration: 2, ease: "expo.out" });

// Secciones Pinneadas
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".strategy-pin",
        start: "top top",
        end: "+=2000",
        pin: true,
        scrub: 1
    }
});

tl.from(".p1", { opacity: 0, y: 50 })
  .to(".p1", { opacity: 0, y: -50, delay: 0.5 })
  .from(".p2", { opacity: 0, y: 50 }, "<")
  .to(".p2", { opacity: 1, y: 0 });

// Contadores
document.querySelectorAll('.kpi-number').forEach(num => {
    animateCounter(num, num.getAttribute('data-value'));
});

// Gráfico
const ctx = document.getElementById('growthChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [{
            label: 'Frecuencia Proyectada',
            data: [1.2, 1.8, 2.5, 3.0],
            borderColor: '#FF3B30',
            backgroundColor: 'rgba(255, 59, 48, 0.1)',
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { grid: { color: '#222' }, ticks: { color: '#666' } },
            x: { grid: { color: '#222' }, ticks: { color: '#666' } }
        },
        plugins: { legend: { display: false } }
    }
});
