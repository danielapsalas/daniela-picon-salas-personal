// Toggle for smaller screens
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementsByClassName('toggle-button')[0];
    const navbarLinks = document.getElementsByClassName('navbar-links')[0];

    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
    });
});

//changing paragraph
const paragraphElement = document.getElementById("changing-paragraph");
const texts = ["Software Developer", "Astronomy Fanatic", "Movie Enjoyer", "Animal Lover"];

let currentIndex = 0;

function updateParagraph() {
    paragraphElement.textContent = texts[currentIndex];

    currentIndex = (currentIndex + 1) % texts.length;
}

updateParagraph();

setInterval(updateParagraph, 2000);