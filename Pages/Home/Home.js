document.addEventListener("DOMContentLoaded", function () {
	// Select slides and slide container
	let currentSlide = 0;
	const slides = document.querySelectorAll(".slide-content");
	const slideContainer = document.querySelector(".slide");

	// Check if the slideContainer is found
	if (!slideContainer) {
		console.error("Slide container with class '.slide' not found.");
		return;
	}

	const totalSlides = slides.length;

	// Function to show the slide based on index
	function showSlide(index) {
		currentSlide = (index + totalSlides) % totalSlides;
		slideContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
	}

	// Function to change slides with arrows
	function changeSlide(direction) {
		showSlide(currentSlide + direction);
	}

	// Automatically change slides every 5 seconds
	setInterval(() => {
		changeSlide(1);
	}, 5000);

	// Initialize the slider
	showSlide(currentSlide);

	// Add event listeners for navigation buttons
	const prevButton = document.querySelector(".prev-slide");
	const nextButton = document.querySelector(".next-slide");

	if (prevButton) {
		prevButton.addEventListener("click", () => {
			changeSlide(-1);
		});
	} else {
		console.error("Previous slide button not found.");
	}

	if (nextButton) {
		nextButton.addEventListener("click", () => {
			changeSlide(1);
		});
	} else {
		console.error("Next slide button not found.");
	}
});
