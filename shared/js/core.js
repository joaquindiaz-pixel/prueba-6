gsap.to(".progress-bar",{width:"100%",scrollTrigger:{trigger:"body",scrub:1}});
function animateCounter(el,end){
gsap.fromTo(el,{innerText:0},{innerText:end,duration:2,snap:{innerText:1}});
}
