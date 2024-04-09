const carouselImages = document.querySelector('.carousel-images');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    let currentIndex = 0;

    function updateCarousel() {
      carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    leftArrow.addEventListener('click', () => {
      currentIndex = Math.max(currentIndex - 1, 0);
      updateCarousel();
    });

    rightArrow.addEventListener('click', () => {
      currentIndex = Math.min(currentIndex + 1, carouselImages.children.length - 1);
      updateCarousel();
    });
document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".carousel-container");
    const images = document.querySelector(".carousel-images");
    const prevBtn = document.querySelector(".left-arrow");
    const nextBtn = document.querySelector(".right-arrow");
  
    let scrollAmount = 0;
  
    nextBtn.addEventListener("click", function () {
      scrollAmount += 500; // Adjust based on image width
      images.style.transform = `translateX(-${scrollAmount}px)`;
    });
  
    prevBtn.addEventListener("click", function () {
      scrollAmount -= 500; // Adjust based on image width
      images.style.transform = `translateX(-${scrollAmount}px)`;
    });
  });