var typed = new Typed(".text", {
    strings: ["Full Stack Developer", "Frontend Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

// Toggle active menu visibility when the corner icon is clicked
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x'); // Smoothly switch icon look if Boxicons is synced
    navbar.classList.toggle('active');
});

// Close the floating mobile menu layout when selecting an option target
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// Reset logic if viewport is resized back to desktop proportions
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
});



const form = document.getElementById("contactForm");
const msg = document.getElementById("successMsg");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // stop page reload

    // show success message
    msg.style.display = "block";

    // hide message after 2 seconds and scroll to home
    setTimeout(() => {
        msg.style.display = "none";

        document.getElementById("home").scrollIntoView({
            behavior: "smooth"
        });
    }, 2000);

    // reset form
    form.reset();
});
