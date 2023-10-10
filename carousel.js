const imageUrls = [
    'image1.avif', // Replace with your Unsplash image URLs
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    // Add more image URLs as needed
];

let currentIndex = 0;
const imageElement = document.querySelector('.image-container img');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

function showImage(index) {
    imageElement.src = imageUrls[index];
}

function nextImage() {
    currentIndex++;
    if (currentIndex >= imageUrls.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
}

function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imageUrls.length - 1;
    }
    showImage(currentIndex);
}

nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);

// Automatic image changing
function autoChangeImage() {
    nextImage();
}

let intervalId = setInterval(autoChangeImage, 1000); // Change image every 3 seconds

// Pause automatic changing when hovering over the carousel
const carouselContainer = document.querySelector('.carousel-container');

carouselContainer.addEventListener('mouseenter', () => {
    clearInterval(intervalId);
});

carouselContainer.addEventListener('mouseleave', () => {
    intervalId = setInterval(autoChangeImage, 1000);
});

// Initial image display
showImage(currentIndex);
