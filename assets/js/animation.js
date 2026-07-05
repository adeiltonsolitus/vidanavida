/*==========================================================
    CTA - INTERSECTION OBSERVER
==========================================================*/
const cta = document.querySelector(".cta");

if (cta) {
    const ctaObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    ctaObserver.observe(cta);
}