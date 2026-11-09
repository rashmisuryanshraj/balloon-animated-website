
// Scroll reveal animation
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// Mobile navigation
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});


// Balloon movement with mouse
const balloons = document.querySelectorAll(".balloon");

document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 15;
    const y = (e.clientY / window.innerHeight - 0.5) * 15;

    balloons.forEach((balloon, index) => {
        balloon.style.marginLeft = `${x * (index + 1) / 5}px`;
        balloon.style.marginTop = `${y * (index + 1) / 5}px`;
    });
});


// Page loading
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});


// Celebration click effect
document.querySelectorAll(".primary-btn").forEach(button => {
    button.addEventListener("click", () => {
        for (let i = 0; i < 12; i++) {
            const particle = document.createElement("span");

            particle.innerHTML = ["🎈", "✨", "🎉"][Math.floor(Math.random() * 3)];

            particle.style.position = "fixed";
            particle.style.left = Math.random() * 100 + "vw";
            particle.style.top = "80vh";
            particle.style.fontSize = "25px";
            particle.style.pointerEvents = "none";
            particle.style.zIndex = "9999";

            document.body.appendChild(particle);

            particle.animate([
                { transform: "translateY(0) scale(1)", opacity: 1 },
                { transform: `translateY(-${200 + Math.random() * 300}px) scale(0)`, opacity: 0 }
            ], {
                duration: 1500,
                easing: "ease-out"
            });

            setTimeout(() => particle.remove(), 1500);
        }
    });
});
