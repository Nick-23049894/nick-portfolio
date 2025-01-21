let currentIndex = 0;

// Function to handle carousel transitions
function setCarousel(index) {
    const items = document.querySelectorAll('.carousel-item');
    const sidebarItems = document.querySelectorAll('.sidebar-item');

    if (index === currentIndex) return; // Prevent re-triggering the same slide

    // Remove active class and add slide-out animation to the current item
    const currentItem = items[currentIndex];
    currentItem.classList.remove('active');
    currentItem.classList.add('slide-out');

    // Remove slide-out class after transition ends
    currentItem.addEventListener('transitionend', () => {
        currentItem.classList.remove('slide-out');
    }, { once: true });

    // Add active class to the new item
    const nextItem = items[index];
    nextItem.classList.add('active');

    // Update sidebar active state
    sidebarItems.forEach((item) => item.classList.remove('active'));
    sidebarItems[index]?.classList.add('active');

    // Update the current index
    currentIndex = index;
}

// Auto-rotate carousel every 10 seconds
setInterval(() => {
    const items = document.querySelectorAll('.carousel-item:not(.hidden)');
    if (items.length > 0) {
        const nextIndex = (currentIndex + 1) % items.length;
        setCarousel(nextIndex);
    }
}, 8000);

const filterButtons = document.querySelectorAll('.filter-buttons .btn');
const projectCards = document.querySelectorAll('.project-card');

function filterSelection(category) {
    projectCards.forEach((card) => {
        // Check if the card matches the selected category
        if (category === 'all' || card.classList.contains(category)) {
            card.classList.remove('hidden', 'fade-out'); // Ensure the card is visible and not fading out
            card.classList.add('fade-in'); // Trigger fade-in animation
        } else {
            card.classList.remove('fade-in'); // Remove fade-in if it exists
            card.classList.add('fade-out'); // Trigger fade-out animation

            // Delay hiding the card until after fade-out completes
            setTimeout(() => {
                card.classList.add('hidden');
            }, 500); // Match the duration of the CSS transition
        }
    });

    // Update active button state
    filterButtons.forEach((btn) => {
        btn.classList.remove('active'); // Remove active class from all buttons
    });

    const clickedButton = [...filterButtons].find((btn) =>
        btn.getAttribute('onclick').includes(category)
    );
    if (clickedButton) {
        clickedButton.classList.add('active'); // Add active class to the clicked button
    }
}

// Call this function initially to show all projects
filterSelection('all');

// Add scroll-to-top functionality
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// hamburger
const toggleButton = document.querySelector('.navbar-toggle');
const navbarLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('collapsed');
});
