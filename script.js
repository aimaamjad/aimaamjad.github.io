const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    themeToggle.textContent =
        document.body.classList.contains("dark-mode") ? "☀️" : "🌙";

});


const backToTop = document.getElementById("back-to-top");

backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }

});
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {

    sections.forEach(function (section) {

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("show");
        }

    });

});
const typingText = [
    "Data Analyst",
    "ML Enthusiast",
    "Computational Biology Learner"
];

let textIndex = 0;
let charIndex = 0;

function typeEffect() {
    const typing = document.getElementById("typing");

    if (charIndex < typingText[textIndex].length) {
        typing.textContent += typingText[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(() => {
            typing.textContent = "";
            charIndex = 0;
            textIndex = (textIndex + 1) % typingText.length;
            typeEffect();
        }, 1500);
    }
}

typeEffect();
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const filter = button.getAttribute("data-filter");

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        projectCards.forEach(function (card) {

            if (filter === "all" || card.classList.contains(filter)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});