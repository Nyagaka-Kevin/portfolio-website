document.addEventListener("DOMContentLoaded", function() {
    const dynamicText = document.getElementById("dynamic-text");
    const skillsText = document.getElementById("skills-text");
    const projectCounter = document.getElementById("project-counter");
    const blogCounter = document.getElementById("blog-counter");
    const postForm = document.getElementById("post-form");
    let count = 0;
    let timer;

    // Update welcome text on index.html with stop condition
    if (dynamicText) {
        timer = setInterval(() => {
            count++;
            dynamicText.textContent = `Welcome to Kevin Nyagaka's Portfolio - Page loaded ${count} times!`;

            // Stop after 10 counts and reset
            if (count >= 10) {
                clearInterval(timer);
                setTimeout(() => {
                    count = 0;
                    timer = setInterval(arguments.callee, 1000); // Restart the interval
                }, 2000); // Wait 2 seconds before resetting
            }
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
            skillsText.style.opacity = "0";
            setTimeout(() => {
                skillsText.textContent = `Current Skill: ${skills[skillIndex]}`;
                skillsText.style.opacity = "1";
                skillIndex = (skillIndex + 1) % skills.length;
            }, 500);
        }, 3000);
    }

    // Dynamic project counter on portfolio.html
    if (projectCounter) {
        let projectCount = 0;
        const totalProjects = 4;

        setInterval(() => {
            projectCounter.style.opacity = "0";
            setTimeout(() => {
                projectCount = (projectCount + 1) % (totalProjects + 1);
                projectCounter.textContent = `Projects Viewed: ${projectCount} of ${totalProjects}`;
                projectCounter.style.opacity = "1";
            }, 500);
        }, 4000);
    }

    // Dynamic blog counter on index.html
    if (blogCounter) {
        let blogCount = 0;
        const totalPosts = 2;

        setInterval(() => {
            blogCounter.style.opacity = "0";
            setTimeout(() => {
                blogCount = (blogCount + 1) % (totalPosts + 1);
                blogCounter.textContent = `Posts Viewed: ${blogCount} of ${totalPosts}`;
                blogCounter.style.opacity = "1";
            }, 500);
        }, 3500);
    }

    // Handle post submission form on index.html
    if (postForm) {
        postForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const title = document.getElementById("post-title").value.trim();
            const date = document.getElementById("post-date").value;
            const content = document.getElementById("post-content").value.trim();

            if (title === "" || date === "" || content === "") {
                alert("Please fill in all fields.");
                return;
            }

            const newPost = {
                title: title,
                date: date,
                content: content
            };
            console.log("New Post:", newPost);

            postForm.reset();
            alert("Post submitted successfully! (Check console for now; add to page with backend later)");
        });
    }

    // Form submission with Formspree on contact.html
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || subject === "" || message === "") {
                alert("Please fill in all fields.");
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnnpnwoo"; // Replace with your Formspree URL
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
                    contactForm.reset();
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