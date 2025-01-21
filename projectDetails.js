let currentIndex = 0;
let carouselTimer;

// Function to set the active carousel item
function setCarousel(index) {
    const carouselItems = document.querySelectorAll(".carousel-item");
    const previewImages = document.querySelectorAll(".preview-image");

    // Update carousel active class with smooth transition
    carouselItems.forEach((item, i) => {
        item.classList.remove("active", "slide-in", "slide-out");
        if (i === index) {
            item.classList.add("active", "slide-in");
        } else if (i === currentIndex) {
            item.classList.add("slide-out");
        }
    });

    // Update preview active class
    previewImages.forEach((img, i) => {
        img.classList.remove("active");
        if (i === index) img.classList.add("active");
    });

    currentIndex = index;

    // Reset the timer
    resetCarouselTimer();
}

// Function to start the carousel auto-rotation
function startCarouselTimer() {
    carouselTimer = setInterval(() => {
        const carouselItems = document.querySelectorAll(".carousel-item");
        const nextIndex = (currentIndex + 1) % carouselItems.length;
        setCarousel(nextIndex);
    }, 5000);
}

// Function to reset the timer
function resetCarouselTimer() {
    clearInterval(carouselTimer); // Clear the current timer
    startCarouselTimer(); // Restart the timer
}

// Start the timer initially
startCarouselTimer();

// Add click event listeners to preview images
document.querySelectorAll(".preview-image").forEach((img, index) => {
    img.addEventListener("click", () => {
        setCarousel(index); // Set the clicked preview image as active
    });
});


// Function to open the modal and display the selected image
function openModal(imageSrc) {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const caption = document.getElementById('caption');

    modal.style.display = 'flex'; // Show modal
    modalImage.src = imageSrc; // Set image source
    caption.textContent = imageSrc.split('/').pop().split('.')[0]; // Set caption based on filename
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none'; // Hide modal
}


// hamburger
const toggleButton = document.querySelector('.navbar-toggle');
const navbarLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('collapsed');
});
