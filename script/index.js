
window.addEventListener("DOMContentLoaded", () => {
    // Animate normal sections
    gsap.set(".fade-in", { opacity: 0, y: 50 });
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".fade-in", {
        opacity: 1,
        y: 0,
        duration: 5,
        scrollTrigger: {
            trigger: ".fade-in",
            start: "top 80%",
            toggleActions: "play none none reverse",
            scrub: true
        }
    });

    const gallery = document.querySelector(".horizontal-gallery");
    const totalScroll = gallery.scrollWidth - window.innerWidth;

    gsap.to(gallery, {
        x: () => `-${totalScroll}px`,
        ease: "none",
        scrollTrigger: {
            trigger: ".gallery-section",
            start: "top top",
            end: () => `+=${totalScroll}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
            onLeave: () => ScrollTrigger.refresh() //
        }
    });

    gsap.from("nav.container-fluid", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2
    });

    document.querySelectorAll(".scroll").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("data");
            const targetSection = document.getElementById(targetId)
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });

            document.getElementById("menu-toggle").checked = false; 
        });
    });

});
