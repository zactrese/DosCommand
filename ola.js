document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach(function(box) {
        box.addEventListener("click", function() {
            const fullContent = box.querySelector(".full-content");
            fullContent.style.display = fullContent.style.display === "none" ? "block" : "none";

            // Collapse other boxes
            boxes.forEach(function(otherBox) {
                if (otherBox !== box) {
                    otherBox.querySelector(".full-content").style.display = "none";
                }
            });
        });
    });
});

function scrollToBoxes() {
    const boxesSection = document.querySelector('.boxes-section');
    boxesSection.scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener('scroll', function() {
    var footer = document.querySelector('.footer'); // Corrected selector
    var scrollPosition = window.scrollY + window.innerHeight;
    var documentHeight = document.body.scrollHeight;

    if (scrollPosition >= documentHeight) {
        footer.style.display = 'block'; 
    } else {
        footer.style.display = 'none';
    }
});