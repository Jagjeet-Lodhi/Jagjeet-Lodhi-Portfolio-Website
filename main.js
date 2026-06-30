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

//  Portfolio Form Details Send on Gmail 

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_x7wgpgd",   // your service ID
        "template_1x7jqaq",  // your template ID
        this
    ).then(() => {

        const msg = document.getElementById("successMsg");
        msg.style.display = "block";

        setTimeout(() => {
            msg.style.display = "none";
        }, 3000);

        this.reset();

    }).catch((error) => {
        console.log("FAILED...", error);
    });
});
