/* ==================================================
   NAVIGATION COMPONENT
   ================================================== */

function loadNavigation() {

    const navbar = document.getElementById("navbar");

    if (!navbar) return;

    navbar.innerHTML = `
        <nav class="navbar">

            <a href="index.html" class="logo">
                AP
            </a>

            <div class="nav-links">

                <a href="index.html#projects">
                    Projects
                </a>

                <a href="about.html">
                    About
                </a>

                <a href="resume.html">
                    Resume
                </a>

                <a href="#contact">
                    Contact
                </a>

            </div>

        </nav>
    `;
}


/* ==================================================
   NAVIGATION SCROLL EFFECT
   ================================================== */

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 20) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});



/* ==================================================
   CONTACT COMPONENT
   ================================================== */

function loadContact() {

    const contact = document.getElementById("contact");

    if (!contact) return;

    contact.innerHTML = `

        <section class="contact-section">

            <div class="contact-status">
                <span class="status-dot"></span>
                Open to work
            </div>


            <h2>Let's connect</h2>


            <div class="email-container">

                <button
                    class="email-copy"
                    onclick="copyEmail()"
                    aria-label="Copy email address"
                >
                    ✉
                </button>

                <button
                    class="email-address"
                    onclick="copyEmail()"
                >
                    anjalip112004@gmail.com
                </button>

            </div>


            <p class="copy-message" id="copy-message">
                Email copied!
            </p>


            <div class="social-links">

                <a
                    href="https://www.linkedin.com/in/anjalipatel04"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>

                <a
                    href="https://github.com/anjalipatel11"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>

            </div>

        </section>
    `;
}





/* ==================================================
   COPY EMAIL
   ================================================== */

function copyEmail() {

    const email = "anjalip112004@gmail.com";

    navigator.clipboard.writeText(email);

    const message = document.getElementById("copy-message");

    if (message) {

        message.style.opacity = "1";

        setTimeout(() => {
            message.style.opacity = "0";
        }, 2000);

    }
}


/* ==================================================
   LOAD COMPONENTS
   ================================================== */

loadNavigation();
loadContact();





/* ==================================================
   BACK TO TOP
   ================================================== */

const backToTop = document.querySelector(".back-to-top");

if (backToTop) {

    const toggleBackToTop = () => {

        if (window.scrollY > window.innerHeight * 0.7) {
            backToTop.classList.add("visible");
        } else {
            backToTop.classList.remove("visible");
        }

    };

    window.addEventListener("scroll", toggleBackToTop, {
        passive: true
    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

    toggleBackToTop();
}






/* ==================================================
   PERSONA CAROUSEL
   ================================================== */

const personaCards = document.querySelectorAll(".persona-card");
const personaPrev = document.querySelector(".persona-prev");
const personaNext = document.querySelector(".persona-next");

if (personaCards.length && personaPrev && personaNext) {

    let currentPersona = 0;

    function showPersona(index) {

        personaCards.forEach((card, i) => {
            card.classList.toggle("active", i === index);
        });

    }


    personaNext.addEventListener("click", () => {

        currentPersona =
            (currentPersona + 1) % personaCards.length;

        showPersona(currentPersona);

    });


    personaPrev.addEventListener("click", () => {

        currentPersona =
            (currentPersona - 1 + personaCards.length)
            % personaCards.length;

        showPersona(currentPersona);

    });


    showPersona(currentPersona);

}









/* ==================================================
   PROJECT PROGRESS INDICATOR
   ================================================== */

const progressItems = document.querySelectorAll(".progress-item");

const progressSections = [...progressItems]
    .map(item => document.querySelector(item.getAttribute("href")))
    .filter(Boolean);

if (progressItems.length && progressSections.length) {

    const updateProgress = () => {

        const scrollPosition = window.scrollY + window.innerHeight * 0.35;

        let currentSection = progressSections[0];

        progressSections.forEach(section => {

            if (scrollPosition >= section.offsetTop) {
                currentSection = section;
            }

        });

        progressItems.forEach(item => {

            item.classList.toggle(
                "active",
                item.getAttribute("href") === `#${currentSection.id}`
            );

        });

    };

    window.addEventListener("scroll", updateProgress, { passive: true });

    updateProgress();
}



lucide.createIcons();