/* ================= SIDEBAR ================= */

const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
    sidebar.classList.add("open");
    overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
    overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
    sidebar.classList.remove("open");
    overlay.classList.remove("active");
});


/* ================= CLOSE MENU AFTER CLICK ================= */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

        sidebar.classList.remove("open");
        overlay.classList.remove("active");

    });

});


/* ================= TYPING EFFECT ================= */

const typingElement =
    document.getElementById("typing");

const words = [
    "Software Developer",
    "Web Developer",
    "Java Developer",
    "Problem Solver",
    "Tech Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1400);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}

typeEffect();


/* ================= ACTIVE NAV ON SCROLL ================= */

const sections =
    document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 200;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {
            link.classList.add("active");
        }

    });

});


/* ================= CONTACT FORM ================= */

const form =
    document.getElementById("contactForm");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    const button =
        form.querySelector("button");

    button.innerHTML =
        `Message Sent ✓`;

    button.style.background =
        "linear-gradient(135deg,#16a34a,#22c55e)";

    setTimeout(() => {

        button.innerHTML =
            `Send Message
             <i class="fa-regular fa-paper-plane"></i>`;

        button.style.background = "";

        form.reset();

    }, 2500);

});


/* ================= REVEAL ANIMATION ================= */

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


document
    .querySelectorAll(
        ".skill-card, .service-card, .project-card, .timeline-item"
    )
    .forEach(element => {

        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";

        element.style.transition =
            "opacity .7s ease, transform .7s ease";

        observer.observe(element);

    });


/* Add animation class */

const style =
document.createElement("style");

style.innerHTML = `
    .skill-card.show,
    .service-card.show,
    .project-card.show,
    .timeline-item.show {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;

document.head.appendChild(style);


/* ================= MOUSE GLOW ================= */

document.addEventListener("mousemove", (e) => {

    const x = e.clientX;
    const y = e.clientY;

    document.body.style.setProperty(
        "--mouse-x",
        `${x}px`
    );

    document.body.style.setProperty(
        "--mouse-y",
        `${y}px`
    );

});