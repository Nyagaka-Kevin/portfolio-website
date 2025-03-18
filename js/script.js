document.addEventListener("DOMContentLoaded", function() {
    const dynamicText = document.getElementById("dynamic-text");
    const skillsText = document.getElementById("skills-text");
    const projectCounter = document.getElementById("project-counter");
    let count = 0;

    // Update welcome text on index.html
    if (dynamicText) {
        setInterval(() => {
            count++;
            dynamicText.textContent = `Welcome to Kevin Nyagaka's Portfolio - Page loaded ${count} times!`;
        }, 1000);
    }

    // Dynamic skills display on about.html
    if (skillsText) {
        const skills = [
            "Java", "Python", "C++", "HTML5", "CSS", "JavaScript",
            "React", "Tailwind", "Node.js", "MySQL", "Machine Learning",
            "Git", "IT Support"
        ];
        let skillIndex = 0;

        setInterval(() => {
            skillsText.style.opacity = "0"; // Fade out
            setTimeout(() => {
                skillsText.textContent = `Current Skill: ${skills[skillIndex]}`;
                skillsText.style.opacity = "1"; // Fade in
                skillIndex = (skillIndex + 1) % skills.length; // Loop through skills
            }, 500);
        }, 3000); // Change every 3 seconds
    }

    // Dynamic project counter on portfolio.html
    if (projectCounter) {
        let projectCount = 0;
        const totalProjects = 4; // Update this number based on your project count

        setInterval(() => {
            projectCounter.style.opacity = "0"; // Fade out
            setTimeout(() => {
                projectCount = (projectCount + 1) % (totalProjects + 1);
                projectCounter.textContent = `Projects Viewed: ${projectCount} of ${totalProjects}`;
                projectCounter.style.opacity = "1"; // Fade in
            }, 500);
        }, 4000); // Change every 4 seconds
    }

    // Form submission with Formspree on contact.html
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent default form submission

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            // Validation
            if (name === "" || email === "" || subject === "" || message === "") {
                alert("Please fill in all fields.");
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            // Formspree endpoint (replace with your Formspree URL)
            const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnnpnwoo"; // e.g., https://formspree.io/f/myyourid
            const formData = new FormData(contactForm);

            fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json"
                }
            })
            .then(response => {
                if (response.ok) {
                    alert("Message sent successfully! I’ll get back to you soon.");
                    contactForm.reset(); // Clear the form
                } else {
                    alert("Failed to send message. Please try again later.");
                }
            })
            .catch(error => {
                alert("An error occurred. Please try again later.");
                console.error("Error:", error);
            });
        });
    }
});