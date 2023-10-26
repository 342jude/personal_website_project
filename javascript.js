
console.log("Hello World")
alert("Hello World")

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting to a server

    // Do any form validation if required...

    document.getElementById('successMessage').removeAttribute('hidden');
});
