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
		slides = document.querySelectorAll(".slide");

	let currentIndex = 1;

	function updateSlides() {
		slides.forEach((slide, index) => {
			if (index === currentIndex) {
				slide.classList.add("active");
			} else {
				slide.classList.remove("active");
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

	setInterval(goToNextSlide, 5000); // Automatically go to the next slide every 5 seconds
}

slider();

// IIFE - Immediately Invoked Function Expression

(function test() {
	// console.log("test");
})();
