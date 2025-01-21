// Show content based on button click
// Show content with fade-in and fade-out effect
function showContent(id) {
    const contents = document.querySelectorAll('.content');
    const buttons = document.querySelectorAll('.content-button');
  
    // Remove the 'active' class from all content and buttons
    contents.forEach((content) => content.classList.remove('active'));
    buttons.forEach((button) => button.classList.remove('active'));
  
    // Add the 'active' class to the selected content and button
    document.getElementById(`content-${id}`).classList.add('active');
    buttons[id - 1].classList.add('active');
  }
  
  
  // Scroll to the About section
  function scrollToAbout() {
    const aboutSection = document.querySelector('.about-me');
    const offset = 100;
    const topPosition = aboutSection.getBoundingClientRect().top + window.scrollY - offset;
  
    window.scrollTo({ top: topPosition, behavior: 'smooth' });
  }
  

  function scrollToHome() {
    document.querySelector('.hero-container').scrollIntoView({ behavior: 'smooth' });
  }

  function scrollToContact() {
    document.querySelector('.connect-with-me').scrollIntoView({ behavior: 'smooth' });
  }
  

  document.addEventListener("DOMContentLoaded", () => {
    const hash = window.location.hash; // Get the hash from the URL
    if (hash) {
        const targetElement = document.querySelector(hash); // Find the target element
        if (targetElement) {
            const offset = 100; // Offset value to account for the navbar
            const topPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({
                top: topPosition, // Adjusted position with offset
                behavior: "smooth" // Enable smooth scrolling
            });
        }
    }
});


// hamburger
const toggleButton = document.querySelector('.navbar-toggle');
const navbarLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('collapsed');
});
