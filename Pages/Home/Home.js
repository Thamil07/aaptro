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
document.addEventListener("DOMContentLoaded", () => {
	// Get references to the product divs and data divs
	const product1 = document.querySelector(".product_1");
	const product2 = document.querySelector(".product_2");
	const product3 = document.querySelector(".product_3");

	const foldCratesData = document.querySelector(".fold_crates_data");
	const normalCratesData = document.querySelector(".normal_crates_data");
	const otherCratesData = document.querySelector(".other_crates_data");

	// Function to hide all data sections
	function hideAllData() {
		foldCratesData.style.display = "none";
		normalCratesData.style.display = "none";
		otherCratesData.style.display = "none";
	}

	// Add click event listeners to each product div
	if (product1 && product2 && product3) {
		// Ensure elements are not null
		product1.addEventListener("click", () => {
			hideAllData();
			foldCratesData.style.display = "flex"; // Show foldable crates data
			foldCratesData.scrollIntoView({ behavior: "smooth" }); // Scroll into view
		});

		product2.addEventListener("click", () => {
			hideAllData();
			normalCratesData.style.display = "flex"; // Show normal crates data
			normalCratesData.scrollIntoView({ behavior: "smooth" }); // Scroll into view
		});

		product3.addEventListener("click", () => {
			hideAllData();
			otherCratesData.style.display = "flex"; // Show other crates data
			otherCratesData.scrollIntoView({ behavior: "smooth" }); // Scroll into view
		});
	} else {
		console.error("One or more elements could not be found");
	}
});
