document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });

    const donationForm = document.getElementById('donationForm');
    const contactForm = document.getElementById('contactForm');

    donationForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const bloodType = document.getElementById('bloodType').value;

        // Check if all fields are filled
        if (name && email && bloodType) {
            alert(`Thank you, ${name}! Your blood type (${bloodType}) has been submitted.`);
            this.reset(); // Clear the form after submission
        } else {
            alert('Please fill out all fields before submitting.');
        }
    });

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Your message has been sent!');
        this.reset(); // Clear the form after submission
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // ... (previous JavaScript code) ...

    const consultationForm = document.getElementById('consultationForm');

    consultationForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('nameConsultation').value;
        const email = document.getElementById('emailConsultation').value;
        const specialty = document.getElementById('specialty').value;
        const question = document.getElementById('question').value;

        // Check if all fields are filled
        if (name && email && specialty && question) {
            alert(`Thank you, ${name}! Your consultation request for ${specialty} has been submitted.`);

            // Additional actions (like sending data to the server) would go here

            // Clear the form after submission
            consultationForm.reset();
        } else {
            alert('Please fill out all fields before submitting.');
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const consultationForm = document.getElementById('consultationForm');
    const doctorCallMessage = document.getElementById('consultationSuccessMessage');

    consultationForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('nameConsultation').value;
        const email = document.getElementById('emailConsultation').value;
        const specialty = document.getElementById('specialty').value;
        const question = document.getElementById('question').value;

        // Check if all fields are filled
        if (name && email && specialty && question) {
            // Show message about the doctor calling
            doctorCallMessage.textContent = `Thank you, ${name}! A doctor will call you shortly to discuss your ${specialty} consultation.`;

            // Clear the form after submission
            consultationForm.reset();
        } else {
            alert('Please fill out all fields before submitting.');
        }
    });
});

