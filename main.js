// ===============================
// CURSOR GLOW
// ===============================

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});

// ===============================
// GSAP CONFIG
// ===============================

gsap.registerPlugin(ScrollTrigger);

// ===============================
// HERO ANIMATION
// ===============================

gsap.from(".tag", {
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.from(".hero h1", {
    y: 60,
    opacity: 0,
    duration: 1.2,
    delay: 0.2,
    ease: "power3.out"
});

gsap.from(".hero p", {
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.5
});

gsap.from(".hero-buttons", {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.8
});

gsap.from(".social-links", {
    y: 20,
    opacity: 0,
    duration: 1,
    delay: 1
});

// ===============================
// METRIC CARDS
// ===============================

gsap.utils.toArray(".metric-card").forEach((card) => {

    gsap.from(card, {

        scrollTrigger: {
            trigger: card,
            start: "top 85%"
        },

        y: 50,
        opacity: 0,
        duration: 1

    });

});

// ===============================
// PROJECTS
// ===============================

gsap.utils.toArray(".project-card").forEach((card) => {

    gsap.from(card, {

        scrollTrigger: {
            trigger: card,
            start: "top 85%"
        },

        y: 80,
        opacity: 0,
        duration: 1.1

    });

});

// ===============================
// ARCHITECTURE
// ===============================

gsap.utils.toArray(".arch-card").forEach((card) => {

    gsap.from(card, {

        scrollTrigger: {
            trigger: card,
            start: "top 85%"
        },

        scale: 0.95,
        opacity: 0,
        duration: 1

    });

});

// ===============================
// GITHUB
// ===============================

gsap.utils.toArray(".repo-card").forEach((card) => {

    gsap.from(card, {

        scrollTrigger: {
            trigger: card,
            start: "top 85%"
        },

        y: 50,
        opacity: 0,
        duration: 0.9

    });

});

// ===============================
// TIMELINE
// ===============================

gsap.utils.toArray(".timeline-item").forEach((item) => {

    gsap.from(item, {

        scrollTrigger: {
            trigger: item,
            start: "top 85%"
        },

        x: -60,
        opacity: 0,
        duration: 1

    });

});

// ===============================
// CONTACT
// ===============================

gsap.from(".contact h2", {

    scrollTrigger: {
        trigger: ".contact",
        start: "top 75%"
    },

    y: 40,
    opacity: 0,
    duration: 1

});

gsap.from(".contact-links a", {

    scrollTrigger: {
        trigger: ".contact",
        start: "top 75%"
    },

    y: 20,
    opacity: 0,
    duration: 1,
    stagger: 0.15

});

// ===============================
// PARALLAX HERO
// ===============================

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    const scrollY = window.scrollY;

    hero.style.transform =
        `translateY(${scrollY * 0.15}px)`;

});

// ===============================
// NUMBER COUNTER ANIMATION
// ===============================

const counters = document.querySelectorAll(".metric-card h2");

counters.forEach(counter => {

    const updateCount = () => {

        const targetText = counter.innerText;

        const number = parseInt(
            targetText.replace(/[^\d]/g, "")
        );

        if (!number) return;

        let current = 0;

        const increment = number / 80;

        const interval = setInterval(() => {

            current += increment;

            if (current >= number) {

                counter.innerText = targetText;

                clearInterval(interval);

            } else {

                if (targetText.includes("₹")) {

                    counter.innerText =
                        "₹" + Math.floor(current);

                } else {

                    counter.innerText =
                        Math.floor(current) + "+";

                }

            }

        }, 20);

    };

    ScrollTrigger.create({

        trigger: counter,

        start: "top 85%",

        once: true,

        onEnter: updateCount

    });

});

// ===============================
// ACTIVE NAV LINK
// ===============================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});

// ===============================
// REVEAL EFFECT
// ===============================

gsap.from(".section-title", {

    scrollTrigger: {

        trigger: ".section-title",

        start: "top 85%"

    },

    y: 40,
    opacity: 0,
    duration: 1

});

console.log(
    "Portfolio V2 Loaded Successfully 🚀"
);
