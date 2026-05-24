// timer functions, setTimeout and setInterval
function asyncFunctions() {
	const setTimeoutBtn = document.getElementById("setTimeout");
	const clearTimeoutBtn = document.getElementById("clearTimeout");
	const setIntervalBtn = document.getElementById("setInterval");
	const clearIntervalBtn = document.getElementById("clearInterval");

	function syncFn() {
		console.log("This is a synchronous function.");
		for (let i = 0; i < 100000000; i++) {} // simulate a heavy task
		console.log("Finished heavy task.");
	}

	// syncFn();
	// console.log("This will log after the synchronous function finishes.");

	function logText() {
		console.log("This is a log from the logText function.");
		return "Log complete.";
	}

	function asyncFn() {
		console.log("11111...This is an asynchronous function.");

		setTimeout(() => {
			console.log(
				"222222....This log is from the setTimeout callback, executed after 0.5 seconds.",
			);
		}, 500);

		setTimeout(() => {
			console.log(
				"33333....This log is from the setTimeout callback, executed after 0 seconds.",
			);
		}, 0);

		console.log(
			"44444...This will log immediately after the asynchronous function is called.",
		);
	}

	// asyncFn();

	// console.log(
	// 	"55555...This will log immediately after the asynchronous function is called, but before the setTimeout callbacks.",
	// );

	let timeoutId, intervalId;
	setTimeoutBtn.addEventListener("click", () => {
		timeoutId = setTimeout(() => {
			console.log("This message is displayed after 2 seconds.");
		}, 2000);

		console.log(timeoutId);
	});

	clearTimeoutBtn.addEventListener("click", () => {
		if (timeoutId) {
			clearTimeout(timeoutId);
			timeoutId = null; // reset the timeoutId after clearing
			console.log("Timeout cleared.");
		}
	});

	setIntervalBtn.addEventListener("click", () => {
		intervalId = setInterval(() => {
			console.log("This message is displayed every 2 seconds.");
		}, 2000);
	});

	clearIntervalBtn.addEventListener("click", () => {
		if (intervalId) {
			clearInterval(intervalId);
			intervalId = null; // reset the intervalId after clearing
			console.log("Interval cleared.");
		}
	});
}

// slider functionality
function slider() {
	// generate slides dynamically

	const nextBtn = document.querySelector(".next"),
		prevBtn = document.querySelector(".prev"),
		slides = document.querySelectorAll(".slide"),
		dots = document.querySelectorAll(".dot"),
		slidesWrapper = document.querySelector(".slider-wrapper");

	let currentIndex = 1;

	function updateSlides() {
		slides.forEach((slide, index) => {
			if (index === currentIndex) {
				slide.classList.add("active");
			} else {
				slide.classList.remove("active");
			}
		});

		dots.forEach((dot, index) => {
			if (index === currentIndex) {
				dot.classList.add("active");
			} else {
				dot.classList.remove("active");
			}
		});
	}

	function goToNextSlide() {
		if (currentIndex >= slides.length - 1) {
			currentIndex = 0; // Loop back to the first slide
			// nextBtn.setAttribute("disabled", "disabled"); // Disable the next button
		} else {
			currentIndex++;
		}
		// prevBtn.removeAttribute("disabled"); // Enable the previous button if it was disabled
		updateSlides();
	}

	function goToPreviousSlide() {
		if (currentIndex === 0) {
			currentIndex = slides.length - 1; // Loop back to the last slide
			// prevBtn.setAttribute("disabled", "disabled"); // Disable the previous button
		} else {
			// prevBtn.removeAttribute("disabled"); // Enable the previous button if it was disabled
			currentIndex--;
		}
		updateSlides();
	}

	updateSlides(); // Initialize the slider to show the first slide

	// nextBtn.addEventListener("click", goToNextSlide);

	// prevBtn.addEventListener("click", goToPreviousSlide);

	// keyboard events

	// document.addEventListener("keyup", (event) => {
	// 	// console.log("Key released:", event);

	// 	if (event.keyCode === 39) {
	// 		// Right arrow key
	// 		goToNextSlide();
	// 	}
	// 	if (event.keyCode === 37) {
	// 		// Left arrow key
	// 		goToPreviousSlide();
	// 	}
	// });

	let autoSlideInterval = setInterval(goToNextSlide, 5000); // Automatically go to the next slide every 5 seconds

	slidesWrapper.addEventListener("mouseenter", () => {
		clearInterval(autoSlideInterval); // Stop auto-sliding when mouse enters the slider area
	});

	slidesWrapper.addEventListener("mouseleave", () => {
		autoSlideInterval = setInterval(goToNextSlide, 5000); // Resume auto-sliding when mouse leaves the slider area
	});

	dots.forEach((dot) => {
		dot.addEventListener("click", () => {
			currentIndex = parseInt(dot.getAttribute("data-index"));
			updateSlides();
		});
	});
}

slider();

// IIFE - Immediately Invoked Function Expression

(function test() {
	// console.log("test");
})();

const clock = document.querySelector(".clock");
const countdown = document.querySelector(".countdown");

function updateClock() {
	const now = new Date();
	const hours = String(now.getHours()).padStart(2, "0");
	const minutes = String(now.getMinutes()).padStart(2, "0");
	const seconds = String(now.getSeconds()).padStart(2, "0");
	clock.textContent = `${hours}:${minutes}:${seconds}`;
}

updateClock(); // Initial call to display the clock immediately
setInterval(updateClock, 1000); // Update the clock every second

function updateCountdown() {
	const now = new Date();
	const targetDate = new Date("2026-05-29T20:00:00");
	const timeDifference = targetDate - now;

	if (timeDifference <= 0) {
		countdown.textContent = "The lesson has started!";
		return;
	}

	const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
	);
	const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

	countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown(); // Initial call to display the countdown immediately
setInterval(updateCountdown, 1000); // Update the countdown every second
