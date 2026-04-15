gsap.registerPlugin(ScrollTrigger);
document.querySelectorAll(".kpi").forEach(el=>{
animateCounter(el,el.dataset.value);
});