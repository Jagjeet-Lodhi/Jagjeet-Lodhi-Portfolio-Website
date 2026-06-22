var typed = new Typed(".text", {
    strings: ["Full Stack Developer", "Frontend Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
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