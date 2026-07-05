/*==========================================================
    LOADER
==========================================================*/
document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    if (loader) {
        setTimeout(() => {
            loader.classList.add("hidden");
            setTimeout(() => {
                loader.style.display = "none";
            }, 500); 
        }, 1200);
    }
});

/* Fade inicial Hero */
document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".hero-content");
    if (hero) {
        hero.animate(
            [
                { opacity: 0, transform: "translateY(60px)" },
                { opacity: 1, transform: "translateY(0)" }
            ],
            { duration: 1000, easing: "ease-out" }
        );
    }
});

/*==========================================================
    HEADER (Efeito ao rolar)
==========================================================*/
const header = document.querySelector(".header");
if (header) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}

/*==========================================================
    INTERSECTION OBSERVERS (Animações ao rolar)
==========================================================*/
const observerOptions = { threshold: 0.2 };
const generalObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, observerOptions);

const aboutCards = document.querySelectorAll(".about-card");
aboutCards.forEach(card => generalObserver.observe(card));

const featureCards = document.querySelectorAll(".feature-card");
featureCards.forEach(card => generalObserver.observe(card));

const courseCards = document.querySelectorAll(".course-card");
if (courseCards.length > 0) {
    const courseObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.15 });
    courseCards.forEach(card => courseObserver.observe(card));
}

/*==========================================================
    CARROSSEL DE DEPOIMENTOS
==========================================================*/
const slides = document.querySelectorAll(".testimonial");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

if (slides.length > 0) {
    let current = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        if (slides[index]) slides[index].classList.add("active");
        if (dots[index]) dots[index].classList.add("active");
    }

    if (nextBtn) {
        nextBtn.onclick = () => {
            current = (current + 1) >= slides.length ? 0 : current + 1;
            showSlide(current);
        };
    }

    if (prevBtn) {
        prevBtn.onclick = () => {
            current = (current - 1) < 0 ? slides.length - 1 : current - 1;
            showSlide(current);
        };
    }

    setInterval(() => {
        current = (current + 1) >= slides.length ? 0 : current + 1;
        showSlide(current);
    }, 5000);
}

/*==========================================================
    FAQ
==========================================================*/
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach(item => {
    const button = item.querySelector(".faq-question");
    if (button) {
        button.addEventListener("click", () => {
            faqItems.forEach(faq => {
                if (faq !== item) faq.classList.remove("active");
            });
            item.classList.toggle("active");
        });
    }
});

/*==========================================================
    BOTÃO VOLTAR AO TOPO
==========================================================*/
const topButton = document.getElementById("backToTop");
if (topButton) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
            topButton.classList.add("show");
        } else {
            topButton.classList.remove("show");
        }
    });

    topButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

/*==========================================================
    LOGICA DE CONTROLE DO POP-UP (MODAL)
==========================================================*/
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("mvvModal");
    const openBtn = document.getElementById("openMvvModal"); // Alvo do botão unificado criado anteriormente
    const closeBtn = document.getElementById("closeMvvModal");

    if (modal && openBtn && closeBtn) {
        // Abre o Modal
        openBtn.addEventListener("click", (e) => {
            e.preventDefault();
            modal.classList.add("active");
            document.body.style.overflow = "hidden"; // Impede que a página role ao fundo
        });

        // Fecha no botão X
        closeBtn.addEventListener("click", () => {
            modal.classList.remove("active");
            document.body.style.overflow = ""; // Restaura a rolagem da página
        });

        // Fecha ao clicar fora da caixa branca (no overlay escuro)
        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.classList.remove("active");
                document.body.style.overflow = "";
            }
        });
    }
});