// crousel description effect
document.addEventListener('DOMContentLoaded', function () {
    const caption = document.querySelector('.carousel-caption');
  
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          caption.classList.add('visible'); // Show the caption with animation
        } else {
          caption.classList.remove('visible'); // Hide the caption when out of view
        }
      });
    });
  
    observer.observe(caption); // Watch for when the caption enters the viewport
  });
  
// crousel description effect




// content section 1

document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.custom-card');
  
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.5 });
  
    cards.forEach(card => {
      observer.observe(card);
    });
  });
  
// content section 1





// image slider effect
let currentSlide = 0;

function slideNext() {
  const slider = document.getElementById('slider');
  const totalSlides = slider.children.length;
  const maxSlide = totalSlides - 1;

  if (currentSlide < maxSlide) {
    currentSlide++;
  } else {
    currentSlide = 0; // Loop back to the first slide
  }

  const transformValue = `translateX(-${currentSlide * 100}%)`;
  slider.style.transform = transformValue;
}

function slidePrev() {
  const slider = document.getElementById('slider');
  const totalSlides = slider.children.length;

  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = totalSlides - 1; // Loop back to the last slide
  }

  const transformValue = `translateX(-${currentSlide * 100}%)`;
  slider.style.transform = transformValue;
}

// image slider effect