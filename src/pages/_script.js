// Particelle nel hero
const particlesContainer = document.getElementById("particles");
for (let i = 0; i < 30; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 20 + "s";
    particle.style.animationDuration = 15 + Math.random() * 10 + "s";
    particlesContainer.appendChild(particle);
}

// Intersection Observer per scroll reveal
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, observerOptions);

// Osserva tutti gli elementi con classe reveal
document
    .querySelectorAll(".reveal")
    .forEach((el) => observer.observe(el));

// Osserva le card
document.querySelectorAll(".card").forEach((el) => observer.observe(el));

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

// Effetto parallax leggero sullo scroll
let ticking = false;

window.addEventListener("scroll", () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector(".hero::before");

            // Parallax sui servizi
            const services = document.querySelector(".services");
            if (services) {
                const servicesTop = services.offsetTop;
                const servicesScroll = scrolled - servicesTop;
                if (
                    servicesScroll > -window.innerHeight &&
                    servicesScroll < window.innerHeight
                ) {
                    services.style.backgroundPositionY =
                        servicesScroll * 0.5 + "px";
                }
            }

            ticking = false;
        });
        ticking = true;
    }
});