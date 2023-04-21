// Get the DOM elements for the image carousel
const wrapper = document.querySelector(".wrapper"),
  carousel = document.querySelector(".carousel"),
  images = document.querySelectorAll("img"),
  buttons = document.querySelectorAll(".button");

let imageIndex = 1,
  intervalId;

// Define function to start automatic image slider
const autoSlide = () => {
  // Start the slideshow by calling slideImage() every 2 seconds
  intervalId = setInterval(() => slideImage(++imageIndex), 2000);
};
// Call autoSlide function on page load
autoSlide();

// A function that updates the carousel display to show the specified image
const slideImage = (index) => {
  // Calculate the updated image index
  imageIndex =
    index === undefined ? ++imageIndex : index;
  imageIndex =
    imageIndex > images.length
      ? 1
      : imageIndex < 1
      ? images.length
      : imageIndex;

  // Move the carousel to display the new image
  carousel.style.transform = `translateX(${
    -(imageIndex - 1) * (100 / images.length)
  }%)`;
};

// Add event listeners to the previous and next buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    clearInterval(intervalId);
    slideImage(
      imageIndex +
        (button.id === "prev" ? -1 : 1)
    );
  });
});

// Pause the automatic slideshow on mouseover
wrapper.addEventListener("mouseover", () => {
  clearInterval(intervalId);
});

// Resume the automatic slideshow on mouseout
wrapper.addEventListener("mouseout", () => {
  autoSlide();
});
